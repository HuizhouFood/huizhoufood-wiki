<script setup>
import AppShell from '@/components/layout/AppShell.vue'
</script>

<template>
  <AppShell>
    <div class="app-container flex flex-col items-center justify-center py-20 text-center">
      <p class="text-6xl">🌿</p>
      <h1 class="mt-4 text-2xl font-bold text-slate-900">页面未找到</h1>
      <p class="mt-2 text-slate-500">您访问的页面不存在</p>
      <RouterLink to="/" class="app-btn-primary mt-8 no-underline">返回主页</RouterLink>
    </div>
  </AppShell>
</template>
