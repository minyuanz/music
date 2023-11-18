<script setup>
import { ref, computed } from "vue";
import { usekkboxStore } from "../stores/counter";
import { storeToRefs } from "pinia";

const kkbox = usekkboxStore()
const { dataList } = storeToRefs(kkbox)

const pageSize = ref(10)
const currentPage = ref(1)

const totalPages = computed(() => {
    return Math.ceil(allSong.value.length / pageSize.value)
})

const paginatedList = computed(() => {
    const startIndex = (currentPage.value - 1) * pageSize.value
    const endIndex = startIndex + pageSize.value
    return allSong.value.slice(startIndex, endIndex)
})


const allSong = computed(() => {
    return dataList.value.tracks.data
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
    <div class="songWrap max-w-6xl m-auto">
        <div class=" text-3xl font-bold my-5">
            <h1>歌曲搜尋結果</h1>
        </div>
        <div class="content grid grid-cols-2 gap-12">
            <div class="song flex items-center py-3 border-b-2 hover:bg-sky-50" v-for="song in  paginatedList ">
                <div class="pic mr-3">
                    <img :src="song.album.images[0].url" alt="" class=" w-12 h-12 align-bottom">
                </div>
                <div class="txt">
                    <router-link :to="`/song/${song.id}`">
                        <div class="songName cursor-pointer">
                            <p>{{ song.name }}</p>
                        </div>
                    </router-link>
                    <div class="singer">
                        <p class=" text-gray-400 hover:underline cursor-pointer">{{ song.album.artist.name }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class=" pagination my-12 text-center">
            <button class="paginationmain mx-3 w-10 h-10 text-xl hover:bg-slate-400 rounded-full" @click="prevPage"
                :disabled="currentPage === 1">
                ＜
            </button>
            <button class="paginationmain mx-3 w-10 h-10 text-xl hover:bg-slate-400 rounded-full" @click="goToPage(page)"
                v-for=" page  in  totalPages " :key="page" :class="{ 'current-page': page === currentPage }">
                {{ page }}
            </button>
            <button class="paginationmain mx-3 w-10 h-10 text-xl hover:bg-slate-400 rounded-full" @click="nextPage"
                :disabled="currentPage === totalPages">
                ＞
            </button>
        </div>
    </div>
</template>

<style lang='scss' scoped></style>

<!-- curl -d "grant_type=client_credentials&&client_id=f29695c2afa9b03c07455d21033f788b&client_secret=6297bcc8f520c110cb887297c72a8794" https://account.kkbox.com/oauth2/token -->
