<template>
  <div class="mt-3">
    <v-card>
       <v-card-title>
            <div class="grey--text">
                <span class="user-said">{{ data.user }} </span> - {{ data.created_at}}
            </div> 
       </v-card-title>
            <v-divider></v-divider>
            <edit-reply v-if="editing"
            :reply="data"
            ></edit-reply>
            
       <div v-if="!editing">
           <v-card-text v-html="reply"></v-card-text>
                <v-divider></v-divider>
            <v-card-actions v-if="own">
                <v-btn class="ma-2" color="green" dark small @click="edit">
                    <v-icon dark small >mdi-pencil</v-icon>
                </v-btn>
                <v-btn class="ma-2" color="red" dark small @click="destroy">
                    <v-icon dark small >mdi-delete</v-icon>
                </v-btn>
            </v-card-actions>
       </div>

    </v-card>
  </div>
</template>

<script>
import EditReply from './EditReply'
export default {
    components:{EditReply},
    props:['data','index'],
    data(){
        return {
            editing:false
        }
    },
    computed:{
        own(){
            return User.own(this.data.user_id)
        },
        reply(){
                return md.parse(this.data.reply)
        }
    },
    created(){
        this.listen()
    },
    methods:{
        edit(){
            this.editing = true
        },
        destroy(){
                EventBus.$emit('deleteReply',this.index)
            },
        listen(){
            EventBus.$on('cancelEditing',()=>{
                this.editing = false
            })
           
        }
    }
}

</script>

<style>

</style>