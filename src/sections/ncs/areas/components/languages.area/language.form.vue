<template>
  <div class="language-form-component">
    <div v-if="describe">
      <div class="language-form-component-name-container">
        <span>
          <strong>Name:</strong>
        </span>
        <span>{{describe.name}}</span>
      </div>
      <div class="language-form-component-alphabet-container">
        <span>
          <strong>Description:</strong>
        </span>
        <span>{{describe.description}}</span>
      </div>
      <div class="language-form-component-alphabet-container">
        <span>
          <strong>Alphabet:</strong>
        </span>
        <span>{{describe.alphabet}}</span>
      </div>
      <div class="language-form-component-speakers-container">
        <span>
          <strong>Speakers:</strong>
        </span>
        <span>{{describe.speakers}}</span>
      </div>
    </div>
    <div v-else>
      <div class="language-form-component-name-container">
        <span>Name:</span>
        <input type="text" v-validate="'required'" v-model.trim="model.name" name="name">
        <span v-show="errors.has('name')">{{ errors.first('name') }}</span>
      </div>
      <div class="language-form-component-description-container">
        <span>Description:</span>
        <textarea type="text" v-model.trim="model.description" name="description"></textarea>
      </div>
      <div class="language-form-component-alphabet-container">
        <span>Alphabet:</span>
        <input type="text" v-validate="'required'" v-model.trim="model.alphabet" name="alphabet">
        <span v-show="errors.has('alphabet')">{{ errors.first('alphabet') }}</span>
      </div>
      <div class="language-form-component-speakers-container">
        <span>Speakers:</span>
        <input type="text" v-validate="'required'" v-model.trim="model.speakers" name="speakers">
        <span v-show="errors.has('speakers')">{{ errors.first('speakers') }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { FormMixin } from 'Shared/form';

export default {
  mixins: [FormMixin],
  created() {
    this.modelName = 'language';
  },
  methods: {
    addSpeaker() {
      this.model.speakers.push("");
    },
    removeSpeaker(index) {
      this.model.speakers.removeAt(index);
    }
  }
}
</script>

<style>

</style>
