<script>
import StoredComponent from 'shared/components/StoredComponent'
import CharacterSheetModule from './Store'

export default {
  render (h) {
    return h(StoredComponent, {
      props: {
        name: 'CharacterSheet',
        module: CharacterSheetModule
      }
    }, this.$slots.default)
  }
}
</script>
