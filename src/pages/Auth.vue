<template>
  <q-page padding>
    <login v-if="this.$route.name == 'login'" />
    <register v-if="this.$route.name == 'register'"/>
  </q-page>
</template>

<script>
import login from "components/Auth/login";
import register from "components/Auth/register";
export default {
  // name: 'PageName',
  components:{
    login, register
  }
}
</script>

<style>
</style>
