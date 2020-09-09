<template>

    
          <v-card>
            <v-card-title>
                <div>
                    <div class="headline">
                            <h3>{{ data.title }}</h3>
                    </div>
                        <v-card-text class="text--primary">
                            <div class="grey--text"><span class="user-said">{{ data.user }} </span> - {{ data.created_at}}</div> 
                        </v-card-text>
                </div>
                <v-spacer></v-spacer>
                    <v-btn dark color="blue" small><span class="icon-replies">{{ replyCount }}</span>
                            replies
                    </v-btn>
                <v-card-text v-html="body"></v-card-text>
            </v-card-title>
            <v-card-actions v-if="own">
                 <v-btn class="ma-2" color="#616161" dark small  @click="edit">Edit
                        <v-icon dark right small>mdi-checkbox-marked-circle</v-icon>
                </v-btn>
                    <v-btn class="ma-2" color="red" dark small @click="destroy">Delete
                        <v-icon dark right small >mdi-cancel</v-icon>
                    </v-btn>
            </v-card-actions>
         </v-card>
      
  
</template>
<script>

export default {
    props:['data'],
    data(){
        return {
            own         : User.own(this.data.user_id),
            replyCount  :this.data.replies_count
        }
    },

    computed:{
        body(){
            return md.parse(this.data.body)
        }
    },

    created(){
        EventBus.$on('newReply',()=>{
            this.replyCount++
        });

         Echo.private('App.User.' + User.id())
             .notification((notification) => {
                        this.replyCount++
                    });

          EventBus.$on('deleteReply',()=>{
            this.replyCount--
        });

         Echo.channel('deleteReplyChannel')
                .listen('DeleteReplyEvent' , (e) => {
                    this.replyCount--
                })
    },

    methods:{
        destroy(){
            axios.delete(`/api/question/${this.data.slug}`)
            .then(res => this.$router.push('/forum'))
            .catch(error => console.log(error.response.data))
        },
        //modif for just push the forum
        edit(){
                EventBus.$emit('startEditing') 
        }
    }
}
</script>

<style>
.icon-replies{
    margin-right: 10px;
    font-size: 14px;
  
}

</style>

