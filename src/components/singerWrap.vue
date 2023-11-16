<script setup>
import { ref, computed } from "vue";
import { usekkboxStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const kkbox = usekkboxStore()
const { singers } = storeToRefs(kkbox)

</script>
<template>
    <div class="singerWrap">
        <div class="title">
            <h1>歌手</h1>
        </div>
        <div class="content">
            <div class="singer" v-for="singer in singers">
                <div class="pic">
                    <img :src="singer.images[0].url" alt="">
                </div>
                <div class="name">
                    <p>{{ singer.name }}</p>
                </div>
            </div>
            <!-- <div class="singer">
                <div class="pic">
                    <img src="https://i.kfs.io/artist/global/3497184,0v6/fit/160x160.jpg" alt="">
                </div>
                <div class="name">
                    <p>張碧晨</p>
                </div>
            </div>
            <div class="singer">
                <div class="pic">
                    <img src="https://i.kfs.io/artist/global/3497184,0v6/fit/160x160.jpg" alt="">
                </div>
                <div class="name">
                    <p>張碧晨</p>
                </div>
            </div>
            <div class="singer">
                <div class="pic">
                    <img src="https://i.kfs.io/artist/global/3497184,0v6/fit/160x160.jpg" alt="">
                </div>
                <div class="name">
                    <p>張碧晨</p>
                </div>
            </div>
            <div class="singer">
                <div class="pic">
                    <img src="https://i.kfs.io/artist/global/3497184,0v6/fit/160x160.jpg" alt="">
                </div>
                <div class="name">
                    <p>張碧晨</p>
                </div>
            </div>
            <div class="singer">
                <div class="pic">
                    <img src="https://i.kfs.io/artist/global/3497184,0v6/fit/160x160.jpg" alt="">
                </div>
                <div class="name">
                    <p>張碧晨</p>
                </div>
            </div> -->
        </div>
    </div>
</template>
<style lang='scss' scoped>
.singerWrap {
    width: 1200px;
    margin: auto;

    // border: 1px solid red;
    .title {
        margin: 20px 0;
    }

    .content {
        display: flex;
        justify-content: space-around;

        .singer {
            // border: 1px solid red;

            .pic {
                margin-bottom: 20px;

                img {
                    border-radius: 50%;
                    width: 100px;
                    height: 100px;
                    vertical-align: bottom;
                }
            }

            .name {
                p {
                    text-align: center;
                }
            }
        }
    }
}
</style>