<template>
  <div>
    <form novalidate @submit.prevent='validateUser'>
      <md-field>
        <label for='username'>{{ $t('Login.Username') }}</label>
        <md-input name='username' id='username' autocomplete='username' v-model='form.username'>
        </md-input>
      </md-field>

      <md-field>
        <label>{{ $t('Login.Password') }}</label>
        <md-input
          type='password'
          name='password'
          id='password'
          autocomplete='password'
          v-model='form.password'>
        </md-input>
      </md-field>

      <md-button type='submit' class='md-primary md-raised'>{{ $t('Login.Login') }}</md-button>
    </form>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { validationMixin } from 'vuelidate';
import {
  required,
  email,
} from 'vuelidate/lib/validators';

export default Vue.extend({
  name: 'LoginForm',
  mixins: [validationMixin],
  data: () => ({
    form: {
      username: null,
      password: null,
    },
  }),
  validations: {
    form: {
      username: {
        required,
        email,
      },
      password: {
        required,
      },
    },
  },
  methods: {
    saveUser() {
      this.$emit('login');
    },
    validateUser() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.saveUser();
      }
    },
  },
});
</script>
