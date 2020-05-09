<template>

  <v-card
    color="grey lighten-4"
    flat
    height="60px"
    tile
    >
    
     <v-toolbar dense>
         <v-spacer></v-spacer>
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
export default {
   
data(){
  
    return {
        items:[
            {title : 'Forum',to:'/forum',show:true},
            {title : 'Ask Question',to:'/ask',show: User.loggedIn()},
            {title : 'Login',to:'/login',show:!User.loggedIn()},
            {title : 'Category',to:'/category',show: User.loggedIn()},
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