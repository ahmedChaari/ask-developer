<template>
<v-container>
      <div>
      <vue-simplemde v-model="reply.reply" />
        <v-btn class="ma-2" color="#616161" dark small @click="update">
            <v-icon dark>mdi-check</v-icon>
        </v-btn>
        <v-btn class="ma-2" dark small @click="cancel">
            <v-icon >mdi-cancel</v-icon>
        </v-btn>
  </div>
</v-container>
</template>

<script>
export default {
    props:['reply'],
    methods:{
        cancel(){
            EventBus.$emit('cancelEditing');
        },
        update(){
            axios.patch(`/api/question/${this.reply.question_slug}/reply/${this.reply.id}`,{body:this.reply.reply})
                .then(res => this.cancel())
        }
    }
 
}
</script>

<style>

</style>