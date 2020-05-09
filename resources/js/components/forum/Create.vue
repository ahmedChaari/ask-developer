<template>
<v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs8>
          <v-container>
        <v-form @submit.prevent="create"
                ref="form"
                lazy-validation
                >
                <v-text-field
                v-model="form.title"
                label="Title"
                type="text"
                required
                ></v-text-field>

                <v-select
                    v-model="form.category_id"
                    :items="categories"
                    item-text="name"
                    item-value="id"
                    menu-props="auto"
                    label="Category"  
                ></v-select>

                <vue-simplemde v-model="form.body" />

                <v-btn
                color="warning"
                class="mr-4"
                type="submit"
                >
                Create
                </v-btn>

        </v-form>
        </v-container>
       </v-flex>
         <span style="color:green">SidBare Category</span> 
    </v-layout>
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
                .catch(error => this.errors = error.response.data.error)
        }
    }
}

</script>

<style>

</style>