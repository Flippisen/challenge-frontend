<template>
  <md-app md-mode="reveal" class='app-container'>
    <md-app-toolbar class='md-primary'>
      <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
        <md-icon>menu</md-icon>
      </md-button>
    </md-app-toolbar>

    <md-app-drawer :md-active.sync='menuVisible'>
      <md-toolbar class='md-transparent' md-elevation='1'>
        <div class='brand-logo-container'>
          <img class='brand-logo' src="@/assets/logo.png"/>
        </div>
      </md-toolbar>

      <md-list>
        <nav-bar-item v-for="navBarItem of navBarItems" :key='navBarItem' :title="navBarItem">
        </nav-bar-item>
      </md-list>
    </md-app-drawer>

    <md-app-content>
      <slot></slot>
    </md-app-content>
  </md-app>
</template>

<style lang="scss" scoped>
  .app-container {
    display: flex;
    height: 100%;
  }

  .brand-logo-container {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .brand-logo {
    height: 50px;
  }
</style>

<script lang="ts">
import Vue from 'vue';
import NavBarItem from '@/components/NavBar/NavBarItem.vue';

export default Vue.extend({
  name: 'NavBar',
  data: () => ({
    menuVisible: false,
    navBarItems: ['Challenges'],
  }),
  components: {
    NavBarItem,
  },
});
</script>
