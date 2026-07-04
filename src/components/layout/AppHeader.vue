<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { Dialog, DialogPanel, Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon, ChevronDownIcon, BookOpenIcon } from '@heroicons/vue/24/outline'

const route = useRoute()
const mobileMenuOpen = ref(false)

const productLinks = [
  { name: '枸杞', href: '/goji' },
  { name: '莲子', href: '/lotus' },
  { name: '酸枣', href: '/suanzao' },
]

const navLinks = [
  { name: '主页', href: '/' },
  { name: '本草纲目', href: '/bencao' },
  { name: '部类目录', href: '/catalog' },
  { name: '药食同源', href: '/shiliao' },
]

const isActive = (path) => route.path === path
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-md shadow-nav">
    <nav class="app-container flex h-14 items-center justify-between sm:h-16" aria-label="Global">
      <RouterLink to="/" class="flex items-center gap-2.5 no-underline">
        <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-emerald-400 text-lg shadow-sm sm:h-10 sm:w-10">🌿</div>
        <span class="text-base font-bold text-slate-900 sm:text-lg">汇舟本草木果</span>
      </RouterLink>
      <div class="hidden md:flex md:flex-1 md:items-center md:justify-center md:gap-1">
        <RouterLink v-for="link in navLinks.slice(0, 2)" :key="link.href" :to="link.href" :class="[isActive(link.href) ? 'bg-brand-50 text-brand-700' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900', 'rounded-lg px-3 py-2 text-sm font-medium transition-colors no-underline']">{{ link.name }}</RouterLink>
        <Popover class="relative">
          <PopoverButton class="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900">食材介绍<ChevronDownIcon class="h-4 w-4" aria-hidden="true" /></PopoverButton>
          <PopoverPanel class="absolute left-0 z-10 mt-2 w-44 origin-top-left rounded-xl bg-white p-1 shadow-card ring-1 ring-slate-100">
            <RouterLink v-for="item in productLinks" :key="item.name" :to="item.href" class="block rounded-lg px-3 py-2 text-sm text-slate-700 no-underline hover:bg-brand-50 hover:text-brand-700">{{ item.name }}</RouterLink>
          </PopoverPanel>
        </Popover>
        <RouterLink v-for="link in navLinks.slice(2)" :key="link.href" :to="link.href" :class="[isActive(link.href) ? 'bg-brand-50 text-brand-700' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900', 'rounded-lg px-3 py-2 text-sm font-medium transition-colors no-underline']">{{ link.name }}</RouterLink>
      </div>
      <div class="hidden md:flex md:items-center md:gap-2">
        <RouterLink to="/bencao" class="app-btn-primary !py-2 !px-4 no-underline"><BookOpenIcon class="mr-1.5 h-4 w-4" />开始阅读</RouterLink>
      </div>
      <button type="button" class="inline-flex items-center justify-center rounded-xl p-2 text-slate-600 transition-colors hover:bg-slate-100 md:hidden" @click="mobileMenuOpen = true"><span class="sr-only">打开菜单</span><Bars3Icon class="h-6 w-6" /></button>
    </nav>
    <Dialog class="md:hidden" :open="mobileMenuOpen" @close="mobileMenuOpen = false">
      <div class="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm" />
      <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full max-w-xs overflow-y-auto bg-white shadow-xl">
        <div class="flex items-center justify-between border-b border-slate-100 px-4 py-4">
          <span class="text-base font-semibold text-slate-900">导航</span>
          <button type="button" class="rounded-lg p-2 text-slate-500 hover:bg-slate-100" @click="mobileMenuOpen = false"><XMarkIcon class="h-5 w-5" /></button>
        </div>
        <div class="space-y-1 px-3 py-4">
          <RouterLink v-for="link in navLinks" :key="link.href" :to="link.href" class="block rounded-xl px-3 py-2.5 text-base font-medium text-slate-800 no-underline hover:bg-brand-50" @click="mobileMenuOpen = false">{{ link.name }}</RouterLink>
          <div class="my-2 border-t border-slate-100 pt-2">
            <p class="px-3 pb-1 text-xs font-medium uppercase tracking-wide text-slate-400">食材介绍</p>
            <RouterLink v-for="item in productLinks" :key="item.name" :to="item.href" class="block rounded-xl px-3 py-2 text-sm text-slate-600 no-underline hover:bg-brand-50" @click="mobileMenuOpen = false">{{ item.name }}</RouterLink>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>
