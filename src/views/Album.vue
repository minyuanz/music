<script setup>
import { ref, computed } from "vue";
import { usekkboxStore } from "../stores/counter";
import { storeToRefs } from "pinia";

const kkbox = usekkboxStore()
const { dataList } = storeToRefs(kkbox)

const pageSize = ref(10)
const currentPage = ref(1)

const totalPages = computed(() => {
    return Math.ceil(allAlbum.value.length / pageSize.value)
})

const paginatedList = computed(() => {
    const startIndex = (currentPage.value - 1) * pageSize.value
    const endIndex = startIndex + pageSize.value
    return allAlbum.value.slice(startIndex, endIndex)
})
const allAlbum = computed(() => {
    return dataList.value.albums.data
})

const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value -= 1
    }
}

const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value += 1
    }
}

const goToPage = (page) => {
    currentPage.value = page
}
</script>
<template>
    <div class="singerWrap max-w-6xl m-auto">
        <div class=" text-3xl font-bold my-5">
            <h1>專輯搜尋結果</h1>
        </div>
        <div class="content grid grid-cols-5 gap-10">
            <div class="album" v-for="album in paginatedList">
                <div class="pic">
                    <img :src="album.images[0].url" alt="" class=" align-bottom w-full rounded-lg cursor-pointer">
                </div>
                <div class="songName my-5 h-14 cursor-pointer hover:underline">
                    <p>{{ album.name }}</p>
                </div>
                <div class="name">
                    <p class=" text-sm text-gray-400 h-10 cursor-pointer hover:underline">{{ album.artist.name }}</p>
                </div>
            </div>
        </div>
        <div class=" pagination my-12 text-center">
            <button class="paginationmain mx-3 w-10 h-10 text-xl hover:bg-slate-400 rounded-full" @click="prevPage"
                :disabled="currentPage === 1">
                ＜
            </button>
            <button class="paginationmain mx-3 w-10 h-10 text-xl hover:bg-slate-400 rounded-full" @click="goToPage(page)"
                v-for="page in totalPages" :key="page" :class="{ 'current-page': page === currentPage }">
                {{ page }}
            </button>
            <button class="paginationmain mx-3 w-10 h-10 text-xl hover:bg-slate-400 rounded-full" @click="nextPage"
                :disabled="currentPage === totalPages">
                ＞
            </button>
        </div>
    </div>
</template>
<style lang=''>

</style>