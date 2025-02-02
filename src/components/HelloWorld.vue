<script setup lang="ts">
import { onMounted, ref, onServerPrefetch } from 'vue';
import { useHeadlines } from '@/composables/useHeadlines';

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
    <h2>Latest News</h2>
    <div v-if="loading">Loading...</div>
    <ul v-else>
      <li v-for="headline in headlines" :key="headline.id">
        <a :href="headline.link" target="_blank">{{ headline.headline }}</a>
      </li>
    </ul>
  </div>
</template>
