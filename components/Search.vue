<script setup lang="ts">
import {onClickOutside, useFocus, onKeyStroke, useMagicKeys } from "@vueuse/core";
import {AstuceItem, CodexItem, TutorialItem} from "~/utils/interfaces";
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
const body = ref<HTMLBodyElement | null>(null)

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

onKeyStroke('Escape', () => {
  hideModal()
})

const keys = useMagicKeys()
const ctrlK = keys['Control+K']

watch(ctrlK, (v) => {
  if (v) {
    showModal()
  }
})

if (showSearch) {
  useFocus(searchBar, { initialValue: true })
}

onMounted(() => {
  body.value = document.querySelector('body')

  document.addEventListener('keydown', (e) => {
    if (e.key === 'k' && e.ctrlKey) {
      e.preventDefault()
    }
  })
})

watch(showSearch, (newShowSearch) => {
  if (newShowSearch) {
    body.value?.classList.add('overflow-hidden')
  } else {
    body.value?.classList.remove('overflow-hidden')
    search.value = ''
  }
})
</script>

<template>
  <div class="form-control">
    <label for="search" class="relative">
      <span class="absolute right-2 top-[45%] -translate-y-1/2">
        <kbd class="kbd kbd-xs">CTRL</kbd>
        +
        <kbd class="kbd kbd-xs">K</kbd>
      </span>
      <input @input="showModalIfNotEmpty" v-model="search" ref="searchValue" type="text" name="search" placeholder="Rechercher..." class="search-value input input-bordered w-full"/>
    </label>
  </div>
  <Teleport to="body">
    <div v-if="showSearch" class="fixed inset-0 bg-neutral/70 backdrop-blur z-40">
      <div class="flex justify-center w-full h-full overflow-y-scroll">
        <div ref="modal" class="flex flex-col w-2/3 my-20 z-50">
          <div class="block form-control mb-12">
            <input v-model="search" ref="searchBar" type="text" placeholder="Rechercher..." class="input input-bordered w-1/2"/>
          </div>
          <div class="flex flex-col gap-10">
            <div>
              <div class="inline-flex items-baseline gap-2">
                <h5 class="font-semibold text-2xl mb-2">Tutoriels</h5>
                <NuxtLink @click="hideModal" to="/tutoriels">Tout voir</NuxtLink>
              </div>
              <ul class="flex gap-10 overflow-x-auto">
                <li v-if="tutorielsResults.length >= 1" v-for="result in tutorielsResults" class="card shrink-0 w-96 bg-base-100 shadow-xl">
                  <div class="card-body">
                    <h2 class="card-title">{{ result.item.displayName }}</h2>
                    <p>{{ result.item.description }}</p>
                    <div class="card-actions justify-end">
                      <NuxtLink @click="hideModal" :to="result.item._path" class="btn btn-primary">D??couvrir</NuxtLink>
                    </div>
                  </div>
                </li>
                <li v-else>
                  <div class="card w-96 bg-neutral text-neutral-content">
                    <div class="card-body">
                      <h2 class="card-title">Oops !</h2>
                      <p>Aucune astuce ne correspond ?? votre demande !</p>
                      <div class="card-actions">
                        <NuxtLink @click="hideModal" to="/tutoriels" class="btn btn-primary inline-flex gap-2" disabled>Proposer une astuce <span class="badge badge-ghost normal-case">Bient??t disponible</span></NuxtLink>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <div class="inline-flex items-baseline gap-2">
                <h5 class="font-semibold text-2xl mb-2">Astuces</h5>
                <NuxtLink @click="hideModal" to="/astuces">Tout voir</NuxtLink>
              </div>
              <ul class="flex gap-10 overflow-x-auto">
                <li v-if="astucesResults.length >= 1" v-for="result in astucesResults" class="card shrink-0 w-96 bg-base-100 shadow-xl">
                  <div class="card-body">
                    <h2 class="card-title">{{ result.item.displayName }}</h2>
                    <p>{{ result.item.description }}</p>
                    <div class="card-actions justify-end">
                      <NuxtLink @click="hideModal" :to="result.item._path" class="btn btn-primary">D??couvrir</NuxtLink>
                    </div>
                  </div>
                </li>
                <li v-else>
                  <div class="card w-96 bg-neutral text-neutral-content">
                    <div class="card-body">
                      <h2 class="card-title">Oops !</h2>
                      <p>Aucune astuce ne correspond ?? votre demande !</p>
                      <div class="card-actions">
                        <NuxtLink @click="hideModal" to="/tutoriels" class="btn btn-primary inline-flex gap-2" disabled>Proposer une astuce <span class="badge badge-ghost normal-case">Bient??t disponible</span></NuxtLink>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <div class="inline-flex items-baseline gap-2">
                <h5 class="font-semibold text-2xl mb-2">Codex</h5>
                <NuxtLink @click="hideModal" to="/codex">Tout voir</NuxtLink>
              </div>
              <ul class="flex gap-10 overflow-x-auto">
                <li v-if="codexResults.length >= 1" v-for="result in codexResults" class="card shrink-0 w-96 bg-base-100 shadow-xl">
                  <div class="card-body">
                    <h2 class="card-title">{{ result.item.displayName }}</h2>
                    <p>{{ result.item.description }}</p>
                    <div class="card-actions justify-end">
                      <NuxtLink @click="hideModal" :to="result.item._path" class="btn btn-primary">D??couvrir</NuxtLink>
                    </div>
                  </div>
                </li>
                <li v-else>
                  <div class="card w-96 bg-neutral text-neutral-content">
                    <div class="card-body">
                      <h2 class="card-title">Oops !</h2>
                      <p>Aucune entr??e du Codex ne correspond ?? votre demande !</p>
                      <div class="card-actions">
                        <NuxtLink @click="hideModal" to="/tutoriels" class="btn btn-primary inline-flex gap-2" disabled>Proposer une entr??e de Codex <span class="badge badge-ghost normal-case">Bient??t disponible</span></NuxtLink>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>

</style>