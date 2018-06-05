export default function (name, module) {
  const mixin = {
    created () {
      if (!module.hasOwnProperty('registered')) {
        this.$store.registerModule(name, module)
        module.registered = true
      }
    }
  }

  return mixin
};
