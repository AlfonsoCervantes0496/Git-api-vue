<template>
<section :class="[{'bg-dark text-white':color===true},{'bg-white text-dark':color===false}]">
  <navBar />

  <div class="card position bg-transparent ">
    <img src="../assets/logo.png" alt="..." />
    <button type="button" @click="authenticate" class="btn btn-outline-success">
      Ingresar con Google
    </button>
  </div>
  </section>
</template>

<script>
import app from "../utils/firebase";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useStore } from "vuex";
import { computed } from '@vue/runtime-core';
import navBar from "../components/nav.vue"

export default {
  components:{
    navBar
  },
  data() {
    return {
      user: {
        nombre: " ",
        email: " ",
      },
    };
  },
  methods: {
    //boto de autenticacion
    authenticate() {
      ///colocar proveedor
      const provider = new GoogleAuthProvider();
      //autenticacion
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((result) => {
          console.log(result)
          //mandar datos a sore
          this.extractData({
            user: result.user.displayName,
            email: result.user.email,
            token: result.user.accessToken,
            photo:result.user.photoURL
          });
          //redireccionar al otra pagina
          this.$router.push({ name: "home" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  setup() {
    const store = useStore();
    //use de store
    const extractData = (data) => {
      //dispatch para enviar a store
      store.dispatch("catchDataSession", data);
    };
    const color = computed(()=> store.state.DarkMode)
    return { extractData, color };
  },
};
</script>

<style scoped>
section{
  height: 100vh;
}
img {
  width: 25%;
  margin-top: 5vh;
}
button {
  margin-top: 2rem;
  width: 50%;
}

* {
  width: 100%;
  margin: 0;
}
.position {
  width: 30%;
  margin-left: 35%;
  margin-right: 35%;
  height: 40vh;
  margin-top: 15vh;
  align-items: center;
}
@media(max-width: 780px){
.position {
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  height: 50vh; 
}
button {
  margin-top: 2rem;
  width: 80%;
}
img{
  width: 50%;
}
}
</style>
