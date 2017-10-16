<script>
import SpellService from 'Services/spell.service';
import SpellSchoolService from 'Services/spell-school.service';
import { default as FormMixin } from './form.mixin';
export default {
    mixins: [FormMixin],
    data: function() {
        return {
            selectedSchool: {},
            selectedRange: {},
            selectedEffect: {},
            allSpellSchools: [],
            allDescriptors: [],
            allComponents: [],
            allCastingTimes: [],
            allRanges: [],
            allEffects: [],
            allDurations: []
        }
    },
    computed: {
        spellSchool: {
            get: function() {
                return this.selectedSchool;
            },
            set: function(value) {
                this.model.school = Object.assign({
                    subSchool: {}
                }, value);
                this.selectedSchool = value;
            }
        },
        range: {
            get: function() {
                return this.selectedRange;
            },
            set: function(value) {
                var { name, description } = value;
                this.model.range = Object.assign({
                    type: {}
                }, { name, description });
                this.selectedRange = value;
            }
        },
        effect: {
            get: function() {
                return this.selectedEffect;
            },
            set: function(value) {
                var { name, description } = value;
                this.model.effect = Object.assign({
                    type: {},
                    format: {}
                }, { name, description });
                this.selectedEffect = value;
            }
        },
    },
    created: function() {
        this.fetchData();
    },
    methods: {
        fetchData: async function() {
            this.allSpellSchools = await SpellSchoolService.getAll();
            this.allDescriptors = await SpellService.getAllDescriptors();
            this.allComponents = await SpellService.getAllComponents();
            this.allCastingTimes = await SpellService.getAllCastingTimes();
            this.allRanges = await SpellService.getAllRanges();
            this.allEffects = await SpellService.getAllEffects();
            this.allDurations = await SpellService.getAllDurations();
        }
    }
}
</script>
<style>
.spell-form-component input[type="checkbox"] {
    vertical-align: middle;
}

.spell-form-component span {
    white-space: pre-line;
}

.spell-form-component>div>div {
    margin-bottom: 10px;
}

.spell-form-component-name-container small {
    text-transform: capitalize;
}

.spell-aditional-information-text-area {
    height: 200px !important;
}

.spell-form-component-html-container table {
    width: 100%;
    margin-bottom: 15px;
    font-size: 12px;
}

.spell-form-component-html-container table thead,
.spell-form-component-html-container table tbody {
    text-align: center;
}

.spell-form-component-html-container table,
.spell-form-component-html-container table thead,
.spell-form-component-html-container table tfoot,
.spell-form-component-html-container table tbody {
    border: solid 1px gray;
}

.spell-form-component-html-container table thead tr:nth-child(1) {
    background-color: gray;
    border: solid 1px black;
}

.spell-form-component-html-container table tbody tr:nth-child(even) {
    background-color: lightgray;
}

.spell-form-component-html-container table caption {
    font-weight: bold;
}
</style>

