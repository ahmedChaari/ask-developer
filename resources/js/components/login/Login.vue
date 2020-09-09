<template>
 <v-container>
 
      <v-card>
        <v-container>
          <center>
            <h3>Bon retour parmi nous</h3>
            <p>
              Identifiez-vous pour rester au courant de ce qui se passe
            </p>
          </center>
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
            color="indigo"
            block
            dark
            class="mr-4"
            type="submit"
          >
            S’identifier
          </v-btn>
            Nouveau sur LinkedIn ? 
            <router-link to="/signup">
              <v-btn rounded class="ma-2" color="warning" dark>
                  S’inscrire
              </v-btn>
            </router-link>
        </v-form>
        </v-container>
      </v-card>
 </v-container>
</template>
<script>
import AppSidebar   from '../forum/AppSidebar'

export default {
  components:{AppSidebar},
  data(){
    return {
      form:{
        email:null,
        password:null,
      }
    }
  },
  created(){
    if (User.loggedIn()) {
       this.$router.push({name:'forum'})
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