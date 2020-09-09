<template>
  <v-container>
   
        <question
          :key="question.path"
          v-for="question in questions"
          :data="question"
        >
        </question>
      
  </v-container>
</template>

<script>
import question   from './Question'


export default {
  components:{question},
  data(){
    return {
      questions:{}
    }
  },
  created(){
      axios.get('/api/question')
      .then(res => this.questions = res.data.data)
      .catch(error => console.log(error.response.data))
  }
}
</script>

<style>

</style>