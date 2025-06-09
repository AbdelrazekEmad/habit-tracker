<template>
  <div class="flex flex-col items-center justify-center gap-4 h-screen">
    <h1 class="font-bold text-2xl text-(--ui-primary)">
      Nuxt UI - Starter
    </h1>

    <button v-if="installAvailable" @click="installApp">
      Install App
    </button>

  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';

const installAvailable = ref(false);

onMounted(() => {
  window.addEventListener('pwa-install-available', () => {
    installAvailable.value = true;
  });
});

function installApp() {
  window.dispatchEvent(new Event('pwa-install'));
}
</script>