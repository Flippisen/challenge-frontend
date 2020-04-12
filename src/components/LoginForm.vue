<template>
    <div>
        <md-field>
            <label>
                {{ $t('Login.Username') }}
            </label>
            <md-input v-model="username"></md-input>
        </md-field>

        <md-field>
            <label>
                {{ $t('Login.Password') }}
            </label>
            <md-input v-model="password"></md-input>
        </md-field>
    </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data: () => ({
    username: '',
    password: '',
  }),
};
</script>
