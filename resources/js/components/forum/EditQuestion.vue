<template>
   
        <v-card class="edit-quest">
            <v-form @submit.prevent="update" >
                <v-text-field
                v-model="form.title"
                label="Title"
                type="text"
                required
                ></v-text-field>
                <vue-simplemde v-model="form.body" />
                <v-card-actions>
                    <v-btn class="ma-2" color="#616161" dark small type="submit">Save
                        <v-icon dark right small>mdi-checkbox-marked-circle</v-icon>
                    </v-btn>
                    <v-btn class="ma-2" color="red" dark small @click="cancel">Cancel
                        <v-icon dark right small >mdi-cancel</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-form >
        </v-card>
    
</template>

<script>
export default {
  props:['data'],

    data(){
        return {
            form:{
                title:null,
                body:null
            }
        }
    },
    methods:{
        cancel(){
            EventBus.$emit('cancelEditing')
        },
        update(){
             axios.patch(`/api/question/${this.data.slug}`,this.form)
            .then(res => this.cancel())
            
        }
    },
    
        created(){
            this.form = this.data
        },
    

}
</script>

<style>
.edit-quest{
padding: 10px 10px;
}

</style>