<template>
    <div class="spell-form-component">
        <div v-if="describe">
            <div class="spell-form-component-name-container">
                <span>
                    <strong>Name:</strong>
                </span>
                <span>{{describe.name}}
                    <small>[{{describe.school}}]</small>
                </span>
            </div>
        </div>
        <div v-else>
            <div class="spell-form-component-name-container">
                <span>Name:</span>
                <input type="text" v-validate="'required'" v-model.trim="model.name" name="name">
                <span v-show="errors.has('name')">{{ errors.first('name') }}</span>
            </div>
            <div class="spell-form-component-level-container">
                <span>Level:</span>
                <input type="number" v-validate="'required'" v-model.number="model.level" name="level" min="0" max="9">
                <span v-show="errors.has('level')">{{ errors.first('level') }}</span>
            </div>
            <div class="feat-form-component-spell-school-container">
                <span>Spell School:</span>
                <select v-model="spellSchool" v-validate="'required'" name="spellSchool">
                    <option value=""></option>
                    <option v-for="(spellSchool, index) in allSpellSchools" :value="spellSchool" :key="index">{{spellSchool.name}}
                    </option>
                </select>
                <span v-if="spellSchool.description">
                    <strong>Description:</strong>
                </span>
                <span>{{spellSchool.description}} </span>
                <span v-show="errors.has('spellSchool')">{{ errors.first('spellSchool') }}</span>
            </div>
            <div class="feat-form-component-sub-school-container" v-if="selectedSchool.subSchools">
                <span>Sub School:</span>
                <select v-model="model.school.subSchool">
                    <option value=""></option>
                    <option v-for="(subSchool, index) in selectedSchool.subSchools" :value="subSchool" :key="index">{{subSchool.name}}
                    </option>
                </select>
                <div v-if="model.school.subSchool && model.school.subSchool.description">
                    <span>
                        <strong>Description:</strong>
                    </span>
                    <span>{{model.school.subSchool.description}}</span>
                </div>
            </div>
            <div class="spell-form-component-descriptors-container">
                <span>Descriptors:</span>
                <div>
                    <label v-for="(descriptor, index) in allDescriptors" :key="index" :title="descriptor.description">
                        <input type="checkbox" :value="descriptor" v-model="model.descriptors">{{descriptor.name}}
                    </label>
                </div>
            </div>
            <div class="spell-form-component-components-container">
                <span>Components:</span>
                <div>
                    <label v-for="(component, index) in allComponents" :key="index" :title="component.description">
                        <input type="checkbox" :value="component" v-model="model.components">{{component.name}}
                    </label>
                </div>
            </div>
            <div class="spell-form-component-materials-container" v-if="model.components && model.components.find(c => c.name == 'Material')">
                <span>Material(s):</span>
                <input type="text" v-validate="'required'" v-model.trim="model.components[model.components.findIndex(c =>c.name == 'Material')].materials"
                    name="materials"> {{model.components[model.components.findIndex(c =>c.name=='Material')].materials}}
                <span v-show="errors.has('materials')">{{ errors.first('materials') }}</span>
            </div>
            <div class="spell-form-component-casting-time-container">
                <span>Casting Time:</span>
                <div style="display: flex">
                    <input type="number" style="width: 50%" v-validate="'required'" v-model.number="model.castingTimeAmount" name="casting time amount">
                    <select v-model="model.castingTime" style="width: 50%" v-validate="'required'" name="casting time">
                        <option v-for="(castingTime, index) in allCastingTimes" :value="castingTime" :key="index">{{castingTime}}
                        </option>
                    </select>
                </div>
                <span v-show="errors.has('casting time amount')">{{ errors.first('casting time amount') }}</span>
                <span v-show="errors.has('casting time')">{{ errors.first('casting time') }}</span>
            </div>
            <div class="spell-form-component-range-container">
                <span>Range:</span>
                <select v-model="range">
                    <option v-for="(range, index) in allRanges" :value="range" :key="index">{{range.name}}
                    </option>
                </select>
                <div v-if="range.types">
                    <span>Types:</span>
                    <select v-model="model.range.type">
                        <option v-for="(type, index) in range.types" :value="type" :key="index">{{type.name}}
                        </option>
                    </select>
                </div>
            </div>
            <div class="spell-form-component-effect-container">
                <span>Effect:</span>
                <select v-model="effect">
                    <option value="">None</option>
                    <option v-for="(effect, index) in allEffects" :value="effect" :key="index">{{effect.name}}
                    </option>
                </select>
                <div v-if="effect.types">
                    <span>Types:</span>
                    <select v-model="model.effect.type">
                        <option v-for="(type, index) in effect.types" :value="type" :key="index">{{type.name}}
                        </option>
                    </select>
                </div>
                <div v-if="effect.formats">
                    <span>Format:</span>
                    <select v-model="model.effect.format">
                        <option v-for="(format, index) in effect.formats" :value="format" :key="index">{{format.name}}
                        </option>
                    </select>
                </div>
            </div>
            <div class="spell-form-component-duration-container">
                <span>Durations:</span>
                <div>
                    <label v-for="(duration, index) in allDurations" :key="index" :title="duration.description">
                        <input type="checkbox" :value="duration" v-model="model.durations">{{duration.name}}
                    </label>
                </div>
            </div>
            <div class="spell-form-component-timed-container" v-if="model.durations && model.durations.find(c => c.name == 'Timed')">
                <span>Timed Duration:</span>
                <input type="text" v-validate="'required'" name="timed duration" v-model.trim="model.durations[model.durations.findIndex(d => d.name == 'Timed')].duration">
                <span v-show="errors.has('timed duration')">{{ errors.first('timed duration') }}</span>
            </div>
        </div>
    </div>
</template>
