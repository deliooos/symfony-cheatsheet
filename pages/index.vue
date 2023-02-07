<script setup lang="ts">
import HomeCodex from "~/components/HomeCodex.vue";

useHead({
  title: 'SFCS',
  meta: [
    {
      charset: "utf-8"
    },
    {
      name: "viewport",
      content: "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
    },
    {
      "http-equiv": "X-UA-Compatible",
      content: "ie-edge"
    }
  ]
})
</script>

<template>
  <main class="classic-main">
    <div class="hero my-56">
      <div class="hero-content max-w-none text-center">
        <div>
          <h1 class="text-5xl font-bold">Bienvenue sur la SFCS</h1>
          <p class="py-6 text-xl">Retrouvez sur la <span class="font-semibold text-primary">Symfony Cheatsheet</span> des astuces, solutions et un codex pour débutant des commandes et fonctions de base de <NuxtLink to="https://symfony.com/" target="_blank" class="link">Symfony</NuxtLink></p>
          <NuxtLink to="/apprendre-symfony" class="btn btn-primary">Apprendre Symfony</NuxtLink>
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