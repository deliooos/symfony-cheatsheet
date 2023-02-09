<script setup lang="ts">
</script>

<template>
  <main class="classic-main">
    <div class="hero my-56">
      <div class="hero-content max-w-none text-center">
        <div class="flex flex-col items-center">
          <div class="relative w-fit">
            <h1 class="inline-flex flex-col lg:flex-row items-center gap-2 w-fit text-5xl font-bold z-30 indicator">Bienvenue sur la SFCS<span class="badge badge-info uppercase">Bêta</span></h1>
            <img src="/assets/grenouille.png" alt="" class="absolute -top-4 -left-5 -rotate-6 w-12 h-12 -z-20 blur-[0.8px]">
          </div>
          <p class="py-6 text-xl">Retrouvez sur la <span class="font-semibold text-primary">Symfony Cheatsheet</span> des astuces, solutions et un codex pour débutant des commandes et fonctions de base de <NuxtLink to="https://symfony.com/" target="_blank" class="link">Symfony</NuxtLink></p>
          <div class="w-full">
            <Search/>
          </div>
          <Tip type="alert-info" class="py-5 text-left my-5">
            La plupart, si ce n'est la totalité du contenu de SFCS contenant des commandes utilise le <NuxtLink to="https://symfony.com/download" target="_blank" class="link">binaire Symfony</NuxtLink>, il est donc fortement conseillé de l'avoir installé sur votre machine pour pouvoir suivre les tutoriels.
          </Tip>
          <div class="flex flex-col sm:flex-row justify-center gap-5">
            <NuxtLink to="/apprendre-symfony" class="btn btn-primary">Apprendre Symfony</NuxtLink>
            <NuxtLink to="/apprendre-symfony" class="btn btn-primary inline-flex gap-2 bg-neutral-focus" disabled>Contribuer <span class="badge badge-ghost normal-case">Bientôt disponible</span></NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <Categories/>
    <HomeTutoriels/>
    <div class="divider"></div>
    <HomeAstuces/>
    <div class="divider"></div>
    <HomeCodex/>
    <HomeStats/>
  </main>

</template>

<style scoped>

</style>