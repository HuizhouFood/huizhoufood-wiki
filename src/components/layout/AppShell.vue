<script setup>
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'
import MobileBottomNav from './MobileBottomNav.vue'

defineProps({
  showFooter: { type: Boolean, default: true },
  showBottomNav: { type: Boolean, default: true },
})
</script>

<template>
  <div class="flex min-h-dvh flex-col">
    <AppHeader />
    <main class="app-page flex-1">
      <slot />
    </main>
    <AppFooter v-if="showFooter" />
    <MobileBottomNav v-if="showBottomNav" />
  </div>
</template>
