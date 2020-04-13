<template>
  <div class='dashboard-container'>
    <DashboardCard>
      <template v-slot:header>
        <div class='card-title'>{{ $t('Dashboard.CurrentChallenges.Title') }}</div>
      </template>
      <CurrentChallenges></CurrentChallenges>
    </DashboardCard>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/styles/variables.scss';

  .card-title {
    font-size: $font-size-large;
  }
</style>

<script lang="ts">
import Vue from 'vue';
import CurrentChallenges from '@/components/Dashboard/CurrentChallenges.vue';
import DashboardCard from '@/components/Dashboard/DashboardCard.vue';

export default Vue.extend({
  components: {
    CurrentChallenges,
    DashboardCard,
  },
});
</script>
