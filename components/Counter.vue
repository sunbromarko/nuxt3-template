<template>
  <v-card variant="outlined" class="ma-4 pa-4">
    <h1>COUNTER на IOC контейнере</h1>
    <h2 data-test="counter">{{ counterService.counter }}</h2>
    <v-btn data-test="increment" class="mx-1" color="success" variant="elevated" @click="() => counterService.increment()"
      >УВЕЛИЧИТЬ</v-btn
    >
    <v-btn data-test="decrement" class="mx-1" color="error" variant="elevated" @click="() => counterService.decrement()"
      >УМЕНЬШИТЬ</v-btn
    >
    </v-card>
</template>

<script setup lang="ts">
import { CounterService } from '../services/CounterService.js'

const counterService = useIOC(CounterService)  
</script>
