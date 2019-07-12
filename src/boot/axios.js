import axios from 'axios'
import { LocalStorage } from 'quasar'

export default async ({ Vue }) => {
  Vue.prototype.$axios = axios;
  axios.defaults.headers.common['Authorization'] = LocalStorage.getItem('nwps-token')
};
