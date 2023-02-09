<script setup lang="ts">
// @ts-ignore
import readingTime from "reading-time/lib/reading-time";
import { useScroll } from "@vueuse/core";

const route = useRoute()
const article = await queryContent(route.path).findOne()

let readTime = ref('')
let headers = ref<Array<HTMLHeadingElement>>([])
const windowElement = ref()
const { y } = useScroll(windowElement, { behavior : 'smooth'})
const showGoToTop = ref(false)

watch(y , (value) => {
  showGoToTop.value = value > 350;
})

onMounted(() => {
  const content = document.querySelector('.prose')
  windowElement.value = window

  headers.value = Array.from(document.querySelectorAll('h2'))

  if (content) {
    const stats = readingTime(content.innerHTML)
    const time = Math.round(stats.minutes)
    readTime.value = time >= 1 ? `Environ ${time} minutes` : `Environ ${Math.round(stats.time / 1000)} secondes`
  }
})
</script>

<template>
  <main class="classic-main flex gap-10">
    <div class="prose max-w-none md:w-4/5">
      <ContentDoc>
        <template #not-found>
          <main class="classic-main flex flex-col items-center">
            <nuxt-img src="/assets/404.svg" alt="Image de loupe illustrant l'erreur 404" />
            <h1 class="mb-0 text-5xl font-bold text-center">Page introuvable.</h1>
            <p class="m-0 mt-2">La page que vous cherchez est soit indisponible soit en cours de création.</p>
            <NuxtLink to="/" class="btn btn-primary mt-4">Retourner à l'accueil</NuxtLink>
          </main>
        </template>
      </ContentDoc>
    </div>
    <div v-if="article" class="hidden md:block w-1/5">
      <div class="sticky top-6 flex flex-col gap-4">
        <h5 class="-mb-1 font-semibold text-xl">À propos</h5>
        <ul class="space-y-1">
          <li class="inline-flex items-center gap-2"><Icon name="ph:clock" size="1.2rem"/> {{ readTime }}</li>
          <li class="inline-flex items-center gap-2"><Icon name="ph:pencil-duotone" size="1.2rem"/><NuxtLink to="/proposer-une-correction">Editer cette page</NuxtLink></li>
        </ul>
        <div class="flex flex-wrap gap-1">
          <span v-for="tag in article.tags" :key="tag" class="inline-flex items-center gap-1">
            <Icon name="ph:tag-duotone" size="1.2rem"/>
            <NuxtLink :to="`/tags/${tag}`">{{ tag }}</NuxtLink>
          </span>
        </div>
        <div>
          <h5 class="mb-3 font-semibold text-xl">Contenu</h5>
          <ul class="space-y-2">
            <li v-for="header in headers"><NuxtLink :to="'#' + header.id">- {{ header.innerText }}</NuxtLink></li>
          </ul>
        </div>
      </div>
      <Teleport to="body">
        <div v-if="showGoToTop" @click="y = 0" class="fixed bottom-10 right-10 md:right-20 z-50 tooltip tooltip-top" data-tip="Retourner en haut">
          <div class="btn">
            <Icon name="ph:arrow-up" size="2rem" class="cursor-pointer" />
          </div>
        </div>
      </Teleport>
    </div>
  </main>
</template>