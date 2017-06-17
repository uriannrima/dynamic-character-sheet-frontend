<script>
export default {
  
}
</script>

<style>
 .ability-table {
     margin-bottom: 10px;
 }
 
 .ability-table tbody td:nth-child(4), .ability-table tbody td:nth-child(5) {
     background-color: #ccc;
 }
 
 .small-label {
     text-transform: uppercase;
     font-size: 8px;
 }
</style>


<template>
  <!-- Ability Score -->
<table class="table ability-table">
    <thead>
        <tr>
            <th>
                <span class="small-label">Ability Name</span>
            </th>
            <th>
                <span class="small-label">Ability Score</span>
            </th>
            <th>
                <span class="small-label">Ability Modifier</span>
            </th>
            <th>
                <span class="small-label">Temp Score</span>
            </th>
            <th>
                <span class="small-label">Temp Modifier</span>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>
                <span>STR</span>
                <small>strength</small>
            </th>
            <td>
                <input type="text" class="attribute-field">
            </td>
            <td>
                <input type="text" class="attribute-field">
            </td>
            <td>
                <input type="text" class="attribute-field">
            </td>
            <td>
                <input type="text" class="attribute-field">
            </td>
        </tr>
        <tr>
            <th>
                <span>DEX</span>
                <small>dexterity</small>
            </th>
            <td>
                <input type="text" class="attribute-field">
            </td>
            <td>
                <input type="text" class="attribute-field">
            </td>
            <td>
                <input type="text" class="attribute-field">
            </td>
            <td>
                <input type="text" class="attribute-field">
            </td>
        </tr>
        <tr>
            <th>
                <span>CON</span>
                <small>constitution</small>
            </th>
            <td>
                <input type="text" class="attribute-field">
            </td>
            <td>
                <input type="text" class="attribute-field">
            </td>
            <td>
                <input type="text" class="attribute-field">
            </td>
            <td>
                <input type="text" class="attribute-field">
            </td>
        </tr>
        <tr>
            <th>
                <span>INT</span>
                <small>intelligence</small>
            </th>
            <td>
                <input type="text" class="attribute-field">
            </td>
            <td>
                <input type="text" class="attribute-field">
            </td>
            <td>
                <input type="text" class="attribute-field">
            </td>
            <td>
                <input type="text" class="attribute-field">
            </td>
        </tr>
        <tr>
            <th>
                <span>WIS</span>
                <small>wisdom</small>
            </th>
            <td>
                <input type="text" class="attribute-field">
            </td>
            <td>
                <input type="text" class="attribute-field">
            </td>
            <td>
                <input type="text" class="attribute-field">
            </td>
            <td>
                <input type="text" class="attribute-field">
            </td>
        </tr>

        <tr>
            <th>
                <span>CHA</span>
                <small>charisma</small>
            </th>
            <td>
                <input type="text" class="attribute-field">
            </td>
            <td>
                <input type="text" class="attribute-field">
            </td>
            <td>
                <input type="text" class="attribute-field">
            </td>
            <td>
                <input type="text" class="attribute-field">
            </td>
        </tr>
    </tbody>
</table>
</template>
