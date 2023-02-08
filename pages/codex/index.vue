<script setup lang="ts">
import { useFuse, UseFuseOptions } from '@vueuse/integrations/useFuse'
import { CodexItem} from "~/utils/interfaces";

useHead({
  title: 'Codex - SFCS',
})

const { data } = await useAsyncData('codex', () => queryContent('/codex').find())

const dataFetched = ref<CodexItem[]>(data)

const search = ref('')

const options = computed<UseFuseOptions<CodexItem>>(() => ({
  fuseOptions: {
    keys: ['displayName', 'description', 'tags'],
    isCaseSensitive: false,
    threshold: 0.3,
  },
  resultLimit: 10,
  matchAllWhenSearchEmpty: true,
}))

const { results } = useFuse(search, dataFetched, options)
</script>

<template>
  <main class="classic-main">
    <h1 class="text-5xl font-bold mb-3">Découvrez toutes les entrées du codex</h1>
    <form class="mb-10">
      <label class="label">
        <span class="label-text">Recherche</span>
      </label>
      <div class="input-group">
        <input v-model="search" type="text" placeholder="Rechercher une entrée de codex…" class="input input-bordered" />
        <button class="btn btn-square" disabled>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
      </div>
    </form>
    <div class="grid grid-cols-2 place-items-center items-end space-y-10">
      <div v-for="result in results" class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">{{ result.item.displayName }}</h2>
          <p>{{ result.item.description }}</p>
          <div class="card-actions justify-end">
            <NuxtLink :to="result.item._path" class="btn btn-primary">Découvrir</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>