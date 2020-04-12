<template>
    <div class='login-container'>
      <div class='login-form'>
        <LoginForm />
      </div>
    </div>
</template>

<style lang="scss" scoped>
  .login-container {
    display: flex;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    background-color: #ff0000;
  }
</style>

<script lang="ts">
import Vue from 'vue';
import LoginForm from '@/components/LoginForm.vue';

export default Vue.extend({
  name: 'Login',
  components: {
    LoginForm,
  },
});
</script>
