<template>
<v-container>
 <v-card>
        <v-card-title>
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
            ></v-text-field>
        </v-card-title>
      <div class="m-4">
          <v-toolbar color="indigo" dark dense class="mt-2">
          <v-toolbar-title>
                Categories
          </v-toolbar-title>
      </v-toolbar>
      <v-list>
          <v-list-item  v-for="category in categories" :key="category.id">
              <v-list-item-content>
                  <v-list-item-title >
                        {{category.name}}
                  </v-list-item-title>
              </v-list-item-content>
          </v-list-item>
      </v-list> 
      </div>
       <v-card-actions>
           <v-img
           :src="image_src"
           gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
        ></v-img>
       </v-card-actions>
      
  </v-card>
</v-container>
</template>

<script>
export default {
    data(){
        return {
            categories:{

            },
            image_src: '/img/material2.jpg',
        }
    },
 created(){
        axios.get('/api/category')
        .then(res => this.categories = res.data.data)
        //.catch(error => console.log(error.response.data))
    }
}
</script>

<style>


</style>