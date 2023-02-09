<script setup lang="ts">
const { data:all } = await useAsyncData('content', () => queryContent('').find())

const numberOfArticles = computed(() => all.value?.length)
</script>

<template>
  <div class="flex flex-col items-center w-full mb-12">
    <h2 class="text-2xl font-semibold">En chiffres ...</h2>
    <div class="stats shadow">
      <div class="stat">
        <div class="stat-title">Total d'articles</div>
        <div class="stat-value">{{ numberOfArticles }}</div>
        <div class="stat-desc">et plus chaque jour !</div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>