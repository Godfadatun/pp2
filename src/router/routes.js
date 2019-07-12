
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', name: 'index', component: () => import('pages/Index.vue') },
      // { path: "home", name: 'home',  component: () => import("pages/Home.vue"), meta: { requiresAuth: true } },
      { path: "login", name: 'login',  component: () => import("pages/Auth.vue"), meta: { auth: true }},
      { path: "register", name: 'register',  component: () => import("pages/Auth.vue"), props: true, meta: { auth: true } },
      
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
