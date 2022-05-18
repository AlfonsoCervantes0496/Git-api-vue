<template>
    <div class="bg-warning" 
    >
        
  <img :src="photo"  alt="">
  
  <h1 class="h1 text-white col-9 text-center" >{{login}}</h1>
 <button type="button" class="btn btn-primary"
 @click="newUser(login)">ir</button>
  </div>

</template>

<script>
import router from '@/router'
import { useStore } from  "vuex"
export default {
    
    name:"followingitem",
    props:{
        photo:String,
        login:String,
       
    },
    methods:{
        newUser(element){
            this.gouser(element)
            this.$router.push({name:"user", params:element})
            alert(element)
        }

    },

    setup()
    {
        const store  = useStore()
        const gouser = (user) =>{
            store.dispatch("getuserGitHub", user)

            
        }
        return{gouser}
    }

}
</script>

<style scoped>


img{
    display: flex;
    height: 5vh;
    width: 5vh;
    border-radius: 100%;
    margin-left: 5%;

}
div{
    display:  flex;
    width: 70%;
    margin-left: 15%;
    margin-right: 15%;
    border-radius: 9px;
    margin-bottom: 1vh;
}


@media(max-width: 780px){

    div{
    display:  flex;
    width: 80%;
    margin-left: 10;
    margin-right: 10%;
    border-radius: 9px;
    margin-bottom: 1vh;

}
img{
    display: flex;
    height: 5vh;
    width: 5vh;
    border-radius: 100%;
    margin-left: 2%;

}
}

</style>