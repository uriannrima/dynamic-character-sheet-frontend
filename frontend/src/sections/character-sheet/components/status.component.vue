<script>
export default {
    props: ['status']
}

</script>
<style>
.status-table {
    width: 100%;
    margin-bottom: 0px;
}

@media screen and (max-width: 992px) {
    .status-table {
        width: 869px;
    }
}
</style>

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
                            <span for="" style="display:block; margin-top:-25px; font-weight: bold">Total</span>
                            <input type="number" class="attribute-field" style="display:block" v-model.number="status.healthPoints">
                        </div>
                    </td>
                    <td style="text-align: center;">
                        <div style="display:inline-block; width: 50%">
                            <span for="" style="display:block; margin-top:-25px; font-weight: bold">Wounds</span>
                            <input type="text" class="attribute-field" style="width:100%;">
                        </div>
                        <div style="display:inline-block; width:    33%">
                            <span for="" style="display:block; margin-top:-25px; font-weight: bold">Nonlethal Damage</span>
                            <input type="text" class="attribute-field" style="width:100%;">
                        </div>
                        <div style="display:inline-block; width: 15%">
                            <span for="" style="display:block; margin-top:-25px; font-weight: bold">Speed</span>
                            <input type="text" class="attribute-field" style="width:100%;">
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>