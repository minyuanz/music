<script setup>
import { ref, computed, onMounted } from "vue";
import { usekkboxStore } from "../stores/counter";

const kkbox = usekkboxStore()
const search = ref('')

const query = computed(() => {
    if (search.value === '') {
        return '張碧晨'
    } else {
        return search.value
    }
})

const fetchData = () => {
    const url = `https://api.kkbox.com/v1.1/search?q=${query.value}&territory=TW&offset=0&limit=50`
    const token = 'Bearer FoiFt3FuVrdZWEF8Plr_Zw=='

    fetch(url, {
        headers: {
            'Authorization': token
        }
    })
        .then(res => res.json())
        .then(res => {
            console.log(res.tracks.data);
            kkbox.dataList = res
            kkbox.songs = res.tracks.data.splice(0, 10)
            kkbox.singers = res.artists.data.splice(0, 6)
            kkbox.albums = res.albums.data.splice(0, 5)

        })
        .catch(error => {
            console.error(error)
        })
};

onMounted(() => {
    fetchData()
})
</script>

<template>
    <div class="wrap">
        <div class="content">
            <input type="text" placeholder="搜尋歌手、歌曲、歌單" v-model="search" @keyup.enter="fetchData">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrap {
    // background-image: linear-gradient(0deg, #fff, #09CEF6);
    background-color: #131A24;
    height: 100px;
    width: 100%;
    display: flex;


    .content {
        width: 1200px;
        margin: auto;
        text-align: center;
        // border: 1px solid red;

        h1 {
            // border: 1px solid red;
        }

        input {
            width: 500px;
            padding: 10px 20px;
            font-size: 24px;
            border: none;
            outline: none;
            background-color: transparent;
            border-bottom: 3px solid #000;
            color: #fff;
        }
    }
}
</style>
