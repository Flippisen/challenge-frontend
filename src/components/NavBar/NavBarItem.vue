<template>
  <md-list-item :to='link'>
    <md-icon>{{ $t(`Navbar.${title}.Icon`) }}</md-icon>
    <span class='md-list-item-text' >{{ $t(`Navbar.${title}.Title`) }}</span>
  </md-list-item>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    title: String,
  },
  computed: {
    link() {
      return `/${this.title.toLowerCase()}`;
    },
  },
});

</script>
