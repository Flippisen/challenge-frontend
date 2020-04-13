<template>
  <md-list-item :to='`/${item.link}`'>
    <md-icon>{{ $t(`Navbar.${item.title}.Icon`) }}</md-icon>
    <span class='md-list-item-text' >{{ $t(`Navbar.${item.title}.Title`) }}</span>
  </md-list-item>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { NavBarItem } from '@/data/NavBarItem';

export default Vue.extend({
  props: {
    item: Object as PropType<NavBarItem>,
  },
});

</script>
