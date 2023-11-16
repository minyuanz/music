<script setup>
import { ref, computed } from "vue";
import { usekkboxStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const kkbox = usekkboxStore()
const { albums } = storeToRefs(kkbox)
</script>
<template>
    <div class="albumWrap">
        <div class="title">
            <h1>專輯</h1>
        </div>
        <div class="content">
            <div class="album" v-for="album in albums">
                <div class="pic">
                    <img :src="album.images[0].url" alt="">
                </div>
                <div class="songName">
                    <p>{{ album.name }}</p>
                </div>
                <div class="name">
                    <p>{{ album.artist.name }}</p>
                </div>
            </div>
            <!-- <div class="album">
                <div class="pic">
                    <img src="https://i.kfs.io/album/global/112776628,0v1/fit/160x160.jpg" alt="">
                </div>
                <div class="songName">
                    <p>光的方向 (電視劇《長歌行》片頭主題曲)</p>
                </div>
                <div class="name">
                    <p>张碧晨</p>
                </div>
            </div>
            <div class="album">
                <div class="pic">
                    <img src="https://i.kfs.io/album/global/157319298,0v1/fit/160x160.jpg" alt="">
                </div>
                <div class="songName">
                    <p>年輪（電視劇《花千骨》插曲）</p>
                </div>
                <div class="name">
                    <p>张碧晨</p>
                </div>
            </div>
            <div class="album">
                <div class="pic">
                    <img src="https://i.kfs.io/album/global/132968462,2v1/fit/160x160.jpg" alt="">
                </div>
                <div class="songName">
                    <p>如故</p>
                </div>
                <div class="name">
                    <p>张碧晨</p>
                </div>
            </div>
            <div class="album">
                <div class="pic">
                    <img src="https://i.kfs.io/album/global/34986789,0v1/fit/160x160.jpg" alt="">
                </div>
                <div class="songName">
                    <p>開往早晨的午夜</p>
                </div>
                <div class="name">
                    <p>张碧晨</p>
                </div>
            </div> -->
        </div>
    </div>
</template>
<style lang='scss' scoped>
.albumWrap {
    width: 1200px;
    margin: auto;

    // border: 1px solid red;
    .title {
        margin: 20px 0;
    }

    .content {
        display: flex;
        justify-content: space-evenly;

        .album {
            // border: 1px solid red;
            width: 200px;

            .pic {
                border: 1px solid #aaa;
                border-radius: 10px;
                overflow: hidden;

                img {
                    vertical-align: bottom;
                    width: 100%;
                }
            }

            .songName {
                margin: 10px 0;
            }

            .name {
                p {
                    color: #aaa;
                }
            }
        }
    }
}
</style>