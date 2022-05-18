import { createStore } from "vuex";
import axios from "axios";
import { async } from "@firebase/util";

export default createStore({
  //states
  state: {
    //State tipo objeto que almacena las credenciales acceso del usurio
    user: {},
    //change to Dark Mode
    DarkMode: false,
    //loader

    ///fetchbusqueda
    //is
    userGithub: {},
    //followers
    followers: [],
    //followings
    following:[],

    repos:[],

    switchbutton: 1
  },
  getters: {},
  mutations: {
    //Mutacion para colocar los etates
    setElementsLogin(state, payload) {
      state.user = payload;
    },
    //mutacion para cambiar state de DarkMode
    setDarkmode(state, payload) {
      state.DarkMode = payload;
    },
    setUserGitHub(state, payload) {
      state.userGithub = payload;
    },
    //mutation followers
    setFollowers(state, payload) {
      state.followers = payload;
    },
    setFollowing(state, payload) {
      state.following = payload;
    },
    setdatarepos(state,payload){
      state.repos=payload
    },
    setswitchbutton(state,payload){
      state.switchbutton=payload
    }
    
  },
  actions: {
    // extraccion de los datos para los states
    catchDataSession({ commit }, data) {
      const element = {
        user: data.user,
        email: data.email,
        token: data.token,
        photo: data.photo,
      };
      commit("setElementsLogin", element);
    },
    //CAmbio de DarkMode
    ChangeDarkMode({ commit, state }) {
      let changeTo = !state.DarkMode;
      commit("setDarkmode", changeTo);
    },
    //fetch to user
    async getuserGitHub({ commit }, data) {
      const response = await axios.get(`https://api.github.com/users/${data}`);
      const responsef = await axios.get(`https://api.github.com/users/${data}/followers`);
      const responsefollowing = await axios.get(`https://api.github.com/users/${data}/following`);
      const resultrepos = await axios.get(`https://api.github.com/users/${data}/repos`);
      
      commit("setUserGitHub", response.data);
      commit("setFollowers", responsef.data);
      commit("setFollowing", responsefollowing.data);
      commit("setdatarepos",resultrepos.data);
    },
    chageview({commit},input){
      // 0--> sin vista
      // 1--> vista followers
      // 2--> vista following
      // 3--> repos
      commit("setswitchbutton",input)


    }

    
  },
  modules: {},
});
