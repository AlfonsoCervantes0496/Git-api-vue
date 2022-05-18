<template>
<section :class="[{'bg-dark text-white':color===true},{'bg-light text-dark':color===false}]">
  <navBar />
  <div class="card element block">
    <img :src="userInformation.photo" class="card-img-top" alt="..." />
    <div class="card-body">
      <p class="h2 text-center">Bienvenido</p>
      <p class="card-text text-center">hola </p>
      <p class="card-text text-center">{{userInformation.user}}</p>
    </div>
  </div>
  <search/>
  </section>
</template>

<script>
import { computed } from '@vue/runtime-core';
import {useStore} from "vuex"
import navBar from "../components/nav.vue";
import search from "../components/Busqueda.vue"
export default {
  components: {
    navBar,search
  },
  setup(){
    const store = useStore()
    const userInformation = computed(()=> store.state.user)
    const color = computed(()=>store.state.DarkMode)
    return{userInformation, color}
  }
};
</script>
<style scoped>
section{
  overflow: hidden;
  height: 100vh;
}
.block {
  width: 20%;
  margin-right: 5%;
  margin-left: 100%;
  align-items: center;
  animation: init 5s ;
  position: fixed;
  
}
img {
  width: 5rem;
  margin-top: 1rem;
  height: 5rem;
  border-radius: 100%;
}
@keyframes init {
  0%{margin-left: 75%;}
  20%{margin-left: 75%;}
  100%{margin-left: 100%;}
  
}
@media(max-width: 780px){
  .block{
    display: none;
  }
}
</style>
