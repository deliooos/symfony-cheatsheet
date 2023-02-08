<script setup lang="ts">
import {onClickOutside, useFocus} from "@vueuse/core";
import { TutorialItem, CodexItem, AstuceItem } from "~/utils/interfaces";
import {useFuse, UseFuseOptions} from "@vueuse/integrations/useFuse";

const { data:tutoriels } = await useAsyncData('tutoriels', () => queryContent('tutoriels').find())
const { data:astuces } = await useAsyncData('astuces', () => queryContent('astuces').find())
const { data:codex } = await useAsyncData('codex', () => queryContent('codex').find())

const tutorielsFetched = ref<TutorialItem[]>(tutoriels)
const astucesFetched = ref<AstuceItem[]>(astuces)
const codexFetched = ref<CodexItem[]>(codex)

const showSearch = ref<boolean>(false)
const modal = ref<HTMLElement | null>(null)
const searchBar = ref<HTMLElement | null>(null)
const search = ref<string>('')
const searchValue = ref<HTMLInputElement | null>(null)

const optionsTutorial = computed<UseFuseOptions<TutorialItem>>(() => ({
  fuseOptions: {
    keys: ['displayName', 'description', 'tags'],
    isCaseSensitive: false,
    threshold: 0.3,
  },
  resultLimit: 3,
}))

const optionsAstuce = computed<UseFuseOptions<AstuceItem>>(() => ({
  fuseOptions: {
    keys: ['displayName', 'description', 'tags'],
    isCaseSensitive: false,
    threshold: 0.3,
  },
  resultLimit: 3,
}))

const optionsCodex = computed<UseFuseOptions<CodexItem>>(() => ({
  fuseOptions: {
    keys: ['displayName', 'description', 'tags'],
    isCaseSensitive: false,
    threshold: 0.3,
  },
  resultLimit: 3,
}))

const { results:tutorielsResults } = useFuse(search, tutorielsFetched, optionsTutorial)
const { results:astucesResults } = useFuse(search, astucesFetched, optionsAstuce)
const { results:codexResults } = useFuse(search, codexFetched, optionsCodex)

function showModal() {
  showSearch.value = true
}

function hideModal() {
  showSearch.value = false
}

function showModalIfNotEmpty() {
  if (search.value.length > 0) {
    showModal()
  }
}

onClickOutside(modal, () => {
  hideModal()
})

if (showSearch) {
  useFocus(searchBar, { initialValue: true })
}

onMounted(() => {
  const body = document.querySelector('body')
  if (showSearch.value === true) {
    body?.classList.add('overflow-hidden')
  } else {
    body?.classList.remove('overflow-hidden')
  }
})

</script>

<template>
  <div class="form-control">
    <input @input="showModalIfNotEmpty" v-model="search" ref="searchValue" type="text" placeholder="Rechercher..." class="search-value input input-bordered"/>
  </div>
  <Teleport to="body">
    <div v-if="showSearch" class="flex items-center justify-center fixed inset-0 overflow-y-scroll bg-neutral/70 backdrop-blur z-40">
      <div ref="modal" class="flex flex-col w-2/3 my-20 z-50">
        <div class="block form-control mb-12">
          <input v-model="search" ref="searchBar" type="text" placeholder="Rechercher..." class="input input-bordered w-1/2"/>
        </div>
        <div class="flex flex-col gap-10">
          <div>
            <h5 class="font-semibold text-2xl mb-2">Tutoriels</h5>
            <ul class="flex gap-10 overflow-x-auto">
              <li v-if="tutorielsResults.length >= 1" v-for="result in tutorielsResults" class="card shrink-0 w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                  <h2 class="card-title">{{ result.item.displayName }}</h2>
                  <p>{{ result.item.description }}</p>
                  <div class="card-actions justify-end">
                    <NuxtLink @click="hideModal" :to="result.item._path" class="btn btn-primary">Découvrir</NuxtLink>
                  </div>
                </div>
              </li>
              <li v-else>
                <div class="card w-96 bg-neutral text-neutral-content">
                  <div class="card-body">
                    <h2 class="card-title">Oops !</h2>
                    <p>Aucune astuce ne correspond à votre demande !</p>
                    <div class="card-actions">
                      <NuxtLink @click="hideModal" to="/tutoriels" class="btn btn-primary inline-flex gap-2" disabled>Proposer une astuce <span class="badge badge-ghost normal-case">Bientôt disponible</span></NuxtLink>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-2xl mb-2">Astuces</h5>
            <ul class="flex gap-10 overflow-x-auto">
              <li v-if="astucesResults.length >= 1" v-for="result in astucesResults" class="card shrink-0 w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                  <h2 class="card-title">{{ result.item.displayName }}</h2>
                  <p>{{ result.item.description }}</p>
                  <div class="card-actions justify-end">
                    <NuxtLink @click="hideModal" :to="result.item._path" class="btn btn-primary">Découvrir</NuxtLink>
                  </div>
                </div>
              </li>
              <li v-else>
                <div class="card w-96 bg-neutral text-neutral-content">
                  <div class="card-body">
                    <h2 class="card-title">Oops !</h2>
                    <p>Aucune astuce ne correspond à votre demande !</p>
                    <div class="card-actions">
                      <NuxtLink @click="hideModal" to="/tutoriels" class="btn btn-primary inline-flex gap-2" disabled>Proposer une astuce <span class="badge badge-ghost normal-case">Bientôt disponible</span></NuxtLink>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold text-2xl mb-2">Codex</h5>
            <ul class="flex gap-10 overflow-x-auto">
              <li v-if="codexResults.length >= 1" v-for="result in codexResults" class="card shrink-0 w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                  <h2 class="card-title">{{ result.item.displayName }}</h2>
                  <p>{{ result.item.description }}</p>
                  <div class="card-actions justify-end">
                    <NuxtLink @click="hideModal" :to="result.item._path" class="btn btn-primary">Découvrir</NuxtLink>
                  </div>
                </div>
              </li>
              <li v-else>
                <div class="card w-96 bg-neutral text-neutral-content">
                  <div class="card-body">
                    <h2 class="card-title">Oops !</h2>
                    <p>Aucune entrée du Codex ne correspond à votre demande !</p>
                    <div class="card-actions">
                      <NuxtLink @click="hideModal" to="/tutoriels" class="btn btn-primary inline-flex gap-2" disabled>Proposer une entrée de Codex <span class="badge badge-ghost normal-case">Bientôt disponible</span></NuxtLink>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>

</style>