<template>
    <v-card class="mt-3">
      <v-container>
        <div>
            <v-text><h4 class="answer">Your Answer</h4></v-text>
            <vue-simplemde v-model="body" />
                <v-btn class="ma-2" color="#616161" dark small  @click="submit">Save
                        <v-icon dark right small>mdi-checkbox-marked-circle</v-icon>
                </v-btn>
        </div>
      </v-container>
    </v-card>
</template>

<script>
export default {
    props:['questionSlug'],
    data(){
        return{
            body:null
        }
    },
    methods:{
        submit(){
             axios.post(`/api/question/${this.questionSlug}/reply`,{body:this.body})
            .then(res => {
                this.body = ''
                EventBus.$emit('newReply',res.data.reply)
                window.scrollTo(0,0)
                })
        }
    }
}
</script>

<style>
.answer{
        margin: 15px 40px;
}
</style>