<script setup lang="ts">
import type { Headline } from '@/../types/Headline';

defineProps<{ headline: Headline }>();
</script>

<template>
    <div class="headline-card">
        <!-- Media (Image or Video Thumbnail) -->
        <div class="media-container">
            <img v-if="headline.img_src" :src="headline.img_src" :alt="headline.img_alt || 'Headline Image'"
                class="media-image" />
            <div v-else class="media-placeholder">📺</div>
        </div>

        <!-- Content -->
        <div class="content">
            <div class="meta">
                <span class="source">{{ headline.source }}</span>
                <span class="time">{{ headline.created_at }}</span>
            </div>

            <h3 class="title">
                <a :href="headline.link" target="_blank">{{ headline.headline }}</a>
            </h3>

            <!-- Actions -->
            <div class="actions">
                <button class="icon-button">👍</button>
                <button class="icon-button">🔖</button>
                <button class="icon-button">🔗</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.headline-card {
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
    margin: 2rem 1rem;
}

.headline-card:hover {
    transform: translateY(-2px);
}

.media-container {
    width: 100%;
    height: 180px;
    overflow: hidden;
    background: #f3f3f3;
    display: flex;
    align-items: center;
    justify-content: center;
}

.media-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.media-placeholder {
    font-size: 2rem;
    color: #999;
}

.content {
    padding: 16px;
    display: flex;
    flex-direction: column;
}

.meta {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 8px;
}

.title {
    font-size: 1.1rem;
    font-weight: bold;
    line-height: 1.4;
    margin-bottom: 8px;
}

.title a {
    text-decoration: none;
    color: #222;
}

.title a:hover {
    color: #0070f3;
}

.actions {
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
}

.icon-button {
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
}

.icon-button:hover {
    opacity: 0.7;
}
</style>
