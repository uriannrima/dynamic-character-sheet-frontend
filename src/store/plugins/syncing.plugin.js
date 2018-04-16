export const syncingPlugin = syncingListeners => store => {
  syncingListeners.forEach(listener => {
    store.subscribe((mutation, state) => {
      // TODO: Payload.sync included until mutation has meta options.
      if (mutation.payload.sync || (mutation.meta && mutation.meta.sync)) {
        listener.emit(mutation, state);
      }
    });

    listener.register(store);
  });
};

export default syncingPlugin;