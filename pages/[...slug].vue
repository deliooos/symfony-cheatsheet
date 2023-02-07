<template>
  <main class="classic-main">
    <div class="prose max-w-none">
      <ContentDoc>
        <template #not-found>
          <main class="classic-main flex flex-col items-center">
            <nuxt-img src="/assets/404.svg" alt="Image de loupe illustrant l'erreur 404" />
            <h1 class="mb-0 text-5xl font-bold text-center">Page introuvable</h1>
            <p class="m-0 mt-2">La page que vous cherchez est soit indisponible soit en cours de création.</p>
            <NuxtLink to="/" class="btn btn-primary mt-4">Retourner à l'accueil</NuxtLink>
          </main>
        </template>
      </ContentDoc>
    </div>
  </main>
</template>