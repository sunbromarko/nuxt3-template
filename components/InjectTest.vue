<template>
  <v-card variant="outlined" class="ma-4 pa-4">
      <h1>COUNTER на IOC контейнере sdf</h1>
      <h2>{{ counterService.counter }}</h2>
      <v-btn class="mx-1" color="success" variant="elevated" @click="()=>counterService.increment()">УВЕЛИЧИТЬ</v-btn>
      <v-btn class="mx-1" color="error" variant="elevated" @click="()=>counterService.decrement()">УМЕНЬШИТЬ</v-btn>
  </v-card>
</template>

<script setup lang="ts">
import  {CounterService}  from '@/services/UserService';

const counterService = useIOC(CounterService);
</script>

