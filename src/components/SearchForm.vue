<script setup>
import { defineEmits } from 'vue'

defineEmits(['search', 'clear'])
const searchTerm = defineModel()
</script>

<template>
    <form class="search-form" @submit.prevent="$emit('search', $event.target.value)">
        <input type="text" v-model="searchTerm">
        <button type="submit">Search</button>
        <button type="button" @click="$emit('clear')">Clear</button>
    </form>
</template>