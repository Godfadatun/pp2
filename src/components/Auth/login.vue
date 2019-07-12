<template>
 <div class="flex flex-center">
    <q-card square class="my-card" style="width: 100%; max-width: 400px">
      <q-card-section class="text-center">
           <q-img src="statics/logo-black.png" style="width: 200px"/>
          <div class="text-h6 text-grey-7">Login</div>
      </q-card-section>
      <q-card-section class="q-gutter-xs">
        <div>
          <ul v-if="Array.isArray(errors_list)">
            <li v-for="error in errors_list" :key="error.id" class="text-negative">{{ error }}</li>
          </ul>
          <ul v-else>
            <li v-if="errors_list" class="text-negative">{{ errors_list }}</li>
          </ul>
        </div>
        <q-input outlined v-model="form.email" dense label="Email/Username/Phone" name="login-id" v-validate="'required'" class="full-width"/>
        <q-input outlined v-model="form.password" type="password" name="password"  v-validate="'required'" dense label="Password" class="full-width"/>
        <q-btn color="primary" icon="vpn_key" no-caps label="Login" class="full-width" @click="login" :loading="loading">
          <template v-slot:loading>
            <q-spinner-facebook /> Login in
          </template>
        </q-btn>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
 // name: 'ComponentName',
  data () {
    return {
      loading: false,
      form:{
        email: '',
        password: '',
      },
      errors_list: null
    }
  },

  methods: {
    async login(){
      this.errors_list = null;
      let error = await this.$validator.validateAll();
      if (!error) {
        this.errors_list = this.errors.all()
        return
      }

      this.loading = true;
      try{
          let data = await this.$axios.post('api/login', this.form);
          this.$q.notify({message: 'Login successful', color: 'secondary'})
          this.$q.localStorage.set('nwps-token', data.data.token_type +" "+ data.data.access_token);
          this.$store.commit('auth/user', data.data.user);
          this.form.email = '';
          this.form.password = '';
          this.$router.push({name: 'index'});
          this.loading = false;
      }catch(error){
        this.errors_list = 'Error: Please check your login-id or password';
        this.loading = false;
         return
      }
    }
  },
}
</script>

<style>
</style>
