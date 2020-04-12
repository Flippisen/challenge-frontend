<template>
    <div>
        <md-field>
            <label>
                {{ $t('Login.Username') }}
            </label>
            <md-input v-model="username" required></md-input>
        </md-field>

        <md-field>
            <label>
                {{ $t('Login.Password') }}
            </label>
            <md-input v-model="password" required type='password'></md-input>
        </md-field>

        <md-button type='submit' class='md-primary md-raised'>{{ $t('Login.Login') }}</md-button>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'LoginForm',
  data: () => ({
    username: '',
    password: '',
  }),
});
</script>
