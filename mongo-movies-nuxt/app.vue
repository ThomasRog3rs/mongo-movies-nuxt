<template>
  <NavBar></NavBar>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
  import { useHead } from '#app';
  
  useHead({
    title: 'Mongo Movies - find the movies you want',
    htmlAttrs: {
      lang: 'en-GB'
    },
    meta: [
      { name: 'description', content: 'Mongo Movies allows you to view and add movies' },
      { property: 'og:title', content: 'Mongo movies' },
      { property: 'og:description', content: 'Mongo movies' },
      { property: 'og:image', content: '/_nuxt/assets/images/og-image.png' },
      { property: 'og:type', content: 'website' },
      { name: 'robots', content: 'index, follow' },
    ]
  });
</script>