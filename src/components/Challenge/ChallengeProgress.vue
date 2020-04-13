<template>
  <div class='challenge-progress-container'>
    <div class='progress-bar goal'></div>
    <div class='progress-bar current md-accent' :style='currentProgressStyle'></div>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/styles/variables.scss';

  .challenge-progress-container {
    position: relative;
  }

  .progress-bar {
    height: $challenge-progress-bar-height;
    border-radius: $challenge-progress-bar-border-radius;
  }

  .goal {
    width: 100%;
    background-color: $challenge-progress-bar-goal-background;
  }

  .current {
    position: absolute;
    top: 0;
    background-color: $accent;
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
