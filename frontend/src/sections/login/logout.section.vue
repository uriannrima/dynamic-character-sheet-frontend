<template>

</template>

<script>
import AuthService from 'Shared/services/AuthService';

export default {
    beforeRouteEnter: async function (to, from, next) {
        var result = await AuthService.logout();
        next(vm => {
            if (result) vm.$router.push('/');
        });
    }
}
</script>

<style>

</style>
