<template>
  <md-app md-mode="reveal" class='app-container'>
    <md-app-toolbar class='md-primary'>
      <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
        <md-icon>menu</md-icon>
      </md-button>
    </md-app-toolbar>

    <md-app-drawer :md-active.sync='menuVisible'>
      <md-toolbar class='md-transparent' md-elevation='0'>Navigation</md-toolbar>

      <md-list>
        <md-list-item to='/challenges'>
          <md-icon>{{ $t('Navbar.Challenges.Icon') }}</md-icon>
          <span class='md-list-item-text' >{{ $t('Navbar.Challenges.Title') }}</span>
        </md-list-item>
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
</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'NavBar',
  data: () => ({
    menuVisible: false,
  }),
});
</script>
