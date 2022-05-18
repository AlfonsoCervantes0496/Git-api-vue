<template>
  <nav class="bg-light text-dark navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Vue-GitHub-Firebase</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
         
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              @click="colorchange"
            />
            
            <label class="form-check-label" for="flexSwitchCheckDefault">
              DarkMode?</label
            >
            
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  name: "navBar",
  setup() {
    const store = useStore();
    const colorchange = () => {
      store.dispatch("ChangeDarkMode");
    };
    
    return {
      colorchange,
      
    };
  },
};
</script>
