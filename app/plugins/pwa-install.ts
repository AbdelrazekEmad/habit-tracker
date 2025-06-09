export default defineNuxtPlugin(() => {
    let deferredPrompt: any = null;
  
    if (process.client) {
      window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        window.dispatchEvent(new Event('pwa-install-available'));
      });
  
      window.addEventListener('pwa-install', async () => {
        if (deferredPrompt) {
          deferredPrompt.prompt();
          const { outcome } = await deferredPrompt.userChoice;
          if (outcome === 'accepted') {
            console.log('User accepted the install prompt');
          } else {
            console.log('User dismissed the install prompt');
          }
          deferredPrompt = null;
        }
      });
    }
  });
  