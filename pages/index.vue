<template>
  <v-app id="inspire">
    <v-main>
      <InjectTest />
      <inject-test />
      <inject-test />
      <nuxt-link to=''>Ссылка прямо в ад</nuxt-link>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'empty',
})

</script>


