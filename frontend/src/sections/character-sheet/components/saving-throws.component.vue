<script>
export default {

}
</script>

<style>

</style>

<template>
    <div style="overflow-x: auto">
        <table class="table saving-table"
            style="width: 756px">
            <thead>
                <th>
                    Saving Throws
                </th>
            </thead>
            <tbody>
                <tr>
                    <th>
                        <span>Fortitude</span>
                        <small>Constitution</small>
                    </th>
                    <td style="width: 55%">
                        <div style="display:inline-block">
                            <label for=""
                                style="display:block; margin-top:-25px;">Total</label>
                            <input type="text"
                                class="attribute-field"
                                style="display:block">
                        </div>
                        <span>=</span>
                        <div style="display:inline-block">
                            <label for=""
                                style="display:block; margin-top:-25px; font-size:12px">Base</label>
                            <input type="text"
                                class="attribute-field"
                                style="display:block">
                        </div>
                        <span>+</span>
                        <div style="display:inline-block">
                            <label for=""
                                style="display:block; margin-top:-25px; font-size:12px">Ability</label>
                            <input type="text"
                                class="attribute-field"
                                style="display:block">
                        </div>
                        <span>+</span>
                        <div style="display:inline-block">
                            <label for=""
                                style="display:block; margin-top:-25px; font-size:12px">Magic</label>
                            <input type="text"
                                class="attribute-field"
                                style="display:block">
                        </div>
                        <span>+</span>
                        <div style="display:inline-block">
                            <label for=""
                                style="display:block; margin-top:-25px; font-size:12px">Misc</label>
                            <input type="text"
                                class="attribute-field"
                                style="display:block">
                        </div>
                        <span>+</span>
                        <div style="display:inline-block">
                            <label for=""
                                style="display:block; margin-top:-25px; font-size:12px">Temp</label>
                            <input type="text"
                                class="attribute-field"
                                style="display:block">
                        </div>
                    </td>
                    <td rowspan="3">
                        <div style="display:inline-block">
                            <textarea rows="3"
                                style="height: 130px; display:block"></textarea>
                            <label for="">Condition Modifiers</label>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>
                        <span>Reflex</span>
                        <small>Dexterity</small>
                    </th>
                    <td>
                        <input type="text"
                            class="attribute-field">
                        <span>=</span>
                        <input type="text"
                            class="attribute-field">
                        <span>+</span>
                        <input type="text"
                            class="attribute-field">
                        <span>+</span>
                        <input type="text"
                            class="attribute-field">
                        <span>+</span>
                        <input type="text"
                            class="attribute-field">
                        <span>+</span>
                        <input type="text"
                            class="attribute-field">
                    </td>
                </tr>
                <tr>
                    <th>
                        <span>Will</span>
                        <small>Wisdom</small>
                    </th>
                    <td>
                        <input type="text"
                            class="attribute-field">
                        <span>=</span>
                        <input type="text"
                            class="attribute-field">
                        <span>+</span>
                        <input type="text"
                            class="attribute-field">
                        <span>+</span>
                        <input type="text"
                            class="attribute-field">
                        <span>+</span>
                        <input type="text"
                            class="attribute-field">
                        <span>+</span>
                        <input type="text"
                            class="attribute-field">
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>