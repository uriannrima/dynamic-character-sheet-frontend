<script>
export default {
    props: ['attack']
}
</script>


<style>
.attack-table thead th {
    background-color: #000000;
    color: #ffffff;
    text-transform: uppercase;
    border-left-style: solid;
    border-left-color: #ffffff !important;
    border-left-width: 1px !important;
}

.attack-table tbody td,
.attack-table-mobile tbody td {
    padding: 0px !important;
}

.attack-table tbody div,
.attack-table-mobile tbody div {
    display: inline-block;
    width: 50%;
    float: left;
}

.details-input {
    height: 20px;
    border-width: 0px 0px 1px 0px;
    border-bottom-color: black;
    width: 22%;
    text-align: center;
}

@media only screen and (max-width: 510px) {
    .details-input {
        width: 100%;
        text-align: center;
    }
}
</style>

<template>
    <div>
        <!-- Desktop Attack Table -->
        <table class="table attack-table">
            <thead>
                <tr>
                    <th>
                        <span>Attack</span>
                    </th>
                    <th>
                        <span>Attack Bonus</span>
                    </th>
                    <th>
                        <span>Damage</span>
                    </th>
                    <th>
                        <span>Critical</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="width:30%">
                        <input type="text" style="width:100%; text-align: center;" v-model="attack.name">
                    </td>
                    <td style="width:30%">
                        <input type="number" style="width:100%; text-align: center;" v-model.number="attack.attackBonus">
                    </td>
                    <td style="width:20%">
                        <input type="text" style="width:100%; text-align: center;" v-model="attack.critical">
                    </td>
                    <td style="width:20%">
                        <input type="text" style="width:100%; text-align: center;" v-model="attack.damage">
                    </td>
                </tr>
                <tr>
                    <th>
                        <div>
                            <span>Range</span>
                        </div>
                        <div>
                            <span>Type</span>
                        </div>
                    </th>
                    <th colspan="3">
                        <span>Notes:</span>
                    </th>
                </tr>
                <tr>
                    <td>
                        <div>
                            <input type="number" style="width:100%; text-align: center;" v-model.number="attack.range">
                        </div>
                        <div>
                            <input type="text" style="width:100%; text-align: center;" v-model="attack.type">
                        </div>
                    </td>
                    <td colspan="3">
                        <input type="text" style="width:100%" v-model="attack.notes">A
                    </td>
                </tr>
                <tr v-if="attack.hasAmmunition && attack.ammunition">
                    <td colspan="4" style="text-align:center">
                        <input type="checkbox" v-model="attack.hasAmmunition">
                        <label>Ammunition:</label>
                        <input type="text" class="details-input" v-model="attack.ammunition.name">
                        <label>Quantity:</label>
                        <input type="text" class="details-input" v-model="attack.ammunition.quantity">
                        <label>Notes:</label>
                        <input type="text" class="details-input" v-model="attack.ammunition.notes">
                    </td>
                </tr>
                <tr v-if="!attack.hasAmmunition">
                    <td colspan="4" style="text-align:center">
                        <label>Has Ammunition?</label>
                        <input type="checkbox" v-model="attack.hasAmmunition">
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- Mobile Attack Table -->
        <table class="table attack-table-mobile">
            <tbody>
                <tr>
                    <th colspan="3">
                        <span>Attack</span>
                    </th>
                </tr>
                <tr>
                    <td colspan="3">
                        <input type="text" style="width:100%; text-align: center;" v-model="attack.name">
                    </td>
                </tr>
                <tr>
                    <th>
                        <span>Attack Bonus</span>
                    </th>
                    <th>
                        <span>Damage</span>
                    </th>
                    <th>
                        <span>Critical</span>
                    </th>
                </tr>
                <tr>
                    <td>
                        <input type="number" style="width:100%; text-align: center;" v-model.number="attack.attackBonus">
                    </td>
                    <td>
                        <input type="text" style="width:100%; text-align: center;" v-model="attack.damage">
                    </td>
                    <td>
                        <input type="text" style="width:100%; text-align: center;" v-model="attack.critical">
                    </td>
                </tr>
                <tr>
                    <th colspan="3">
                        <div>
                            <span>Range</span>
                        </div>
                        <div>
                            <span>Type</span>
                        </div>
                    </th>
                </tr>
                <tr>
                    <td colspan="3">
                        <div>
                            <input type="number" style="width:100%; text-align: center;" v-model.number="attack.range">
                        </div>
                        <div>
                            <input type="text" style="width:100%; text-align: center;" v-model="attack.type">
                        </div>
                    </td>
                </tr>
                <tr>
                    <th colspan="3">
                        <span>Notes:</span>
                    </th>
                </tr>
                <tr>
                    <td colspan="3">
                        <input type="text" style="width:100%" v-model="attack.notes">A
                    </td>
                </tr>
                <tr v-if="attack.hasAmmunition && attack.ammunition">
                    <td colspan="4" style="text-align:center">
                        <div style="width: 50%; padding: 0px 5px">
                        <input type="checkbox" v-model="attack.hasAmmunition">
                            <label>Ammunition:</label>
                            <input type="text" class="details-input" v-model="attack.ammunition.name">
                        </div>
                        <div style="width: 50%; padding: 0px 5px">
                            <label>Quantity:</label>
                            <input type="text" class="details-input" v-model="attack.ammunition.quantity">
                        </div>
                        <div style="width:100%; padding: 0px 5px">
                            <label>Notes:</label>
                            <input type="text" class="details-input" style="text-align: left;" v-model="attack.ammunition.notes">
                        </div>
                    </td>
                </tr>
                <tr v-if="!attack.hasAmmunition">
                    <td colspan="4" style="text-align:center">
                        <label>Has Ammunition?</label>
                        <input type="checkbox" v-model="attack.hasAmmunition">
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>