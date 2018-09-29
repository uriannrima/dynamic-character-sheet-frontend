import Vue from 'vue'

Vue.prototype.$getMetaEvent = function ($event: any, meta: any) {
  const eventMeta = { ...meta, ...$event.meta };
  return Object.assign($event, { meta: eventMeta });
};

Vue.filter('signed', function (value: any) {
  if (value === undefined || value === null) return '';
  const sign = value >= 0 ? '+' : '-';
  return sign + Math.abs(value).toString();
})

Vue.filter('capitalized', function (text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
})

Vue.filter('spaced', function slugify(text: string) {
  return text.toString().replace(/([A-Z])/g, ' $1');
});
