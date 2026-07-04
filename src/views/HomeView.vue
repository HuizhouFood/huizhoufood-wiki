<script setup>
import AppShell from '@/components/layout/AppShell.vue'
import { featuredProducts } from '@/data/products'
import { bencaoOverview } from '@/data/bencaoCatalog'
</script>

<template>
  <AppShell>
    <section class="relative overflow-hidden bg-gradient-to-br from-brand-600 via-brand-500 to-emerald-400">
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-60" />
      <div class="app-container relative py-12 sm:py-16 lg:py-20">
        <div class="max-w-2xl">
          <p class="mb-3 inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            ???? · ???? Wiki
          </p>
          <h1 class="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            ?????????
          </h1>
          <p class="mt-4 text-base text-white/90 sm:text-lg">
            ?????????????????????????????????????
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <RouterLink to="/bencao" class="app-btn-primary !bg-white !text-brand-700 hover:!bg-brand-50 no-underline">
              ??????
            </RouterLink>
            <RouterLink to="/goji" class="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white no-underline backdrop-blur-sm transition-colors hover:bg-white/20">
              ?????
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <section class="app-container py-8 sm:py-12">
      <div class="app-card mb-8 border border-amber-100 bg-amber-50/80 p-4 sm:p-5">
        <p class="text-sm font-medium text-amber-800 sm:text-base">
          {{ bencaoOverview.disclaimer }}
        </p>
      </div>

      <div class="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 class="app-section-title">????</h2>
          <p class="mt-1 text-sm text-slate-500 sm:text-base">??????????????????</p>
        </div>
        <RouterLink to="/shiliao" class="hidden text-sm font-semibold text-brand-600 no-underline hover:text-brand-700 sm:block">
          ???? ?
        </RouterLink>
      </div>

      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        <RouterLink
          v-for="product in featuredProducts"
          :key="product.id"
          :to="product.href"
          class="app-card group overflow-hidden no-underline"
        >
          <div :class="['relative aspect-[4/3] overflow-hidden bg-gradient-to-br', product.gradient]">
            <div class="flex h-full w-full items-center justify-center text-7xl transition-transform duration-500 group-hover:scale-110">
              {{ product.emoji }}
            </div>
            <span class="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-semibold text-brand-700 backdrop-blur-sm">
              {{ product.tag }}
            </span>
          </div>
          <div class="p-4 sm:p-5">
            <p class="text-xs font-medium text-brand-600">{{ product.category }}</p>
            <h3 class="text-lg font-semibold text-slate-900">{{ product.name }}</h3>
            <p class="mt-1 line-clamp-2 text-sm text-slate-500">{{ product.description }}</p>
            <span class="mt-4 inline-flex items-center text-sm font-semibold text-brand-600 group-hover:text-brand-700">
              ????
              <svg class="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </RouterLink>
      </div>
    </section>

    <section class="border-t border-slate-200 bg-slate-50/80">
      <div class="app-container py-8 sm:py-12">
        <div class="app-card overflow-hidden lg:grid lg:grid-cols-[minmax(0,1fr)_280px] lg:items-center">
          <div class="p-6 sm:p-8">
            <p class="text-sm font-medium text-brand-600">????</p>
            <h2 class="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">{{ bencaoOverview.title }}</h2>
            <p class="mt-3 max-w-xl text-sm text-slate-600 sm:text-base">
              {{ bencaoOverview.description }}
            </p>
            <div class="mt-6 flex flex-wrap gap-4">
              <div v-for="(value, key) in { '????': bencaoOverview.stats.volumes, '???': bencaoOverview.stats.departments, '????': bencaoOverview.stats.categories, '????????': bencaoOverview.stats.species }" :key="key" class="rounded-xl bg-brand-50 px-4 py-2 text-center">
                <p class="text-lg font-bold text-brand-700">{{ value }}</p>
                <p class="text-xs text-brand-600">{{ key }}</p>
              </div>
            </div>
            <RouterLink to="/catalog" class="app-btn-primary mt-6 inline-flex no-underline">
              ??????
            </RouterLink>
          </div>
          <div class="hidden border-l border-slate-100 bg-gradient-to-br from-brand-50 to-white p-8 lg:block">
            <div class="space-y-3">
              <div v-for="dept in ['??', '??', '??', '??']" :key="dept" class="flex items-center gap-3 rounded-xl border border-dashed border-slate-200 bg-white/80 px-4 py-3">
                <div class="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-100 text-sm">??</div>
                <div>
                  <p class="text-sm font-semibold text-slate-800">{{ dept }}</p>
                  <p class="text-xs text-slate-400">????</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </AppShell>
</template>
