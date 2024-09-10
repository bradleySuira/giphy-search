<script setup lang="ts">
import { ref } from 'vue'
import SearchForm from '@/components/SearchForm.vue'
import SearchResults from '@/components/SearchResults.vue'
import { searchGifs } from '@/services'

const searchResults = ref<any>([])
const loading = ref(false)
const pagination = ref({ offset: 0, count: 10, totalCount: 0 })
const searchTerm = ref('')

const search = async (term: string, append = false) => {
  loading.value = true
  try {
    const response = await searchGifs({ term, limit: pagination.value.count, offset: pagination.value.offset })
    if (append) {
      searchResults.value = [...searchResults.value, ...response.data]
    } else {
      searchResults.value = response.data
    }
    pagination.value = response.pagination
  } catch (error) {
    //TODO: notify user
    console.error(error)
  } finally {
    loading.value = false
  }
}

const loadMore = () => {
  if (pagination.value.offset + pagination.value.count >= pagination.value.totalCount) return
  pagination.value.offset += pagination.value.count
  search(searchTerm.value, true)
}

const clear = () => {
  searchTerm.value = ''
  searchResults.value = []
  pagination.value = { offset: 0, count: 10, totalCount: 0 }
}
</script>

<template>
  <main>
    <SearchForm @search="search" @clear="clear" :loading="loading" v-model="searchTerm" />
    <SearchResults @load-more="loadMore" :results="searchResults" :loading="loading" :pagination="pagination" />
  </main>
</template>
<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  min-height: 100vh;
}
</style>
