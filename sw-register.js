if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .then((reg) => {
        console.log('Psychological Matrix Online: SW Registered.', reg.scope);
      })
      .catch((err) => {
        console.error('SW Registration Failed.', err);
      });
  });
}