<template>
  <div>
    <form novalidate @submit.prevent='validateUser'>
      <md-field :class="getValidationClass('username')">
        <label for='username'>{{ $t('Login.Form.Username.Title') }}</label>
        <md-input name='username' id='username' autocomplete='username' v-model='form.username'>
        </md-input>
        <span class='md-error' v-if="!$v.form.username.required">
          {{ $t('Login.Form.Username.Required') }}
        </span>
        <span class='md-error' v-if="!$v.form.username.email">
          {{ $t('Login.Form.Username.Email') }}
          </span>
      </md-field>

      <md-field :class="getValidationClass('password')">
        <label>{{ $t('Login.Form.Password.Title') }}</label>
        <md-input
          type='password'
          name='password'
          id='password'
          autocomplete='password'
          v-model='form.password'>
        </md-input>
        <span class='md-error' v-if="!$v.form.username.required">
          {{ $t('Login.Form.Password.Required') }}
        </span>
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
    getValidationClass(fieldName: string) {
      const field = this.$v.form[fieldName];

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty,
        };
      }
      return {};
    },
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
