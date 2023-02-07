<script setup lang="ts">
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
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico"
    }
  ]
})
</script>

<template>
  <Header/>
  <NuxtPage/>
</template>
