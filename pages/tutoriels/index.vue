<script setup lang="ts">
const { data } = await useAsyncData('tutorials', () => queryContent('/tutoriels').find())
</script>

<template>
<main class="classic-main">
  <h1 class="text-5xl font-bold mb-10">Découvrez tous les tutoriels</h1>
  <div class="flex flex-wrap justify-center gap-10">
    <div v-for="element in data" class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">{{ element.displayName }}</h2>
        <p>{{ element.description }}</p>
        <div class="card-actions justify-end">
          <NuxtLink :to="element._path" class="btn btn-primary">Découvrir</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</main>
</template>

<style scoped>

</style>