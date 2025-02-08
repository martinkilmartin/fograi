<script setup lang="ts">
import HeadlineList from './components/HeadlineList.vue'
</script>

<template>
  <Suspense>
    <template #default>
      <HeadlineList />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>
