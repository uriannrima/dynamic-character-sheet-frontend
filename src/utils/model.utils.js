
export default {
    addTo(model, arrayName, added) {
        model[arrayName].push(added);
    },
  removeFrom(model, arrayName, removed, field = '_id') {
      model[arrayName] = model[arrayName].filter(m => {
          return (m[field] !== removed[field] || (removed.subValue && JSON.stringify(removed.subValue) !== JSON.stringify(m.subValue)));
      });
  },
  updateOn(model, arrayName, updated, field = '_id') {
      model[arrayName].splice(model[arrayName].findIndex(m => m[field] === updated[field]), 1, updated);
  }
}
