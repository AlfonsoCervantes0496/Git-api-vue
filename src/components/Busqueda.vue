<template>
  <div class="Contener">
    <div
      :class="[
        { display: marginhidden === false },
        { displayhidden: marginhidden === true },
      ]"
    >
      <section class="c1c2">
        <div class="c1">
          <h1>¡hola!!</h1>
          <h2>Comienza a buscar perfiles de Git Hub !!!!</h2>
          <button class="btn btn-outline-success" @click="btnHidden">
            Ir Ahora
          </button>
        </div>

        <div class="c2">
          <img src="../assets/GitHub.png" alt="" />
        </div>
      </section>
      <div class="c3">
        <div class="mb-3 c3form">
          <label for="exampleFormControlInput1" class="form-label h1">Iniciar...</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            v-model="tofind"
          />
          <button class="btn btn-success"
          @click="search">buscar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {useStore} from "vuex"
export default {
  name: "searchForm",
  data() {
    return {
      marginhidden: false,
      tofind:""
    };
  },
  methods: {
    btnHidden() {
      this.marginhidden = true;
    },
    search(){
       this.fetchuser(this.tofind)
       this.$router.push({ name: "user", params:{user:this.tofind} });

    }
  },
  setup(){
      const store = useStore()
      const fetchuser = (data) =>{
          store.dispatch("getuserGitHub",data)

      }
      return {fetchuser}


  }
};
</script>

<style scoped>
.c1 {
  width: 60%;
}
.c2 {
  align-items: center;
  margin-top: 8vh;
  width: 40%;
}
.c1c2 {
  display: flex;
  width: 75%;
}

h1 {
  font-size: 17vh;
  margin-left: 7%;
  margin-top: 11vh;
}
h2 {
  font-size: 5vh;
  margin-left: 8%;
  margin-top: 3vh;
}
.c1 button {
  width: 15%;
  margin-left: 25%;
  margin-top: 10vh;
  font-size: 3vh;
}
.Contener {
  width: 100%;
  overflow: hidden;
}
.display {
  width: 160%;
  display: flex;
  margin-left: 0%;
}
.displayhidden {
  width: 160%;
  display: flex;
  margin-left: -60%;
  transition: linear 1s;
}
.c3 {
  width: 25%;
}
.c3form {
  margin-top: 25vh;
  align-items: center;
  text-align: center;
  font-size: 10vh;
  width: 80%;
}
.c3form button {
  width: 15%;
  transition: 0.8s linear;
}

@media (max-width: 780px) {
  .c1c2 {
    display: flex;
    flex-direction: column;
    width: 85%;
  }
  .c1 {
    width: 100%;
  }
  h1 {
    font-size: 10vh;
    margin-left: 7%;
    margin-top: 7vh;
  }
  h2 {
    font-size: 3vh;
    text-align: center;
    margin-top: 1vh;
    width: 80%;
  }
  .c1 button {
    width: 70%;
    margin-left: 15%;
    margin-top: 3vh;
    font-size: 2vh;
  }
  .c2 {
    align-items: center;
    margin-top: 2vh;
    width: 100%;
  }
  img {
    width: 50%;
    margin-left: 25%;
  }

  .c3 {
    width: 50%;
  }

  .c3form {
    margin-top: 15vh;
    align-items: center;
    margin-left: 10%;
    text-align: center;
    font-size: 10vh;
    width: 100%;
  }

  .display {
    width: 160%;
    display: flex;
    margin-left: 0%;
  }
  .displayhidden {
    width: 160%;
    display: flex;
    margin-left: -88%;
    transition: linear 1s;
  }
  .c3form button {
    width: 50%;
  }
}
</style>
