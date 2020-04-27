<template>

  <v-card
    color="grey lighten-4"
    flat
    height="60px"
    tile
    >
     <v-toolbar dense>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <router-link to="/"> 
          <v-toolbar-title class="mr-8">Title</v-toolbar-title>
        </router-link>
        <div class="my-2">
          <router-link to=""><v-btn text small color="primary">Blog Forum</v-btn></router-link>
        </div>
        <div class="my-2">
          <router-link to=""><v-btn text small color="primary">Category</v-btn></router-link>
        </div>
        <div class="my-2">
          <router-link to=""><v-btn text small color="primary">Ask Question</v-btn></router-link>
        </div>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
  
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-password</v-icon>
        </v-btn>
  
        <router-link to="/login">
          <v-btn class="ma-2" color="indigo" dark>
              login
          </v-btn>
        </router-link>

      </v-toolbar>
    </v-card>


   
</template>

<script>
export default {

}
</script>

<style>

</style>