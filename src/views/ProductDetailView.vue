<script setup>
import { computed } from 'vue'
import AppShell from '@/components/layout/AppShell.vue'
import { productDetails } from '@/data/products'

const props = defineProps({ productId: { type: String, required: true } })
const product = computed(() => productDetails[props.productId])
</script>

<template>
  <AppShell v-if="product">
    <div class="app-container py-8 sm:py-12">
      <div class="lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
        <div>
          <p class="text-sm font-medium text-brand-600">{{ product.category }}</p>
          <h1 class="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{{ product.name }}</h1>
          <p class="mt-1 text-sm italic text-slate-400">{{ product.latinName }}</p>
          <p class="mt-4 text-lg text-slate-600">{{ product.subtitle }}</p>
          <blockquote class="mt-6 border-l-4 border-brand-400 pl-4 italic text-slate-600">
            「{{ product.liShizhenQuote }}」
            <footer class="mt-1 text-sm not-italic text-slate-400">— 李时珍《本草纲目》</footer>
          </blockquote>
          <dl class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div v-for="feature in product.features" :key="feature.name" class="app-card p-4">
              <dt class="font-semibold text-slate-900">{{ feature.name }}</dt>
              <dd class="mt-1 text-sm text-slate-500">{{ feature.description }}</dd>
            </div>
          </dl>
        </div>
        <div class="mt-8 lg:mt-0">
          <div :class="['app-card flex aspect-square items-center justify-center overflow-hidden bg-gradient-to-br text-9xl', product.gradient]">{{ product.emoji }}</div>
        </div>
      </div>
      <section class="mt-12">
        <h2 class="app-section-title">主要功效</h2>
        <p class="mt-1 text-sm text-slate-500">{{ product.nature }}</p>
        <div class="mt-6 grid gap-5 lg:grid-cols-2">
          <article class="app-card p-5 sm:p-6">
            <ul class="space-y-3 text-sm leading-relaxed text-slate-600">
              <li v-for="item in product.efficacy" :key="item" class="flex gap-2"><span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" /><span>{{ item }}</span></li>
            </ul>
          </article>
          <article class="app-card p-5 sm:p-6">
            <h3 class="text-base font-semibold text-slate-900">药用与可食部分</h3>
            <ul class="mt-3 space-y-2.5 text-sm leading-relaxed text-slate-600">
              <li v-for="part in product.edibleParts" :key="part" class="flex gap-2"><span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" /><span>{{ part }}</span></li>
            </ul>
          </article>
        </div>
      </section>
      <section class="mt-12">
        <h2 class="app-section-title">烹饪与食用方法</h2>
        <p class="mt-1 text-sm text-slate-500">现代饮食中的常见做法</p>
        <div class="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <article v-for="method in product.cookingMethods" :key="method.title" class="app-card p-5 sm:p-6">
            <h3 class="text-base font-semibold text-slate-900">{{ method.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ method.description }}</p>
          </article>
        </div>
      </section>
      <section class="mt-12">
        <h2 class="app-section-title">食用注意</h2>
        <div class="app-card mt-6 border border-amber-100 bg-amber-50/80 p-5">
          <ul class="space-y-2 text-sm text-amber-900">
            <li v-for="note in product.precautions" :key="note" class="flex gap-2"><span aria-hidden="true">⚠️</span><span>{{ note }}</span></li>
          </ul>
        </div>
      </section>
      <div class="app-card mt-8 p-5"><p class="text-sm text-slate-600">{{ product.summary }}</p></div>
      <p class="mt-10 text-center text-sm text-slate-500">
        <RouterLink to="/" class="font-semibold text-brand-600 no-underline hover:text-brand-700">← 返回主页</RouterLink>
      </p>
    </div>
  </AppShell>
</template>
