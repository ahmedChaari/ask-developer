<template>
 <v-container>
     <v-alert v-if="errors" type="error" :value="true">
         you need to add category
     </v-alert>
     <v-card class="form_categ-creat">
        <v-form @submit.prevent="submit">
            <v-text-field
                    v-model="form.name"
                    label="category name *"
                    type="text"
                    required
                    ></v-text-field>
            <v-btn type="submit" color="green" dark v-if="editSlug">
                Update
            </v-btn>
            <v-btn type="submit" color="orange" dark v-else>
                Create
            </v-btn>
        </v-form>
     </v-card>
     
     <v-card>
      <v-toolbar color="indigo" dark dense class="mt-2">
          <v-toolbar-title>
                Categories
          </v-toolbar-title>
      </v-toolbar>
      <v-list>
          <v-list-item  v-for="(category,index) in categories" :key="category.id">
              <v-list-item-action>
                  <v-btn color="green" dark small  @click="edit(index)">
                      <v-icon dark  small >mdi-pencil</v-icon>
                  </v-btn>
              </v-list-item-action>
              <v-list-item-content>
                  <v-list-item-title >
                        {{category.name }}
                  </v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                  <v-btn color="red" dark small @click="destroy(category.slug,index)">
                      <v-icon dark small >mdi-delete</v-icon>
                  </v-btn>
              </v-list-item-action>
          </v-list-item>
      </v-list>
  </v-card>

 </v-container>
</template>

<script>
export default {
    data(){
        return {
            form:{
                name:null
            },
            categories:{},
            editSlug:null,
            errors:null
        }
    },
    
    created(){
        if (!User.admin()) {
            this.$router.push('/forum')
         }
        axios.get('/api/category')
        .then(res => this.categories = res.data.data)
         
    },
    methods:{
        submit(){
            this.editSlug ? this.update() : this.create()
            },
        update(){
            axios.patch(`/api/category/${this.editSlug}`,this.form)
            .then(res => {
                    this.categories.unshift(res.data)
                    this.form.name = null
            })
        },
        create(){
            axios.post('/api/category',this.form)
            .then(res => {
                    this.categories.unshift(res.data)
                    this.form.name = null
            })
            .catch(error=> this.errors = error.response.data.errors)
        },



        destroy(slug,index){
            axios.delete(`/api/category/${slug}`)
            .then(res=> this.categories.splice(index,1))
        
            },
        edit(index){
             this.form.name = this.categories[index].name 
             this.editSlug = this.categories[index].slug 
             this.categories.splice(index,1)
            }
    },
    computed:{
        disabled(){
            return !this.form.name
        }
    },
        
}
</script>

<style>
.form_categ-creat{
   padding: 4px 0px 20px 14px;

}
</style>