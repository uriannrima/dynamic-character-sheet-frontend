<template>
    <div>
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
                        <input type="text"
                            style="width:100%">
                    </td>
                    <td style="width:30%">
                        <input type="text"
                            style="width:100%">
                    </td>
                    <td style="width:20%">
                        <input type="text"
                            style="width:100%">
                    </td>
                    <td style="width:20%">
                        <input type="text"
                            style="width:100%">
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
                            <input type="text"
                                style="width:100%">
                        </div>
                        <div>
                            <input type="text"
                                style="width:100%">
                        </div>
                    </td>
                    <td colspan="3">
                        <input type="text"
                            style="width:100%">
                    </td>
                </tr>
                <tr>
                    <td colspan="4"
                        style="text-align:center">
                        <label>Ammunition:</label>
                        <input type="text"
                            class="details-input">
                        <label>Quantity:</label>
                        <input type="text"
                            class="details-input">
                        <label>Notes:</label>
                        <input type="text"
                            class="details-input">
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
