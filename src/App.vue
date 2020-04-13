<template>
  <div id="app">
    <NavBar v-if="isLoggedIn">
      <router-view/>
    </NavBar>
    <router-view v-else/>
  </div>
</template>

<style lang="scss">

#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
  max-height: 100vh;
  max-width: 100vw;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script lang="ts">
import Vue from 'vue';
import NavBar from '@/components/NavBar.vue';

export default Vue.extend({
  components: {
    NavBar,
  },
  computed: {
    isLoggedIn() {
      return this.$router.currentRoute.path !== '/';
    },
  },
});
</script>
