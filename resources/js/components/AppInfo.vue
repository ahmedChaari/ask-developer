<template>

    <v-card
        v-if="user"
        class="mx-auto info-staff">
        <v-img class=""
       :src="image_src"
        height="100"
        ></v-img>
        <v-list-item>
                <v-list-item-content>
                        <v-list-item-title >{{name}}</v-list-item-title>
                              
                </v-list-item-content>
        </v-list-item>
                <v-card-text style="text-align: justify">
                Visit ten places on our planet that are undergoing the biggest changes today.
                </v-card-text>
    </v-card>
</template>


<script>
export default {
data(){
     return {
       image_src: '/img/info.png',
        user:false ,
        name:''
     };
 },
created(){
        if (User.loggedIn()) {
        this.user = true
        }
        this.getUser();
    },
    methods:{
	getUser(){
          axios.get('/api/auth/profile')
          .then(response => {this.name = response.data.name;})
	    }
	 },
  
}
</script>
<style>

</style>