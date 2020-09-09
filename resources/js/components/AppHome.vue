<template>
    <div>
        <toolbar></toolbar>
       
        <div class="home" v-if="loggedIn">
            <v-container> 
                <v-layout row wrap style="margin-top: 40px;" >
                    <v-flex  xs2>
                        <app-info ></app-info>
                    </v-flex>
                    <v-flex xs6>
                        <router-view></router-view>
                    </v-flex>
                    <v-flex xs4>
                        <app-sidebar ></app-sidebar>
                    </v-flex>
                </v-layout>
            </v-container>
        </div>
        <div v-if="!loggedIn">
            <router-view></router-view>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>


import toolbar   from './ToolBar'
import AppFooter from './AppFooter'
import Login     from './login/Login'
import AppSidebar from './forum/AppSidebar'
import AppInfo    from './AppInfo'


export default {

data(){
return {
      loggedIn: User.loggedIn()
      }
},
  
    


    components:{
        toolbar, AppFooter,Login,AppSidebar,AppInfo}
    }
</script>
<style>
.home{background-color: whitesmoke;margin-top: 20px}

</style>