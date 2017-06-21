<script>
import DcsAttack from './attack.component';

export default {
    components: { DcsAttack },
    props: ['attacks']
}
</script>

<template>
    <div>
        <dcs-attack v-for="(attack, index) in attacks" :key="index" :attack="attack"></dcs-attack>
    </div>
</template>
