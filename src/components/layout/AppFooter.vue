<template>
  <footer class="mt-auto border-t border-slate-200 bg-white">
    <div class="app-container py-8">
      <div class="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div class="space-y-2">
          <div class="flex items-center gap-2">
            <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-emerald-400 text-sm">
              ??
            </div>
            <span class="font-semibold text-slate-900">?????? Wiki</span>
          </div>
          <p class="max-w-sm text-sm text-slate-500">
            ??????????????????????????????????
          </p>
        </div>

        <div class="grid grid-cols-2 gap-8 sm:gap-12">
          <div>
            <p class="text-xs font-semibold uppercase tracking-wide text-slate-400">??</p>
            <ul class="mt-3 space-y-2 text-sm">
              <li><RouterLink to="/" class="text-slate-600 no-underline hover:text-brand-600">??</RouterLink></li>
              <li><RouterLink to="/bencao" class="text-slate-600 no-underline hover:text-brand-600">????</RouterLink></li>
              <li><RouterLink to="/catalog" class="text-slate-600 no-underline hover:text-brand-600">????</RouterLink></li>
              <li><RouterLink to="/shiliao" class="text-slate-600 no-underline hover:text-brand-600">????</RouterLink></li>
            </ul>
          </div>
          <div>
            <p class="text-xs font-semibold uppercase tracking-wide text-slate-400">????</p>
            <ul class="mt-3 space-y-2 text-sm">
              <li><RouterLink to="/goji" class="text-slate-600 no-underline hover:text-brand-600">??</RouterLink></li>
              <li><RouterLink to="/lotus" class="text-slate-600 no-underline hover:text-brand-600">??</RouterLink></li>
              <li><RouterLink to="/suanzao" class="text-slate-600 no-underline hover:text-brand-600">??</RouterLink></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-8 border-t border-slate-100 pt-6 text-xs text-slate-500">
        <p>&copy; 2026 ???????????? · ??????????????</p>
      </div>
    </div>
  </footer>
</template>
