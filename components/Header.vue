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
  <div class="navbar bg-base-100 shadow-lg">
    <div class="flex-1">
      <NuxtLink to="/" class="btn btn-ghost normal-case text-xl">SFCS</NuxtLink>
    </div>
    <div class="flex-none gap-2 hidden lg:flex">
      <div class="form-control">
        <input type="text" placeholder="Recherche à venir..." class="input input-bordered" disabled/>
      </div>
      <div class="dropdown dropdown-end hidden lg:flex">
        <select v-model="colorMode.preference" class="select select-accent w-full max-w-xs">
          <option disabled selected>Thème</option>
          <option v-for="theme of themes" :value="theme.value" :key="theme">{{ theme.title }}</option>
        </select>
      </div>
    </div>
    <div class="dropdown dropdown-end lg:hidden">
      <label tabindex="0" class="btn m-1"><Icon name="ph:list-dashes-bold" size="1.4rem"/></label>
      <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 space-y-3">
        <li><NuxtLink to="/tutoriels">Tutoriels</NuxtLink></li>
        <li><NuxtLink to="/astuces">Astuces</NuxtLink></li>
        <li><NuxtLink to="/codex">Codex</NuxtLink></li>
        <div class="form-control">
          <input type="text" placeholder="Recherche à venir..." class="input input-bordered" disabled/>
        </div>
        <select v-model="colorMode.preference" class="select select-accent w-full max-w-xs">
          <option disabled selected>Thème</option>
          <option v-for="theme of themes" :value="theme.value" :key="theme">{{ theme.title }}</option>
        </select>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>