<script setup lang="ts">
import type { Headline } from '@/../types/Headline';
import HeadlineCard from '@/components/HeadlineCard.vue';

defineProps<{ headlines: Headline[] }>();
</script>

<template>
    <div class="masonry-grid">
        <HeadlineCard v-for="headline in headlines" :key="headline.id" :headline="headline" class="masonry-item" />
    </div>
</template>

<style scoped>
.masonry-grid {
    column-count: 1;
    column-gap: 16px;
    padding: 16px;
    box-sizing: border-box;
    /* Ensure padding is included in the width */
    max-width: 95%;
    /* Prevent overflow */
    overflow-x: hidden;
    /* Hide any accidental overflow */
}

@media (min-width: 600px) {
    .masonry-grid {
        column-count: 2;
    }
}

@media (min-width: 900px) {
    .masonry-grid {
        column-count: 3;
    }
}

@media (min-width: 1200px) {
    .masonry-grid {
        column-count: 4;
    }
}

@media (min-width: 1600px) {
    .masonry-grid {
        column-count: 5;
    }
}

@media (min-width: 2000px) {
    .masonry-grid {
        column-count: 6;
    }
}

@media (min-width: 3000px) {
    .masonry-grid {
        column-count: 7;
    }
}

@media (min-width: 4000px) {
    .masonry-grid {
        column-count: 8;
    }
}

@media (min-width: 5000px) {
    .masonry-grid {
        column-count: 10;
    }
}

@media (min-width: 8000px) {
    .masonry-grid {
        column-count: 12;
    }
}

.masonry-item {
    display: inline-block;
    /* Ensure items behave like blocks within columns */
    width: 100%;
    /* Each item takes full width of the column */
    margin-bottom: 16px;
    box-sizing: border-box;
}
</style>
