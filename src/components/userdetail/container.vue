<template>
  <div v-if= "btnsection===1">
     <followeritem  
     
     v-for= "followers in followers " 
     :key="followers.id"
     :photo="followers.avatar_url"
     :login="followers.login"
     />
  </div>

  <div v-if= "btnsection===2">
     <followingitem
     
     v-for= "following in following " 
     :key="following.id"
     :photo="following.avatar_url"
     :login="following.login"/>
  </div>

  <div v-if= "btnsection===3" class="repo">
  

    <repos
     v-for= "repos in repos"
    :key="repos.id"
    :repo="repos.name"
    />

     </div>

 
</template>

<script>
import { computed } from '@vue/runtime-core'
import {useStore} from "vuex"
import followeritem from "../userdetail/followers.vue"
import followingitem from "../userdetail/following.vue"
import repos from "../userdetail/repos.vue"
export default {
    name:"containerCards",
    components:{
      followeritem,
      followingitem,
      repos

    },
    setup(){
      const store = useStore()

      const followers = computed(()=>store.state.followers)
      const following = computed(()=>store.state.following)
      const repos = computed(()=>store.state.repos)
      const btnsection = computed(()=>store.state.switchbutton)
      

      
      return{followers,btnsection, following, repos}
      
    }
    

}
</script>

<style scoped>
div{
  margin-top: 1vh;
}
.repo{
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
}
@media(max-width: 780px){
  div{
  width: 96%;
  margin-left: 2%;
  margin-right: 2%;

}

}

</style>