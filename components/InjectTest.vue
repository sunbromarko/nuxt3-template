<template>
  <div variant="outlined" class="ma-4 pa-4">
    <h1>COUNTER на IOC контейнере</h1>
    <h2>{{ counterService.counter }}</h2>
    <button class="mx-1" color="success" variant="elevated" @click="() => counterService.increment()"
      >УВЕЛИЧИТЬ</button
    >
    <button class="mx-1" color="error" variant="elevated" @click="() => counterService.decrement()"
      >УМЕНЬШИТЬ</button
    >
    </div>
</template>

<script setup lang="ts">
import { CounterService } from '../services/CounterService.js'

const counterService = useIOC(CounterService)  
</script>
