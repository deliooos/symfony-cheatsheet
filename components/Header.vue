<script setup lang="ts">
const colorMode = useColorMode();
const themes = [
    'system',
    'light',
    'dark',
    'cyberpunk',
    'halloween',
    'night',
    'winter'
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
          <option v-for="theme of themes" :key="theme">{{ theme }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>