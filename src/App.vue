<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <Suspense>
    <template #default>
      <HelloWorld />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>
