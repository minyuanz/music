import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usekkboxStore = defineStore('kkbox', () => {
    const dataList = ref(null)
    const songs = ref(null)
    const singers = ref(null)
    const albums = ref(null)

    return { dataList, songs, singers, albums }
})
