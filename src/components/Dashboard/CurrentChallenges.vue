<template>
  <div class='current-challenges-container'>
    <div class='challenge-progress' v-for="challenge in challenges" :key="challenge.id">
      <div class='challenge-title'>
        {{ challenge.description }}
      </div>
      <ChallengeProgress :progress='challenge.progress'></ChallengeProgress>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/styles/variables.scss';

  .challenge-progress {
    padding: $padding-small 0;

    &:first-child {
      padding-top: 0;
    }
  }

  .challenge-title {
    padding-bottom: $padding-small;
  }
</style>

<script lang="ts">
import Vue from 'vue';
import ChallengeProgress from '@/components/Challenge/ChallengeProgress.vue';

export default Vue.extend({
  components: {
    ChallengeProgress,
  },
  data: () => ({
    challenges: [
      {
        id: 'challenge1',
        description: 'Run 50 miles',
        progress: {
          current: 75,
          goal: 100,
        },
      },
      {
        id: 'challenge2',
        description: 'Do 500 pushups',
        progress: {
          current: 75,
          goal: 500,
        },
      },
    ],
  }),
});
</script>
