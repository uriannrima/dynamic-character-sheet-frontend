<script>
export default {
}
</script>

<template>
    <div style="overflow-x:auto">
        <table class="table status-table">
            <thead>
                <tr>
                    <th>&nbsp</th>
                    <th> </th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th style="width: 10%">
                        <div style="width:70px;">
                            <span>HP</span>
                            <small>Health Points</small>
                        </div>
                    </th>
                    <td style="width: 7%">
                        <div style="display:inline-block">
                            <span for=""
                                style="display:block; margin-top:-25px; font-weight: bold">Total</span>
                            <input type="text"
                                class="attribute-field"
                                style="display:block">
                        </div>
                    </td>
                    <td style="text-align:left; padding-right: 0px;">
                        <input type="text"
                            class="attribute-field"
                            style="width: 50%;">
                        <input type="text"
                            class="attribute-field"
                            style="width: 16%;">
                        <input type="text"
                            class="attribute-field"
                            style="width: 31.5%;">
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
