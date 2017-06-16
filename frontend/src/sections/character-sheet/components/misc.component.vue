<script>
export default {

}
</script>

<style>

</style>

<template>
    <div>
        <table class="table misc-table"
            style="width:320px;">
            <tbody>
                <tr>
                    <th>
                        <div style="width:70px;">
                            <span>Touch</span>
                            <small>Armor Class</small>
                        </div>
                    </th>
                    <td>
                        <input type="text"
                            class="attribute-field">
                    </td>
                    <th>
                        <div>
                            <span>Flat-Footed</span>
                            <small>Armor Class</small>
                        </div>
                    </th>
                    <td>
                        <input type="text"
                            class="attribute-field">
                    </td>
                </tr>
                <tr>
                    <td></td>
                </tr>
                <tr>
                    <th colspan="2">
                        <div>
                            <span>Initiative</span>
                        </div>
                    </th>
                    <td colspan="2">
                        <input type="text"
                            class="attribute-field initiative-input"> =
                        <input type="text"
                            class="attribute-field initiative-input"> +
                        <input type="text"
                            class="attribute-field initiative-input">
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>