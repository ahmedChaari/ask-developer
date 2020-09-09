<template>
  <v-container>
        <div  v-if="question">
            <edit-question 
            :data = question
            v-if="editing">    
            </edit-question>
            <show-question v-else
                :data = question
                >
            </show-question>
            <replies 
                :question="question">
            </replies>   
            <new-reply v-if="loggedIn" :questionSlug="question.slug"></new-reply>  
                <div class="mt-6" v-else >
                     <v-btn text color="blue">
                        <router-link to="/login" >login to Reply .......</router-link>
                        <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                </div>
        </div>
  </v-container>
</template>

<script>
import AppSidebar   from './AppSidebar'
import ShowQuestion from './ShowQuestion'
import EditQuestion from './EditQuestion'
import Replies      from '../reply/Replies'
import NewReply     from '../reply/NewReply'

export default {
    components:{ShowQuestion,EditQuestion,Replies,NewReply,AppSidebar},
data(){
    return {
        question:null,
        editing:false
    }
},
created(){
       this.listen()
       this.getQuestion()
       },
       computed:{
            loggedIn(){
                return User.loggedIn()
            }
       },
    methods:{
        listen(){
                EventBus.$on('startEditing',()=>{
                this.editing = true
            }),
                EventBus.$on('cancelEditing',()=>{
                this.editing = false
            })
        },
        getQuestion(){
            axios.get(`/api/question/${this.$route.params.slug}`)
            .then(res => this.question = res.data.data)
            //.catch(error => console.log(error.response.data))

        }
        
    }
}
</script>

<style>

</style>