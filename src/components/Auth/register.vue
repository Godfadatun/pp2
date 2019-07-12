<template>
  <div class="flex flex-center">
    <q-card class="my-card"  style="width: 100%; max-width: 400px">
      <q-card-section class="text-center">
        <q-img src="statics/logo-black.png" style="width: 200px" />
        <div class="text-h6 text-grey-7">Register</div>
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
        <q-input outlined v-model="form.name" name="name" v-validate="'required'" dense label="Full Name" class="full-width"/>
        <q-input outlined v-model="form.phone" name="phone" v-validate="'required'" dense label="Phone" class="full-width"/>
        <q-input outlined v-model="form.username" name="username" v-validate="'required'" dense label="Username" class="full-width"/>
        <q-input outlined v-model="form.email" dense name="email" label="Email" class="full-width"/>        
        <q-input outlined v-model="form.password" name="password" v-validate="'required'" type="password" dense label="Password" class="full-width"/>
        <q-input outlined v-model="form.confirm_password" name="password_confirmation" v-validate="'required'" type="password" dense label="Confirm Password" class="full-width"/>
        <q-btn color="primary" icon="how_to_reg" no-caps label="Register" class="full-width" @click="register" :loading="loading">
           <template v-slot:loading>
            <q-spinner-facebook /> Registering
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
        name: '',
        phone: '',
        username: '',
        email: '',
        password: '',
        confirm_password: '',
      },
      errors_list: null
    }
  },

  methods: {
    async register(){
      this.errors_list = null

      let error = await this.$validator.validateAll();
      if (!error) {
        this.errors_list = this.errors.all();
        return;
      }

      this.loading = true;
      try{
        let data = await this.$axios.post('api/signup', this.form);
        if (data.data.status == 'error') {
           this.errors_list = data.data.data
           this.loading = false;
           return
        }
        this.$q.localStorage.set('nwps-token', data.data.token_type +" "+ data.data.access_token);
        this.$q.notify({message: 'Registration successful', color: 'secondary'});
        this.$store.commit('auth/user', data.data.user);
        this.clearForm();
        this.$router.push({name: 'index'})
        this.loading = false;
      }catch(error){
        this.errors_list = 'Something went wrong: Please try again';
        this.loading = false;
      }

    },

    clearForm(){
        this.form.name = '';
        this.form.phone = '';
        this.form.user_name = '';
        this.form.email = '';
        this.form.password = '';
        this.form.confirm_password = '';
    }
  },
}
</script>

<style>
</style>
