<template>
  <v-card>
   

    <v-card-subtitle 
    color="orange"
    class="headline mt-2">
    <router-link :to="data.path">
        {{ data.title}}
    </router-link>
    
    </v-card-subtitle>
        <v-card-text class="text--primary">
            <div class="grey--text"><span class="user-said">{{ data.user }} </span> - {{ data.created_at}}</div> 
        </v-card-text>
        <v-card-text v-html="body"></v-card-text>
    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
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
.headline{color: black !important;}
.user-said{color: blueviolet;margin-right:1px}
</style>