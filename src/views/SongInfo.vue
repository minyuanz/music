<script setup>
import { ref, computed } from "vue";
import { usekkboxStore } from "../stores/counter";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";

const route = useRoute()
const kkbox = usekkboxStore()
const { dataList } = storeToRefs(kkbox)
const songID = ref(route.params.id)

const songinfo = computed(() => {
    return dataList.value.tracks.data.find((el) => {
        return el.id === songID.value
    })
})

</script>
<template>
    <div class="bgColor bg-zinc-200">
        <div class="wrap max-w-6xl m-auto flex py-10">
            <div class="pic mr-20 w-60 rounded-lg overflow-hidden">
                <img :src="songinfo.album.images[1].url" alt="">
            </div>
            <div class="txt">
                <p class=" text-xs text-gray-400">歌曲</p>
                <p class=" text-2xl my-3">{{ songinfo.name }}</p>
                <div class="singer flex items-center">
                    <img :src="songinfo.album.images[0].url" alt="" class=" w-10 rounded-full mr-5">
                    <p class=" text-gray-400">{{ songinfo.album.artist.name }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang=''>

</style>