<script setup lang="ts">
  const { data } = await useAsyncData('codex', () => queryContent('/codex').limit(6).find())
</script>

<template>
  <div class="space-y-8">
    <div class="flex items-center gap-5">
      <h2 class="text-2xl font-semibold">Les dernières entrées du Codex</h2>
      <NuxtLink to="/codex" class="btn btn-secondary">Tout voir</NuxtLink>
    </div>
    <div class="flex gap-10 overflow-x-auto">
      <div v-for="element in data" class="card shrink-0 w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">{{ element.displayName }}</h2>
          <p>{{ element.description }}</p>
          <div class="card-actions justify-end">
            <NuxtLink :to="element._path" class="btn btn-primary">Voir !</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

  <style scoped>

</style>