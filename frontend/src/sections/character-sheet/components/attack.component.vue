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
</style>

<template>
    <div>
        <!-- Desktop Attack Table -->
        <table class="table attack-table hidden-xs">
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
                        <input type="text" style="width:100%">
                    </td>
                    <td style="width:30%">
                        <input type="text" style="width:100%">
                    </td>
                    <td style="width:20%">
                        <input type="text" style="width:100%">
                    </td>
                    <td style="width:20%">
                        <input type="text" style="width:100%">
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
                            <input type="text" style="width:100%">
                        </div>
                        <div>
                            <input type="text" style="width:100%">
                        </div>
                    </td>
                    <td colspan="3">
                        <input type="text" style="width:100%">
                    </td>
                </tr>
                <tr>
                    <td colspan="4" style="text-align:center">
                        <label>Ammunition:</label>
                        <input type="text" class="details-input">
                        <label>Quantity:</label>
                        <input type="text" class="details-input">
                        <label>Notes:</label>
                        <input type="text" class="details-input">
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- Mobile Attack Table -->
        <table class="table attack-table-mobile visible-xs">
            <tbody>
                <tr>
                    <th colspan="3">
                        <span>Attack</span>
                    </th>
                </tr>
                <tr>
                    <td colspan="3">
                        <input type="text" style="width:100%">
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
                        <input type="text" style="width:100%">
                    </td>
                    <td>
                        <input type="text" style="width:100%">
                    </td>
                    <td>
                        <input type="text" style="width:100%">
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
                            <input type="text" style="width:100%">
                        </div>
                        <div>
                            <input type="text" style="width:100%">
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
                        <input type="text" style="width:100%">
                    </td>
                </tr>
                <tr>
                    <td colspan="4" style="text-align:center">
                        <label>Ammunition:</label>
                        <input type="text" class="details-input">
                        <label>Quantity:</label>
                        <input type="text" class="details-input">
                        <label>Notes:</label>
                        <input type="text" class="details-input">
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>