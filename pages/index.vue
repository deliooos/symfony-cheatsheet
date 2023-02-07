<script setup lang="ts">
</script>

<template>
  <main class="classic-main">
    <div class="hero my-56">
      <div class="hero-content max-w-none text-center">
        <div>
          <h1 class="inline-flex items-center gap-2 text-5xl font-bold">Bienvenue sur la SFCS <span class="badge badge-info uppercase">Bêta</span> </h1>
          <p class="py-6 text-xl">Retrouvez sur la <span class="font-semibold text-primary">Symfony Cheatsheet</span> des astuces, solutions et un codex pour débutant des commandes et fonctions de base de <NuxtLink to="https://symfony.com/" target="_blank" class="link">Symfony</NuxtLink></p>
          <Tip type="alert-info" class="py-5 text-left mb-5">
            La plupart, si ce n'est la totalité du contenu de SFCS contenant des commandes utilise le <NuxtLink to="https://symfony.com/download" target="_blank" class="link">binaire Symfony</NuxtLink>, il est donc nécessaire de l'avoir installé sur votre machine pour pouvoir suivre les tutoriels.
          </Tip>
          <div class="flex justify-center gap-5">
            <NuxtLink to="/apprendre-symfony" class="btn btn-primary">Apprendre Symfony</NuxtLink>
            <NuxtLink to="/apprendre-symfony" class="btn btn-primary inline-flex gap-2" disabled>Contribuer <span class="badge badge-ghost normal-case">Bientôt disponible</span></NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <Categories/>
    <HomeTutoriels/>
    <HomeCodex/>
  </main>

</template>

<style scoped>

</style>