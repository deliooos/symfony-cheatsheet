<script setup lang="ts">
  // @ts-ignore
  import readingTime from "reading-time/lib/reading-time";

  // const route = useRoute()
  // const text = await queryContent(route.fullPath).find()
  // const stats = readingTime(text)

  onMounted(() => {
    const content = document.querySelector('.prose')

    if (content) {
      const stats = readingTime(content.innerHTML)
      const readTime = stats.minutes > 1 ? `${stats.minutes} minutes` : `${stats.time} secondes`
    }
  })
</script>

<template>
  <main class="classic-main flex gap-10">
    <div class="prose max-w-none w-4/5">
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
    <div class="w-1/5">
      <div class="sticky top-6">
        <h5 class="font-semibold text-xl">À propos</h5>
        <ul>
          <li>{{ readTime }}</li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  </main>
</template>