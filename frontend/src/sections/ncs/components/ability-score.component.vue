<template>
    <tr class="ability-score-row">
        <th>
            <div class="ability-score-black-box">
                <span class="ability-score-abbreviation">CON</span>
                <span class="ability-score-name">Constitution</span>
            </div>
        </th>
        <td>
            <div>
                <input type="number" value="10">
            </div>
        </td>
        <td>
            <div>
                <input type="number" value="0" readonly>
            </div>
        </td>
        <td>
            <div>
                <input type="number" value="10">
            </div>
        </td>
        <td>
            <div>
                <input type="number" value="0" readonly>
            </div>
        </td>
    </tr>
</template>

<script>
export default {

}
</script>

<style>
.ability-score-row input {
  width: 80%;
}

.ability-score-black-box {
  color: white;
  background-color: black;
}

.ability-score-black-box > span {
  text-transform: uppercase;
}

.ability-score-abbreviation {
  text-transform: uppercase;
  font-size: 120%;
  display: block;
}

.ability-score-name {
  text-transform: uppercase;
  font-size: 50%;
  display: block;
}
</style>
