<script setup lang="ts">
import { onMounted, onServerPrefetch } from 'vue';
import { useHeadlines } from '@/composables/useHeadlines';
// import HeadlineCard from "./HeadlineCard.vue";
import MasonryGrid from "./MasonryGrid.vue";

const { headlines, loading, getHeadlinesSSR, getHeadlinesCSR } = useHeadlines();

onServerPrefetch(async () => {
  await getHeadlinesSSR(); // ✅ Runs before server renders the page
});

onMounted(() => {
  getHeadlinesCSR(); // ✅ Runs only after hydration on the client
});
</script>

<template>
  <div>
    <h2><i>nooze</i></h2>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <!-- HeadlineCard v-for="headline in headlines" :key="headline.id" :headline="headline" / -->
      <MasonryGrid :headlines="headlines" />
    </div>
  </div>
</template>
