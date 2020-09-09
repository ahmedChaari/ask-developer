<template>
<v-container >
<v-card class="form_quest-creat">
      
          <div >
              <v-form @submit.prevent="create"
                  ref="form"
                  lazy-validation
                 
                  >
                   <span class="red--text" v-if="errors.title">{{errors.title[0]}}</span>
                  <v-text-field
                  v-model="form.title"
                  label="Title"
                  type="text"
                  required
                  ></v-text-field>
                   <span class="red--text" v-if="errors.category_id">{{errors.category_id[0]}}</span>
                  <v-select
                      v-model="form.category_id"
                      :items="categories"
                      item-text="name"
                      item-value="id"
                      menu-props="auto"
                      label="Category"  
                  ></v-select>
                 
                  <span class="red--text" v-if="errors.body">{{errors.body[0]}}</span>
                  <vue-simplemde v-model="form.body" />
                  <v-btn class="ma-2" 
                            color="#616161"
                            dark small type="submit"
                            :disabled="disabled"
                         >Create
                        <v-icon dark right small>mdi-checkbox-marked-circle</v-icon>
                </v-btn>
                 
                
          </v-form>
          </div>
          
   
  </v-card>
   </v-container>
</template>

<script>
export default {
    data(){
        return {
            form:{
                title:null,
                category_id:null,
                body:null
              },
              categories:{},
              errors:{}
        }
    },
      created(){
            axios.get('/api/category')
            .then(res => this.categories =res.data.data)
        },
    methods:{
        create(){
                axios.post('/api/question',this.form)
                .then(res => this.$router.push(res.data.path))
                .catch(error => this.errors = error.response.data.errors)
        }
    },
    computed:{
        disabled(){
           return !(this.form.title && this.form.body && this.form.category_id)
        }
    },
    
}

</script>

<style>
.form_quest-creat{
       padding: 4px 10px 20px 10px;
}
</style>