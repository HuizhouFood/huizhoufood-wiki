<script setup>
import AppShell from '@/components/layout/AppShell.vue'
import { bencaoOverview, departmentOverview, volumeCatalog, nameIndexStats } from '@/data/bencaoCatalog'
</script>

<template>
  <AppShell>
    <div class="app-container py-8 sm:py-12">
      <div class="max-w-3xl">
        <p class="text-sm font-medium text-brand-600">学习资料</p>
        <h1 class="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{{ bencaoOverview.title }}</h1>
        <p class="mt-2 text-lg text-slate-500">{{ bencaoOverview.author }}</p>
        <p class="mt-6 text-base leading-relaxed text-slate-600">{{ bencaoOverview.description }}</p>
      </div>
      <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div class="app-card p-5 text-center"><p class="text-2xl font-bold text-brand-600">{{ bencaoOverview.stats.volumes }}</p><p class="mt-1 text-sm text-slate-500">正文卷数</p></div>
        <div class="app-card p-5 text-center"><p class="text-2xl font-bold text-brand-600">{{ bencaoOverview.stats.departments }}</p><p class="mt-1 text-sm text-slate-500">部类</p></div>
        <div class="app-card p-5 text-center"><p class="text-2xl font-bold text-brand-600">{{ bencaoOverview.stats.categories }}</p><p class="mt-1 text-sm text-slate-500">类目</p></div>
        <div class="app-card p-5 text-center"><p class="text-2xl font-bold text-brand-600">{{ bencaoOverview.stats.species }}</p><p class="mt-1 text-sm text-slate-500">收载种数</p></div>
      </div>
      <section class="mt-12">
        <h2 class="app-section-title">十六部类总览</h2>
        <p class="mt-1 text-sm text-slate-500">按四库全书本总目整理</p>
        <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <article v-for="dept in departmentOverview" :key="dept.name" class="app-card p-5">
            <div class="flex items-start justify-between">
              <h3 class="text-base font-semibold text-slate-900">{{ dept.name }}</h3>
              <span class="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-700">{{ dept.count }} 种</span>
            </div>
            <p class="mt-1 text-xs text-slate-400">{{ dept.volumes }} · {{ dept.categories }} 类</p>
            <p class="mt-2 text-sm text-slate-600">{{ dept.description }}</p>
          </article>
        </div>
      </section>
      <section class="mt-12">
        <h2 class="app-section-title">五十二卷目录</h2>
        <div class="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
          <div class="divide-y divide-slate-100">
            <div v-for="item in volumeCatalog" :key="item.volume" class="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div class="flex items-center gap-3">
                <span class="rounded-lg bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">{{ item.volume }}</span>
                <span class="font-medium text-slate-900">{{ item.department }}</span>
              </div>
              <p class="text-sm text-slate-500 sm:text-right">{{ item.detail }}</p>
            </div>
          </div>
        </div>
      </section>
      <div class="app-card mt-12 border border-slate-100 bg-slate-50 p-5">
        <p class="text-sm text-slate-600"><strong>名称索引：</strong>本 Wiki 资料库收录 {{ nameIndexStats.totalRecords }} 条名称记录。{{ nameIndexStats.note }}</p>
      </div>
      <div class="app-card mt-6 border border-amber-100 bg-amber-50/80 p-5">
        <p class="text-sm font-medium text-amber-800">{{ bencaoOverview.disclaimer }}</p>
      </div>
      <p class="mt-10 text-center text-sm text-slate-500">
        <RouterLink to="/" class="font-semibold text-brand-600 no-underline hover:text-brand-700">← 返回主页</RouterLink>
      </p>
    </div>
  </AppShell>
</template>
