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
          <v-btn color="teal">5 Reaplies</v-btn>
          <v-card-text v-html="body"></v-card-text>
      </v-card-title>
  </v-card>
</template>
<script>

export default {
    props:['data'],
    computed:{
        body(){
            return md.parse(this.data.body)
        }
    }
}
</script>

<style>

</style>