<template>
  <div>
       <v-btn text  @click="likeIt">
            <v-icon :color="color">mdi-heart</v-icon>{{ count }}
       </v-btn>
   </div>
</template>

<script>
export default {
    props:['content'],
   data(){
       return {
           liked:this.content.liked,
           count:this.content.like_count
       }
   },
   
    methods:{
        likeIt(){
            if (User.loggedIn()) {
                this.liked ? this.desc() : this.incr()
                this.liked = !this.liked
            }
        },
        incr(){
            axios.post(`/api/like/${this.content.id}`)
            .then(res => this.count ++ )
        },
        desc(){
            axios.delete(`/api/like/${this.content.id}`)
            .then(res => this.count -- )
           
        }
    },
    computed:{
        color(){
            return this.count > 0 ? 'red' : 'red lighten-4'
        }
    }
}
</script>

<style>

</style>