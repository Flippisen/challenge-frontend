<template>
  <div class='current-challenges-container'>
    <ChallengeProgress :progress='progress'></ChallengeProgress>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ChallengeProgress from '@/components/Challenge/ChallengeProgress.vue';

export default Vue.extend({
  components: {
    ChallengeProgress,
  },
  data: () => ({
    progress: {
      current: 75,
      goal: 100,
    },
  }),
});
</script>
