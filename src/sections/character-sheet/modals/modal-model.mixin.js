import DcsModal from 'Shared/modal/modal.component';
import { FormBus } from 'Shared/form/';

export default {
  components: { DcsModal },
  service: null,
  props: ['show', 'describe', 'referenceList'],
  created: function () {
    this.service = null;
    this.modelName = '';
    this.isFromCharacter = false;
  },
  mounted: function () {
    // Create a new model when opening the modal.
    this.model = this.service.create();
  },
  data: function () {
    return {
      all: [],
      backup: null,
      selected: '',
      model: {},
      editing: false,
      isDuplicated: false
    }
  },
  watch: {
    /** Update modal list when opening. */
    show: function (val) {
      if (val) {
        this.updateAll();
      }
    },
    /** Clear is duplicated when selected was changed. */
    selected: function () {
      this.isDuplicated = false;
    }
  },
  methods: {
    /** Reset scroll of the modal. */
    resetScroll: function () {
      this.$el.querySelector('.v-modal-container').scrollTop = 0;
    },
    /** Update all models on combo box. */
    updateAll: async function () {
      if (this.service) {
        var models = await this.service.getAll();
        this.all = _.sortBy(models, m => m.name);
      }
    },
    /** Clear modal data. */
    clear: function () {
      this.resetScroll();
      this.backup = null;
      this.selected = '';
      this.model = this.service.create();
      this.editing = false;
      this.isDuplicated = false;
      this.isFromCharacter = false;
      this.$validator.reset();
      FormBus.$emit(this.modelName + ':clear');
    },
    /** Clear described modal. */
    clearDescription: function () {
      this.$emit('update:describe', null);
      this.selected = '';
    },
    /** Close modal. */
    close: function () {
      this.clear();
      this.clearDescription();
      this.$emit('update:show', false);
    },
    /** Cancel operation. */
    cancel: function () {
      this.close();
    },
    /** Add model logic. */
    add: async function () {
      // model feat being created.
      if (this.selected) {
        this.shoulAdd(this.selected);
      } else {
        if (await this.$validator.validateAll()) {
          var created = await this.service.saveOrUpdate(this.model);
          this.shoulAdd(created);
        }
      }
    },
    /** Check if should add the model by checking the reference list. */
    shoulAdd: function (model) {
      if (this.checkDuplicate(model)) {
        this.isDuplicated = true;
      } else {
        this.$emit('onAdded', { model });
        this.close();
      }
    },
    /** Check if model already exists in the reference list. */
    checkDuplicate: function(model) {
      var fromCharacter = this.referenceList.find(m => m._id === model._id);
      return fromCharacter && fromCharacter.subValue === model.subValue;
    },
    /** Inform to remove the model. */
    remove: function () {
      let { describe: model } = this;
      this.$emit('onRemoved', { model });
      this.close();
    },
    /** Save model logic. */
    save: async function () {
      if (await this.$validator.validateAll()) {
        if (!this.isFromCharacter) {
          var saved = await this.service.saveOrUpdate(this.model);
          this.all.splice(this.all.findIndex(s => s._id === saved._id), 1, saved);
          this.editing = false;
          this.clear();
          this.selected = saved;
        } else {
          let { model } = this;
          this.$emit('onUpdated', { model });
          this.close();
        }
      }
    },
    /** Edit model logic. */
    edit: function () {
      this.resetScroll();
      this.backup = this.selected || this.describe;
      var data = this.describe || this.selected;
      if (this.describe) this.isFromCharacter = true;
      this.model = this.service.create(data);
      this.editing = true;
      this.clearDescription();
    },
    /** Cancel edit, and recover backup model. */
    cancelEdit: function () {
      this.editing = false;
      if (this.isCharacterFeat) {
        this.$emit('update:describe', this.backup);
      } else {
        this.selected = this.backup;
      }
    }
  }
}
