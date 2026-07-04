<script setup>
import { useRoute } from 'vue-router'
import { HomeIcon, BookOpenIcon, Squares2X2Icon, SparklesIcon } from '@heroicons/vue/24/outline'

const route = useRoute()
const items = [
  { name: '主页', href: '/', icon: HomeIcon },
  { name: '本草', href: '/bencao', icon: BookOpenIcon },
  { name: '目录', href: '/catalog', icon: Squares2X2Icon },
  { name: '药食', href: '/shiliao', icon: SparklesIcon },
]
const isActive = (path) => route.path === path
</script>

<template>
  <nav class="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur-md md:hidden" style="padding-bottom: env(safe-area-inset-bottom)">
    <div class="flex items-center justify-around py-2">
      <RouterLink v-for="item in items" :key="item.href" :to="item.href" :class="[isActive(item.href) ? 'text-brand-600' : 'text-slate-400', 'flex flex-col items-center gap-0.5 px-3 py-1 no-underline']">
        <component :is="item.icon" class="h-5 w-5" />
        <span class="text-[10px] font-medium">{{ item.name }}</span>
      </RouterLink>
    </div>
  </nav>
</template>
