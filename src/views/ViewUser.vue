<template>
<loader/>
  <navBar/>
  <userDetail/>
  


    
</template>
<script>
//components
import loader from "../components/loader.vue"
import navBar from "../components/nav.vue"
import userDetail from "../components/User.vue"

//import usestore
import {useStore} from "vuex"
import { onMounted } from '@vue/runtime-core'
export default {
    name:"user",
    components:{
        loader,navBar, userDetail
    },


}
</script>

