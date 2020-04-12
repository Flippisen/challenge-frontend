<template>
    <div class='login-container'>
      <div class='login-form'>
        <div class='brand-logo'>
          <img src="@/assets/logo.png" v-on:click="onLogin"/>
        </div>
        <LoginForm v-on:login='onLogin' />
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
    justify-content: center;
    align-items: center;
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
  methods: {
    onLogin() {
      console.log('Hello');
    },
  },
});
</script>
