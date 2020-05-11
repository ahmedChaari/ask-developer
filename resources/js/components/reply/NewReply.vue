<template>
<div class="mt-3">
     <vue-simplemde v-model="body" />
        <v-btn class="ma-2" color="green" dark small @click="submit">
                    <v-icon dark >mdi-check</v-icon>
        </v-btn>
</div>
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

</style>