<template>

  <v-card
    color="grey lighten-4"
    flat
    height="60px"
    tile>
     <v-toolbar dense>
      <router-link to="/forum">
        <v-btn small color="indigo">
           <v-icon  color="white">mdi-home</v-icon>
        </v-btn>
      </router-link>
         <v-spacer></v-spacer>
         <app-notification></app-notification>
        <router-link
                :key="index"
                v-for="(item, index) in items"
                :to="item.to"
        >
          <v-card-text v-if="item.show">{{ item.title }}</v-card-text>
        </router-link>
    </v-toolbar>
    </v-card>


   
</template>

<script>

import AppNotification from './AppNotification'
export default {
   components:{AppNotification},
data(){
  
    return {
        items:[
            {title : 'Forum',to:'/forum',show:true},
            {title : 'Ask Question',to:'/ask',show: User.loggedIn()},
            {title : 'Login',to:'/login',show:!User.loggedIn()},
            {title : 'Category',to:'/category',show: User.admin()},
            {title : 'Logout',to:'/logout',show: User.loggedIn()},
        ]
    }
  },
  created(){
    EventBus.$on('logout',() => {
      User.logout()
    })
  }

}
</script>

<style>

</style>