<script>
import DcsSavingThrow from './saving-throw.component';
export default {
    props: ['savingThrows'],
    components: { DcsSavingThrow }
}
</script>

<style>

</style>

<template>
    <div style="overflow-x: auto">
        <table class="table saving-table" style="width: 756px">
            <thead>
                <th>
                    Saving Throws
                </th>
            </thead>
            <tbody>
                <dcs-saving-throw v-for="(savingThrow, index) in savingThrows" :saving-throw="savingThrow" :first-row="index == 0" :key="savingThrow.name"></dcs-saving-throw>
            </tbody>
        </table>
    </div>
</template>