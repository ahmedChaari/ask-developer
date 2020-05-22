<template>
 
   <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
         <v-btn text v-on="on">
            <v-icon color="red" >mdi-message-text</v-icon>8
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="item in unread" :key="item.id">
          <v-list-item-title>{{item.data.question}}</v-list-item-title>
        </v-list-item>
        
        <v-divider></v-divider>

         <v-list-item v-for="item1 in read" :key="item1.id">
          <v-list-item-title>{{item1.data.question}}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
    data(){
        return {
            read : {},
            unread : {},
            unreadCount : 0
        }
    },
    created(){
        if(User.loggedIn()){
            this.getNotifications()
        }
    },
    methods:{
        getNotifications(){
            axios.post('/api/notifications')
            .then(res => {
                this.read = res.data.read
                this.unread = res.data.unread
               
            })
        }
    },
     computed:{
        color(){
            //return this.unreadCount < 0 ? 'red' : 'red lighten-4'
        }
    }
}
</script>

<style>

</style>