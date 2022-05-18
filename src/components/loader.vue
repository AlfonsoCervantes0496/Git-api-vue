<template>
  <section :class="[{'bg-dark':color===true},{'bg-light':color===false}]"
  v-if="!isloaded">
     <div class="spinner-grow text-success" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-warning" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-info" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
  </section>
</template>

<script>
import { computed } from '@vue/runtime-core'
import {useStore} from "vuex"

export default {
     name:"loader",
     data(){
        return{isloaded:false}
    },
       mounted(){
        setTimeout(()=>{this.isloaded=true},1500)
        

    
    },
    setup(){
        const store = useStore()
        const color = computed(()=>store.state.DarkMode)
        return{color}
    }

    



   
}
</script>

<style scoped>
section{
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999;
}


</style>