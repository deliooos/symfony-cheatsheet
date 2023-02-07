<script setup lang="ts">

</script>

<template>
  <div class="flex flex-wrap gap-10 justify-center mb-36">
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body items-center text-center">
        <h2 class="card-title">Tutoriels</h2>
        <p>Parcourez des tutoriels pour faire ci ou ça dans Symfony, en espérant que vous trouviez votre bonheur !</p>
        <div class="card-actions justify-end">
          <NuxtLink to="/tutoriels" class="btn btn-primary">Parcourir</NuxtLink>
        </div>
      </div>
    </div>
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body items-center text-center">
        <h2 class="card-title">Astuces</h2>
        <p>Vous ne saviez pas qu'on pouvais faire ça avec Symfony ? Maintenant vous savez !</p>
        <div class="card-actions justify-end">
          <NuxtLink class="btn btn-primary">Découvrir</NuxtLink>
        </div>
      </div>
    </div>
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body items-center text-center">
        <h2 class="card-title">Codex</h2>
        <p>Trouvez des descriptions rapides, concises et compréhensible des fonctions et commandes de Symfony</p>
        <div class="card-actions justify-end">
          <NuxtLink to="/codex" class="btn btn-primary">Explorer</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>