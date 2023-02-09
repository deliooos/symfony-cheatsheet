<script setup lang="ts">

</script>

<template>
  <footer class="footer footer-center p-10 bg-base-200 text-base-content rounded">
    <div class="grid grid-flow-col gap-4">
      <NuxtLink to="/apprendre-symfony" class="link link-hover">Apprendre Symfony</NuxtLink>
      <NuxtLink to="/tutoriels" class="link link-hover">Tutoriels</NuxtLink>
      <NuxtLink to="/astuces" class="link link-hover">Astuces</NuxtLink>
      <NuxtLink to="/codex" class="link link-hover">Codex</NuxtLink>
    </div>
    <div>
      <div class="grid grid-flow-col gap-4">
        <NuxtLink to="https://discord.com/RYsnHFTnyx"><Icon name="carbon:logo-discord" size="2.5rem"/></NuxtLink>
        <NuxtLink to="https://twitter.com/delioooscode"><Icon name="carbon:logo-twitter" size="2.5rem"/></NuxtLink>
      </div>
    </div>
    <div>
      <p>Copyright © 2023 - Tous droits réservés par <NuxtLink to="https://twitter.com/delioooscode" class="link">deliooos</NuxtLink></p>
    </div>
  </footer>
</template>

<style scoped>

</style>