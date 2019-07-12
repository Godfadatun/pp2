<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="bg-white text-white">
      <q-bar class="bg-primary">
        <q-btn dense flat icon="fab fa-apple" />
        <div class="text-weight-bold">
          App
        </div>
        <q-space />
        <div v-if="!isLoggedIn">
          <q-btn dense flat icon="search" label="Login" to="login" />
          <q-btn  dense flat icon="list" label="Register" to="register"/>        
        </div>
        <div >
          Welcome:  {{userData}}
          <q-btn  dense flat icon="list" label="Logout" />        
        </div>

      </q-bar>
      <q-toolbar>
        <!-- <q-btn dense flat round icon="menu" @click="left = !left" class="lt-sm"/> -->

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          NWPS 
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- <q-drawer side="left" overlay behavior="mobile">
       <q-list>
        <q-item-label header>Essential Links</q-item-label>
        <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Docs</q-item-label>
            <q-item-label caption>quasar.dev</q-item-label>
          </q-item-section>
        </q-item>             
      </q-list>
    </q-drawer>-->

    <q-page-container>
      <router-view />      
    </q-page-container>

    <q-footer class="bg-secondary text-white">
      <div class="row no-wrap items-center q-mt-none q-pa-sm rounded-borders">
              <q-avatar size="80px">
                <img src="/statics/images/logo_nwps.png">
              </q-avatar>

              <q-space />

              <div class="text-caption">
              <div class="q-gutter-sm q-pd-md">
                <q-btn flat dense no-caps color="white" label="FAQ" />
                <q-btn flat dense no-caps color="white" label="Terms & Condition" />
                <q-btn flat dense no-caps color="white" label="Privacy Policy" />
              </div>
                <br>
                Copyright © 2019 NWPS Printing Company.. All Rights Reserved                 
              </div>
            </div>
    </q-footer>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      // left: true
    }
  },

  computed: {
    isLoggedIn: function(){return this.$store.getters['auth/isLoggedIn']},
    userData: function(){return this.$store.getters['auth/user']},
  },
} 
<script>