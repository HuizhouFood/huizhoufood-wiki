<script setup>
import { ref, computed } from 'vue'
import AppShell from '@/components/layout/AppShell.vue'
import { shiliaoItems, shiliaoDisclaimer } from '@/data/shiliao100'

const query = ref('')

const filteredItems = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return shiliaoItems
  return shiliaoItems.filter(
    (item) => item.name.toLowerCase().includes(q) || item.benefit.toLowerCase().includes(q),
  )
})
</script>

<template>
  <AppShell>
    <div class="app-container py-8 sm:py-12">
      <div>
        <p class="text-sm font-medium text-brand-600">????</p>
        <h1 class="mt-2 app-section-title">??????</h1>
        <p class="mt-2 text-slate-500">????????????????? {{ shiliaoItems.length }} ?????</p>
      </div>

      <div class="mt-6">
        <input
          v-model="query"
          type="search"
          placeholder="?????????…"
          class="block w-full rounded-xl border-0 bg-white px-4 py-3 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-500 sm:text-sm"
        />
      </div>

      <div class="app-card mt-6 border border-amber-100 bg-amber-50/80 p-4">
        <p class="text-sm text-amber-800">{{ shiliaoDisclaimer }}</p>
      </div>

      <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <component
          :is="item.href ? 'RouterLink' : 'div'"
          v-for="item in filteredItems"
          :key="item.name"
          :to="item.href || undefined"
          :class="[
            'app-card p-5',
            item.href ? 'no-underline' : '',
            item.featured ? 'ring-2 ring-brand-200' : '',
          ]"
        >
          <div class="flex items-start justify-between gap-2">
            <h2 class="font-semibold text-slate-900">{{ item.name }}</h2>
            <span v-if="item.featured" class="shrink-0 rounded-full bg-brand-50 px-2 py-0.5 text-xs font-medium text-brand-700">??</span>
          </div>
          <p class="mt-2 text-sm text-slate-600">{{ item.benefit }}</p>
          <span v-if="item.href" class="mt-3 inline-flex text-sm font-semibold text-brand-600">???? ?</span>
        </component>
      </div>

      <p v-if="filteredItems.length === 0" class="mt-8 text-center text-slate-500">????????</p>

      <p class="mt-10 text-center text-sm text-slate-500">
        <RouterLink to="/" class="font-semibold text-brand-600 no-underline hover:text-brand-700">? ????</RouterLink>
      </p>
    </div>
  </AppShell>
</template>
