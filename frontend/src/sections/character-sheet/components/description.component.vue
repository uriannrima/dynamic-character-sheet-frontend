<script>
import SizeService from 'Services/size.service';

export default {
    props: ['character'],
    data: function () {
        return {
            sizes: SizeService.getAll()
        }
    },
    computed: {
        classesCombined: function () {
            var result = "";
            const classes = this.character.classes;
            for (var index = 0; index < classes.length; index++) {
                var charClass = classes[index];
                result = result + charClass.name + "(" + charClass.level + "); ";
            }
            return result;
        }
    },
    watch: {
        'character.size': {
            handler: function (newValue, oldValue) {
                SizeService.update(character);
            },
            deep: true
        }
    }
}
</script>
<style>
.form-control {
    padding: 0px !important;
}

.main-field {
    border-width: 0 0 1px 0;
    border-style: solid;
    border-color: black;
    border-radius: 0;
    box-shadow: none;
}
</style>

<template>
    <!-- Character Basic Details -->
    <div class="row">
        <div class="col-md-4 hidden-lg hidden-md">
            <img src="assets/images/dnd-logo.png" alt="" width="100%">
        </div>
        <div class="col-md-4">
            <div class="row">
                <div class="col-md-12">
                    <input type="text" class="form-control main-field" v-model="character.name"></input>
                    <label>Character Name</label>
                </div>
                <div class="col-md-12">
                    <input type="text" class="form-control main-field" v-model="classesCombined"></input>
                    <label>Class and Level</label>
                </div>
                <div class="col-md-12 visible-xs">
                    <input type="text" class="form-control main-field" v-model="character.playerName"></input>
                    <label>Player Name</label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-md-3">
                    <select class="form-control main-field" v-model="character.size">
                        <option disabled value="">None</option>
                        <option v-for="size in sizes">{{size.name}}</option>
                    </select>
                    <label>Size</label>
                </div>
                <div class="col-xs-3 col-md-3">
                    <input type="text" class="form-control main-field" v-model="character.age"></input>
                    <label>Age</label>
                </div>
                <div class="col-xs-3 col-md-3">
                    <select class="form-control main-field" v-model="character.gender">
                        <option disabled value="">None</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                    <label>Gender</label>
                </div>
                <div class="col-xs-3 col-md-3">
                    <input type="text" class="form-control main-field" v-model="character.height"></input>
                    <label>Height</label>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="row hidden-xs">
                <div class="col-md-12">
                    <input type="text" class="form-control main-field" v-model="character.playerName"></input>
                    <label>Player Name</label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-4 col-md-4">
                    <input type="text" class="form-control main-field" v-model="character.race"></input>
                    <label>Race</label>
                </div>
                <div class="col-xs-4 col-md-4">
                    <select class="form-control main-field" v-model="character.alignment">
                        <option>Lawful Good</option>
                        <option>Lawful Neutral</option>
                        <option>Lawful Evil</option>
                        <option>Neutral Good</option>
                        <option>True Neutral</option>
                        <option>Neutral Good</option>
                        <option>Chaotic Good</option>
                        <option>Chaotic Neutral</option>
                        <option>Chaotic Good</option>
                    </select>
                    <label>Alignment</label>
                </div>
                <div class="col-xs-4 col-md-4">
                    <input type="text" class="form-control main-field" v-model="character.deity"></input>
                    <label>Deity</label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-md-3">
                    <input type="text" class="form-control main-field" v-model="character.weight"></input>
                    <label>Weight</label>
                </div>
                <div class="col-xs-3 col-md-3">
                    <input type="text" class="form-control main-field" v-model="character.eyes"></input>
                    <label>Eyes</label>
                </div>
                <div class="col-xs-3 col-md-3">
                    <input type="text" class="form-control main-field" v-model="character.hair"></input>
                    <label>Hair</label>
                </div>
                <div class="col-xs-3 col-md-3">
                    <input type="text" class="form-control main-field" v-model="character.skin"></input>
                    <label>Skin</label>
                </div>
            </div>
        </div>
        <div class="col-md-4 visible-lg visible-md">
            <img src="assets/images/dnd-logo.png" alt="" width="100%" height="100%">
        </div>
    </div>
</template>

