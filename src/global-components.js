import Vue from 'vue'

/** List all files from folder name. */
let requireComponent = require.context(
  './components',
  // Consider subfolders?
  true,
  // The regular expression used to match base component filenames
  /[A-Z]\w+\.(vue|js|ts)$/
)

/** Iterate keys. */
requireComponent.keys().forEach(fileName => {
  /** Require the component. */
  const componentConfig = requireComponent(fileName);

  /** Remove ./ and file extension. */
  let componentName = fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
  componentName = componentName.split('/').pop();

  /** Register component. */
  Vue.component(
    componentName.upperFirstLetter(),
    componentConfig.default || componentConfig
  )
});
