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
    </div>
</template>

<script>
import LoginService from 'Services/LoginService';
console.log(LoginService);

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
        doLogin: async () => {
            let { email, password } = this;
            var login = await LoginService.login({
                email,
                password
            });
        }
    }
}
</script>

<style>

</style>
