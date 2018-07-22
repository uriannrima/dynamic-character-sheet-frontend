import DcsModal from './modal.component'
import { FormBus } from '../form/'

export default {
  components: { DcsModal },
  service: null,
  props: ['show', 'describe', 'referenceList'],
  created: function () {
    this.service = null
    this.modelName = ''
    this.isFromCharacter = false
  },
  mounted: function () {
    this.model = this.service.create()
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
    show: function (val) {
      if (val && !this.describe) {
        this.updateAll()
      }
    },
    selected: function () {
      this.isDuplicated = false
    }
  },
  methods: {
    checkDuplicate: function (model) {
      var fromCharacter = this.referenceList.find(m => m._id === model._id)
      return fromCharacter && this.fastComparison(model.subValues, fromCharacter.subValues)
    },
    fastComparison: function (a, b) {
      return JSON.stringify(a) === JSON.stringify(b)
    },
    resetScroll: function () {
      this.$el.querySelector('.v-modal-container').scrollTop = 0
    },
    updateAll: async function () {
      if (this.service) {
        var models = await this.service.getAll()
        this.all = models.orderBy(m => m.name)
      }
    },
    clear: function () {
      this.resetScroll()
      this.backup = null
      this.selected = ''
      this.model = this.service.create()
      this.editing = false
      this.isDuplicated = false
      this.isFromCharacter = false
      this.$validator.reset()
      FormBus.$emit(this.modelName + ':clear')
    },
    clearDescription: function () {
      this.$emit('update:describe', null)
      this.selected = ''
    },
    close: function () {
      this.clear()
      this.clearDescription()
      this.$emit('update:show', false)
    },
    cancel: function () {
      this.close()
    },
    add: async function () {
      // model feat being created.
      if (this.selected) {
        this.addToCharacter(this.selected)
      } else {
        if (await this.$validator.validateAll()) {
          var created = await this.service.saveOrUpdate(this.model)
          this.addToCharacter(Object.assign({}, this.model, created))
        }
      }
    },
    addToCharacter: function (model) {
      if (this.checkDuplicate(model)) {
        this.isDuplicated = true
      } else {
        this.$emit('added', { model })
        this.close()
      }
    },
    remove: function () {
      let { describe: model } = this
      this.$emit('removed', { model })
      this.close()
    },
    save: async function () {
      if (await this.$validator.validateAll()) {
        if (!this.isFromCharacter) {
          var saved = await this.service.saveOrUpdate(this.model)
          this.all.splice(this.all.findIndex(s => s._id === saved._id), 1, saved)
          this.editing = false
          this.clear()
          this.selected = saved
        } else {
          let { model } = this
          if (this.checkDuplicate(model)) {
            this.isDuplicated = true
          } else {
            this.$emit('updated', { model })
            this.close()
          }
        }
      }
    },
    edit: function () {
      this.resetScroll()
      this.backup = this.selected || this.describe
      var data = this.describe || this.selected
      if (this.describe) this.isFromCharacter = true
      this.model = this.service.create(data)
      this.editing = true
      this.clearDescription()
    },
    cancelEdit: function () {
      this.editing = false
      if (this.isCharacterFeat) {
        this.$emit('update:describe', this.backup)
      } else {
        this.selected = this.backup
      }
    }
  }
}
