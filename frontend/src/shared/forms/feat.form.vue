<script>
import { FormBus } from './';

export default {
    props: ['feat', 'describeFeat'],
    inject: {
        $validator: '$validator'
    },
    data: function() {
        return {
            has: {
                prerequisite: false,
                special: false,
                normal: false
            }
        };
    },
    methods: {
        clear: function() {
            this.has = {
                prerequisite: false,
                special: false,
                normal: false
            };
        }
    },
    created: function() {
        FormBus.$on('feat:clear', () => {
            this.clear();
        });
    },
    destroyed: function() {
        FormBus.$off('feat:clear');
    }
}
</script>
<style>
.feat-form-component input[type="checkbox"] {
    vertical-align: middle;
}

.feat-form-component span {
    white-space: pre-line;
}

.feat-form-component>div>div {
    margin-bottom: 10px;
}

.feat-form-component-name-container small {
    text-transform: capitalize;
}

.feat-aditional-information-text-area {
    height: 200px !important;
}

.feat-form-component-html-container table {
    width: 100%;
    margin-bottom: 15px;
    font-size: 12px;
}

.feat-form-component-html-container table thead,
.feat-form-component-html-container table tbody {
    text-align: center;
}

.feat-form-component-html-container table,
.feat-form-component-html-container table thead,
.feat-form-component-html-container table tfoot,
.feat-form-component-html-container table tbody {
    border: solid 1px gray;
}

.feat-form-component-html-container table thead tr:nth-child(1) {
    background-color: gray;
    border: solid 1px black;
}

.feat-form-component-html-container table tbody tr:nth-child(even) {
    background-color: lightgray;
}

.feat-form-component-html-container table caption {
    font-weight: bold;
}
</style>

<template>
    <div class="feat-form-component">
        <div v-if="describeFeat">
            <div class="feat-form-component-name-container">
                <span>
                    <strong>Title:</strong>
                </span>
                <span>{{describeFeat.title}}
                    <small>[{{describeFeat.type}}]</small>
                </span>
            </div>
            <div class="feat-form-component-benefit-container">
                <span>
                    <strong>Benefit:</strong>
                </span>
                <span>{{describeFeat.benefit}}</span>
            </div>
            <div class="feat-form-component-prerequisite-container" v-if="describeFeat.prerequisite">
                <span>
                    <strong>Prerequisite:</strong>
                </span>
                <span>{{describeFeat.prerequisite}}</span>
            </div>
            <div class="feat-form-component-normal-container" v-if="describeFeat.normal">
                <span>
                    <strong>Normal:</strong>
                </span>
                <span>{{describeFeat.normal}}</span>
            </div>
            <div class="feat-form-component-special-container" v-if="describeFeat.special">
                <span>
                    <strong>Special:</strong>
                </span>
                <span>{{describeFeat.special}}</span>
            </div>
            <div v-if="describeFeat.subValue && describeFeat.subValue.title && describeFeat.subValue.value" class="feat-form-component-sub-value-container">
                <span>
                    <strong>{{describeFeat.subValue.title}}</strong>
                </span>
                <span>{{describeFeat.subValue.value}}</span>
            </div>
            <div class="feat-form-component-miscellaneous-container" v-if="describeFeat.miscellaneous">
                <span>
                    <strong>Miscellaneous:</strong>
                </span>
                <span>{{describeFeat.miscellaneous}}</span>
            </div>
            <div class="feat-form-component-html-container" v-if="describeFeat.aditionalInformation">
                <span>
                    <strong>Aditional Information:</strong>
                </span>
                <div v-html="describeFeat.aditionalInformation"></div>
            </div>
        </div>
        <div v-else>
            <div class="feat-form-component-title-container">
                <span>Title:</span>
                <input type="text" v-validate="'required'" v-model.trim="feat.title" name="title">
                <span v-show="errors.has('title')">{{ errors.first('title') }}</span>
            </div>
            <div class="feat-form-component-type-container">
                <span>Type:</span>
                <select v-model="feat.type" v-validate="'required'" name="type">
                    <option value="General">General</option>
                    <option value="Item Creation">Item Creation</option>
                    <option value="Metamagic">Metamagic</option>
                    <option value="Reserve">Reserve</option>
                </select>
                <span v-show="errors.has('type')">{{ errors.first('type') }}</span>
            </div>
            <div class="feat-form-component-benefit-container">
                <span>Benefit:</span>
                <textarea type="text" v-model.trim="feat.benefit" v-validate="'required'" name="benefit"></textarea>
                <span v-show="errors.has('benefit')">{{ errors.first('benefit') }}</span>
            </div>
            <div class="feat-form-component-prerequisite-container">
                <label><input type="checkbox" v-model="has.prerequisite">Prerequisite:</label>
                <textarea v-if="has.prerequisite || feat.prerequisite" type="text" v-model.trim="feat.prerequisite"></textarea>
            </div>
            <div class="feat-form-component-normal-container">
                <label><input type="checkbox" v-model="has.normal">Normal:</label>
                <textarea v-if="has.normal || feat.normal" type="text" v-model.trim="feat.normal"></textarea>
            </div>
            <div class="feat-form-component-special-container">
                <label><input type="checkbox" v-model="has.special">Special:</label>
                <textarea v-if="has.special || feat.special" type="text" v-model.trim="feat.special"></textarea>
            </div>
            <div class="feat-form-component-has-sub-value-container">
                <label><input type="checkbox" v-model.trim="feat.hasSubValue">Sub Value:</label>
            </div>
            <div class="feat-form-component-sub-value-container" v-if="feat.hasSubValue || feat.subValue && feat.subValue.title">
                <span>Title:</span>
                <input type="text" v-model="feat.subValue.title"></input>
                <span>Value:</span>
                <input type="text" v-model="feat.subValue.value"></input>
            </div>
            <div class="feat-form-component-miscellaneous-container">
                <label><input type="checkbox" v-model="has.miscellaneous">Miscellaneous:</label>
                <textarea v-if="has.miscellaneous || feat.miscellaneous" type="text" v-model.trim="feat.miscellaneous"></textarea>
            </div>
            <div class="feat-form-component-html-container">
                <label><input type="checkbox" v-model="has.aditionalInformation">Aditional Information (as HTML):</label>
                <textarea class="feat-aditional-information-text-area" v-if="has.aditionalInformation || feat.aditionalInformation" type="text"
                    v-model.trim="feat.aditionalInformation"></textarea>
            </div>
        </div>
    </div>
</template>

