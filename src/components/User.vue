<template>
  <div class="bg-success text-white rounded-pill atras" @click="returnUser">
    <p class="h1">←</p>
  </div>

  <div
    :class="[
      { 'bg-light text-dark': color === false },
      { 'negro text-white': color === true },
      'alto',
    ]"
  >
    <section
      :class="[
        { 'bg-white text-dark': color === false },
        { 'bg-dark ': color === true },
        'container alto',
      ]"
    > 
    <div >

{{$route.params.user}}



      <div class="head">
        <img :src="data.avatar_url" alt="" />
        <h1 class="fs-1">{{ data.name }} ({{ data.login }})</h1>
      </div>
      <div class="head-detail">
        <div>
          <h5>Followers ({{ data.followers }})</h5>

          <div class="follow">
            <img :src="followersarray[0].avatar_url" />
            <img :src="followersarray[1].avatar_url" />
            <img :src="followersarray[2].avatar_url" />
            <img :src="followersarray[3].avatar_url" />
          </div>
        </div>
        <div>
          <h5>Following ({{ data.following }})</h5>

          <div class="follow">
            <img :src="followingsarray[0].avatar_url" />
            <img :src="followingsarray[1].avatar_url" />
            <img :src="followingsarray[2].avatar_url" />
            <img :src="followingsarray[3].avatar_url" />
          </div>
        </div>
      </div>

      <div class="division bg-success"></div>
      <div>
        <button type="button" class="btn btn-success col-3"
        @click="changevalue(1)">
          Followers ({{ data.followers }})
        </button>
        <button type="button" class="btn btn-warning col-3"
        @click="changevalue(2)">
          Following ({{ data.following }})
        </button>
        <button type="button" class="btn btn-info col-3"
        @click="changevalue(3)">
          Respos({{ data.public_repos }})
        </button>
      </div>
      </div>

      <containerCards />
    </section>
  </div>
</template>

<script>
import { computed, onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";

//component
import containerCards from "./userdetail/container.vue";
export default {
  components: {
    containerCards,
  },

  name: "userDetail",

  

  methods: {
    returnUser() {
      this.$router.push({ name: "home" });
    },
  },

  setup() {
    const store = useStore();
    const data = computed(() => store.state.userGithub);
    const color = computed(() => store.state.DarkMode);
    const followersarray = computed(() => store.state.followers);
    const followingsarray = computed(() => store.state.following);

    const changevalue = (input) =>{
        store.dispatch("chageview",input)
      }

    return { changevalue ,data, color, followersarray, followingsarray  };
  },
};
</script>

<style scoped>
.header{
  width: 100%;
  position: fixed;
  background: black;

}
img {
  height: 20vh;
  width: 20vh;
  border-radius: 100%;
  margin-top: 5vh;
  margin-left: 5vw;
}
.head {
  display: flex;
}
.head-detail {
  display: flex;
  margin-left: 25vw;
}
h1 {
  margin-top: 12vh;
  margin-left: 3vw;
}
h5 {
  margin-top: -5vh;
  margin-right: 2rem;
}
.negro {
  background-color: black;
}

.atras {
  margin-top: 25vh;
  width: 8%;
  height: 8vh;
  padding-left: 4%;
  padding-top: 1vh;
  margin-left: -2%;
  position: fixed;
}
.division {
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  height: 1vh;
  border-radius: 15px;
  margin-top: 3vh;
  margin-bottom: 3vh;
}
button {
  margin-left: 8vh;
}
.follow {
  display: flex;
  margin-top: -4vh;
}
.follow img {
  border-radius: 100%;
  width: 4vh;
  height: 4vh;
  margin-left: -1vh;
}
@media (max-width: 780px) {
  .atras {
    margin-top: 25vh;
    width: 20%;
    height: 8vh;
    padding-left: 8%;
    padding-top: 1vh;
    margin-left: -7%;
    position: fixed;
  }
  .head-detail {
    display: flex;
    margin-left: 16vw;
  }
  h5 {
    margin-top: 2vh;
    margin-right: 1rem;
  }
  button {
    margin-left: 3vh;
  }
}
</style>
