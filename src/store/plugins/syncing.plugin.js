export const syncingPlugin = syncingListeners => store => {
  syncingListeners.forEach(listener => {
    // Inform to the listener that something has changed.
    store.subscribe((mutation, state) => {
      if (mutation.meta && mutation.meta.sync) listener.emit(mutation, state);
    });

    // Pass the store to the listener to update when something changed.
    listener.register(store);
  });
};

export default syncingPlugin;