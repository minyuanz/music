<script setup>
import { ref, onMounted } from "vue";

const fetchData = () => {
    const url = 'https://api.kkbox.com/v1.1/search?q=楊丞琳&type=artist&territory=TW&offset=0&limit=50'
    const token = 'Bearer FoiFt3FuVrdZWEF8Plr_Zw=='

    fetch(url, {
        headers: {
            'Authorization': token
        }
    })
        .then(res => res.json())
        .then(res => {
            console.log(res);
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
    <div class="about">
        <h1>This is an about page</h1>
        <h1>titile</h1>
    </div>
</template>

<style>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>
