<template>
<div class="btn btn-outline-info">
<img src="../../assets/GitHub.png" alt="">
<h3>{{repo}}</h3>


</div>
  
</template>

<script>
export default {
    name:"repos",
    props:{
        repo:String
    }

}
</script>

<style scoped>
div{
    width: 40%;
    margin: 2vh;
    border-radius: 15px;
    align-items: center;
    display: flex;
    overflow:hidden;
    
}
img{
    width: 15vh;
    height: 15vh;
}
h3{
    text-align: center;
    width: 40%;
}

</style>