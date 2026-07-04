<script setup>
import AppShell from '@/components/layout/AppShell.vue'
import { departmentOverview, nameIndexStats } from '@/data/bencaoCatalog'
</script>

<template>
  <AppShell>
    <div class="app-container py-8 sm:py-12">
      <div>
        <p class="text-sm font-medium text-brand-600">检索资料</p>
        <h1 class="mt-2 app-section-title">部类目录</h1>
        <p class="mt-2 text-slate-500">《本草纲目》十六部类与名称数量概览</p>
      </div>
      <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <article v-for="dept in departmentOverview" :key="dept.name" class="app-card group p-5">
          <div class="flex items-center justify-between">
            <h2 class="text-lg font-semibold text-slate-900">{{ dept.name }}</h2>
            <span class="text-2xl font-bold text-brand-600">{{ dept.count }}</span>
          </div>
          <p class="mt-1 text-xs text-slate-400">{{ dept.volumes }}</p>
          <p class="mt-3 text-sm text-slate-600">{{ dept.description }}</p>
          <div class="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-100">
            <div class="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-600" :style="{ width: `${Math.round((dept.count / nameIndexStats.totalRecords) * 100)}%` }" />
          </div>
          <p class="mt-1 text-right text-xs text-slate-400">占全部 {{ Math.round((dept.count / nameIndexStats.totalRecords) * 100) }}%</p>
        </article>
      </div>
      <div class="app-card mt-10 p-6">
        <h3 class="font-semibold text-slate-900">索引说明</h3>
        <p class="mt-2 text-sm leading-relaxed text-slate-600">本目录按公开电子全文中的各部条目标题与附录条目整理，共收录 {{ nameIndexStats.totalRecords }} 条名称记录。通行目录统计常称《本草纲目》一十六部、六十类、一千八百九十二种；部分合并标题、附录条目在不同版本中的计数口径不完全一致。</p>
      </div>
      <p class="mt-10 text-center text-sm text-slate-500">
        <RouterLink to="/bencao" class="font-semibold text-brand-600 no-underline hover:text-brand-700">← 返回本草纲目介绍</RouterLink>
      </p>
    </div>
  </AppShell>
</template>
