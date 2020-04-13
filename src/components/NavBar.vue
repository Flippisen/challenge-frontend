<template>
  <md-app md-mode="reveal">
    <md-app-toolbar class='md-primary'>
      <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
        <md-icon>menu</md-icon>
      </md-button>
    </md-app-toolbar>

    <md-app-drawer :md-active.sync='menuVisible'>
      <md-toolbar class='md-transparent' md-elevation='0'>Navigation</md-toolbar>

      <md-list>
        <md-list-item to='/'>
          <md-icon>move_to_inbox</md-icon>
          <span class='md-list-item-text' >Inbox</span>
        </md-list-item>
      </md-list>
    </md-app-drawer>

    <md-app-content>
      <slot></slot>
    </md-app-content>
  </md-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'NavBar',
  data: () => ({
    menuVisible: false,
  }),
});
</script>
