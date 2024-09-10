<script setup>
defineProps({
    results: Array,
    loading: Boolean,
    pagination: Object
})
defineEmits(['load-more'])
</script>

<template>
    <div class="wrapper">
        <h1>Search Results</h1>
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
                <button @click="$emit('load-more')">Load more</button>
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
    padding-top: 1rem;
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

.pagination {
    margin-top: 1rem;
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>