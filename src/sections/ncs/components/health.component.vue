<template>
    <div class="health-component">
        <div class="black-box health-bb">
            <label>HP</label>
            <label>Health Points</label>
        </div>
        <div class="lg-h-up black-box">
            <label>Speed</label>
        </div>
        <input type="number" class="health-input common-input" v-model.number="character.status.healthPoints">
        <input type="text" class="wounds-input common-input" v-model="character.status.wounds">
        <input type="number" class="nonlethal-input common-input" v-model.number="character.status.nonLethalDamage">
        <input type="text" class="speed-input common-input" v-model="character.speed">
        <label class="health-label total-label">Total</label>
        <label class="wounds-label">Wounds/Current HP</label>
        <label class="nonlethal-label">Nonlethal<br>Damage</label>
        <label class="speed-label lg-h-down">Speed</label>
        <label class="lg-h-up">&nbsp</label>
    </div>
</template>

<script>
    import CharacterStore from 'Store/character.store';

    export default {
        data() {
            return {
                character: CharacterStore.Instance.character
            }
        }
    }
</script>

<style>
    .health-component {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        align-items: center;
        justify-items: center;
        grid-column-gap: 2px;
        grid-row-gap: 2px;
    }

    .health-bb {
        grid-column-end: 3 span;
    }

    .health-component label {
        font-size: 50%;
        text-transform: uppercase;
        text-align: center;
    }

    .speed-input {
        text-align: center;
    }

    @media screen and (min-width: 1023px) {
        .health-component {
            grid-template-columns: repeat(5, 1fr);
            grid-template-areas: ". health-label wounds-label nonlethal-label speed-label";
        }
        
        .health-component input {
            grid-row-start: 2;
        }

        .health-bb {
            grid-column-end: 1 span;
            grid-row-start: 2;
        }

        .health-label {
            grid-area: health-label;
        }

        .wounds-label {
            grid-area: wounds-label;
        }

        .nonlethal-label {
            grid-area: nonlethal-label;
        }

        .speed-label {
            grid-area: speed-label;
        }
    }
</style>
