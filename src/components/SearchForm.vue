<script setup>
import IconClear from './icons/IconClear.vue'
import IconSearch from './icons/IconSearch.vue'
import { defineEmits } from 'vue'

defineEmits(['search', 'clear'])
const searchTerm = defineModel()
</script>

<template>
    <form class="search-form" @submit.prevent="$emit('search')">
        <input type="search" placeholder="Search gifs" v-model="searchTerm">
        <button type="submit" class="search-btn">
            <IconSearch />
            <ToolTip text="Search" />
        </button>
        <button v-if="searchTerm" type="button" @click="$emit('clear')" class="clear-btn">
            <IconClear />
            <ToolTip text="Clear" />
        </button>
    </form>
</template>

<style scoped>
.search-form {
    display: flex;
    align-items: center;
}

input[type="search"] {
    flex: 1;
    padding: 0.8rem;
    border-radius: 0.25rem;
    border: none;
    outline: none;
    margin-right: 0.5rem;
}

.search-btn,
.clear-btn {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.search-btn svg,
.clear-btn svg {
    width: 20px;
    height: 20px;

}
</style>