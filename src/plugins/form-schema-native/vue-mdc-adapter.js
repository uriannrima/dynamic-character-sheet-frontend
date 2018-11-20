import FormSchemaNative from '@formschema/native'

const Radio = {
  functional: true,
  props: ['value', 'name', 'label'],
  render(h) {
    return h('mdc-radio', {
      on: listeners,
      props: props
    });
  }
}

const TextField = {
  functional: true,
  props: ['type', 'label', 'value', 'required'],
  render(h, { props, listeners }) {
    return h('mdc-textfield', {
      on: listeners,
      props: props
    });
  }
}

FormSchemaNative.setComponent('email', TextField);
FormSchemaNative.setComponent('password', TextField);
FormSchemaNative.setComponent('radio', Radio);

FormSchemaNative.setComponent('label', 'mdc-text', {
  typo: 'button',
  tag: 'span'
});

FormSchemaNative.setComponent('title', 'mdc-headline');
FormSchemaNative.setComponent('description', 'mdc-body');
// FormSchemaNative.setComponent('button', 'mdc-button', {
//   raised: true
// });
