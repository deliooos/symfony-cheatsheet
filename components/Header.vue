<script setup lang="ts">
const colorMode = useColorMode();
const themes = [
  {
    title: 'Système',
    value: 'system'
  },
  {
    title: 'Clair',
    value: 'light'
  },
  {
    title: 'Sombre',
    value: 'dark'
  },
  {
    title: 'Cyberpunk',
    value: 'cyberpunk'
  },
  {
    title: 'Halloween',
    value: 'halloween'
  },
  {
    title: 'Nuit',
    value: 'night'
  },
  {
    title: 'Hiver',
    value: 'winter'
  }
]
</script>

<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <NuxtLink to="/" class="btn btn-ghost normal-case text-xl">SFCS</NuxtLink>
    </div>
    <div class="flex-none gap-2">
      <div class="form-control">
        <input type="text" placeholder="Recherche à venir..." class="input input-bordered" disabled/>
      </div>
      <div class="dropdown dropdown-end">
        <select v-model="colorMode.preference" class="select select-accent w-full max-w-xs">
          <option disabled selected>Thème</option>
          <option v-for="theme of themes" :value="theme.value" :key="theme">{{ theme.title }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>