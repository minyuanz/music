<script setup>
import { ref, computed } from "vue";
import { usekkboxStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const kkbox = usekkboxStore()
const { songs } = storeToRefs(kkbox)

</script>
<template>
    <!-- <pre>
        {{ splice }}
    </pre> -->
    <!-- <h1>home</h1> -->
    <div class="songWrap">
        <div class="title">
            <h1>歌曲</h1>
        </div>
        <div class="content">
            <div class="song" v-for="song in songs">
                <div class="pic">
                    <img :src="song.album.images[0].url" alt="">
                </div>
                <div class="txt">
                    <div class="songName">
                        <p>{{ song.name }}</p>
                    </div>
                    <div class="singer">
                        <p>{{ song.album.artist.name }}</p>
                    </div>
                </div>
            </div>
            <!-- <div class="song">
                <div class="pic">
                    <img src="https://i.kfs.io/album/global/236078225,0v1/fit/160x160.jpg" alt="">
                </div>
                <div class="txt">
                    <div class="songName">
                        <p>黑月光 - 電視劇《長月燼明》片尾曲</p>
                    </div>
                    <div class="singer">
                        <p>張碧晨, 毛不易</p>
                    </div>
                </div>
            </div>
            <div class="song">
                <div class="pic">
                    <img src="https://i.kfs.io/album/global/236078225,0v1/fit/160x160.jpg" alt="">
                </div>
                <div class="txt">
                    <div class="songName">
                        <p>黑月光 - 電視劇《長月燼明》片尾曲</p>
                    </div>
                    <div class="singer">
                        <p>張碧晨, 毛不易</p>
                    </div>
                </div>
            </div>
            <div class="song">
                <div class="pic">
                    <img src="https://i.kfs.io/album/global/236078225,0v1/fit/160x160.jpg" alt="">
                </div>
                <div class="txt">
                    <div class="songName">
                        <p>黑月光 - 電視劇《長月燼明》片尾曲</p>
                    </div>
                    <div class="singer">
                        <p>張碧晨, 毛不易</p>
                    </div>
                </div>
            </div>
            <div class="song">
                <div class="pic">
                    <img src="https://i.kfs.io/album/global/236078225,0v1/fit/160x160.jpg" alt="">
                </div>
                <div class="txt">
                    <div class="songName">
                        <p>黑月光 - 電視劇《長月燼明》片尾曲</p>
                    </div>
                    <div class="singer">
                        <p>張碧晨, 毛不易</p>
                    </div>
                </div>
            </div>
            <div class="song">
                <div class="pic">
                    <img src="https://i.kfs.io/album/global/236078225,0v1/fit/160x160.jpg" alt="">
                </div>
                <div class="txt">
                    <div class="songName">
                        <p>黑月光 - 電視劇《長月燼明》片尾曲</p>
                    </div>
                    <div class="singer">
                        <p>張碧晨, 毛不易</p>
                    </div>
                </div>
            </div>
            <div class="song">
                <div class="pic">
                    <img src="https://i.kfs.io/album/global/236078225,0v1/fit/160x160.jpg" alt="">
                </div>
                <div class="txt">
                    <div class="songName">
                        <p>黑月光 - 電視劇《長月燼明》片尾曲</p>
                    </div>
                    <div class="singer">
                        <p>張碧晨, 毛不易</p>
                    </div>
                </div>
            </div>
            <div class="song">
                <div class="pic">
                    <img src="https://i.kfs.io/album/global/236078225,0v1/fit/160x160.jpg" alt="">
                </div>
                <div class="txt">
                    <div class="songName">
                        <p>黑月光 - 電視劇《長月燼明》片尾曲</p>
                    </div>
                    <div class="singer">
                        <p>張碧晨, 毛不易</p>
                    </div>
                </div>
            </div>
            <div class="song">
                <div class="pic">
                    <img src="https://i.kfs.io/album/global/236078225,0v1/fit/160x160.jpg" alt="">
                </div>
                <div class="txt">
                    <div class="songName">
                        <p>黑月光 - 電視劇《長月燼明》片尾曲</p>
                    </div>
                    <div class="singer">
                        <p>張碧晨, 毛不易</p>
                    </div>
                </div>
            </div>
            <div class="song">
                <div class="pic">
                    <img src="https://i.kfs.io/album/global/236078225,0v1/fit/160x160.jpg" alt="">
                </div>
                <div class="txt">
                    <div class="songName">
                        <p>黑月光 - 電視劇《長月燼明》片尾曲</p>
                    </div>
                    <div class="singer">
                        <p>張碧晨, 毛不易</p>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>
<style lang='scss' scoped>
.songWrap {
    width: 1200px;
    margin: auto;

    // border: 1px solid red;
    .title {
        margin: 20px 0;
    }

    .content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 50px;



        // grid-template-rows: repeat(2, 1fr);
        .song {
            // border: 1px solid red;
            display: flex;
            align-items: center;
            padding: 10px 0;
            border-bottom: 1px solid #ddd;

            &:hover {
                background-color: #E9F7FA;
            }

            .pic {
                margin-right: 10px;

                img {
                    height: 50px;
                    width: 50px;
                    vertical-align: bottom;
                }
            }

            .txt {
                .singer {

                    p {
                        color: #aaa;

                        &:hover {
                            text-decoration: underline;
                            // color: red;
                        }
                    }
                }
            }
        }
    }
}
</style>