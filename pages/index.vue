<template>
  <v-app>
    <v-main>
      <counter />
      <counter />
      <counter />
      <nuxt-link to="">Ссылка прямо в ад</nuxt-link>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'empty',
})
</script>
