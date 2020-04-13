<template>
  <div class='challenge-progress-container'>
    <div class='progress-bar goal'></div>
    <div class='progress-bar current md-accent' :style='currentProgressStyle'></div>
  </div>
</template>

<style lang="scss">
  .challenge-progress-container {
    position: relative;
  }

  .progress-bar {
    height: 16px;
    border-radius: 8px;
  }

  .goal {
    width: 100%;
    background-color: #fefefe;
  }

  .current {
    position: absolute;
    top: 0;
    background-color: var(--md-theme-default-accent);
  }
</style>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { ChallengeProgress } from '@/data/ChallengeProgress';

export default Vue.extend({
  props: {
    progress: Object as PropType<ChallengeProgress>,
  },
  computed: {
    currentProgressStyle() {
      return {
        width: `${Math.floor((this.progress.current / this.progress.goal) * 100)}%`,
      };
    },
  },
});
</script>
