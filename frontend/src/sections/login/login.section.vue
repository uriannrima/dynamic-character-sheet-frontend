<template>
    <div>
        <label>
            Email:
            <input type="text" v-model="login.email">
        </label>
        <label>
            Password:
            <input type="password" v-model="login.password">
        </label>
        <button @click="doLogin()">Login</button>
        <button @click="doRegistration()">Register</button>
    </div>
</template>

<script>
import AuthService from 'Services/AuthService';
import UserService from 'Services/UserService';

export default {
    data() {
        return {
            login: {
                email: "",
                password: ""
            }
        };
    },
    methods: {
        doLogin: async function () {
            var accessToken = await AuthService.login(this.login);
            if (accessToken) this.$router.push('home');
        },
        doRegistration: async function () {
            var user = await UserService.register(this.login);
            console.log(user);
        }
    }
}
</script>

<style>

</style>
