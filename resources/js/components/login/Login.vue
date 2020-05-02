<template>
 <v-container>
    <v-form @submit.prevent="login"
    ref="form"
    lazy-validation
  >
    <v-text-field
      v-model="form.email"
      label="E-mail"
      type="email"
      required
    ></v-text-field>

     <v-text-field
      v-model="form.password"
      :counter="10"
      label="Password"
      type="password"
      required
    ></v-text-field>

    <v-btn
      color="warning"
      class="mr-4"
      type="submit"
    >
      Login
    </v-btn>
    <router-link to="/signup">
          <v-btn class="ma-2" color="indigo" dark>
              SignUp
          </v-btn>
    </router-link>
   </v-form>
 </v-container>
</template>
<script>
export default {
  data(){
    return {
      form:{
        email:null,
        password:null,
      }
    }
  },
  methods:{
    login(){
      User.login(this.form)
      this.$router.push({name:'forum'})
    }
  }

}
</script>

<style>

</style>