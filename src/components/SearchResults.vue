<script setup>
import IconLoadMore from './icons/IconLoadMore.vue'
defineProps({
    results: Array,
    loading: Boolean,
    pagination: Object
})
defineEmits(['load-more'])
</script>

<template>
    <div class="wrapper">
        <div class="results-container">
            <div class="results">
                <div v-for="result in results" :key="result.id">
                    <img :src="result.images.preview_gif.url" alt="" :height="result.images.preview_gif.height"
                        :width="result.images.preview_gif.width">
                </div>
            </div>
            <p v-if="loading">Loading...</p>
            <p v-else-if="results.length === 0">No results found</p>
            <div class="pagination" v-else>
                <button @click="$emit('load-more')">
                    <IconLoadMore />
                </button>
            </div>

        </div>
    </div>
</template>
<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: center;
    padding-top: 2rem;
}

.results-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.results {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1rem;
}

.results div {
    width: 100%;
    display: flex;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 4px;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 5%);
}

.results div:hover {
    transform: scale(1.1);
}

@media screen and (max-width: 768px) {
    .results {
        grid-template-columns: repeat(1, 1fr);
    }

}

.pagination {
    margin-top: 1rem;
    width: 100%;
    display: flex;
    justify-content: center;
}

.pagination button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.pagination button svg {
    width: 50px;
    height: 50px;

}
</style>