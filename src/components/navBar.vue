<script setup>

</script>
<template>
    <div class="back">
        <ul>
            <li><router-link to="/">home</router-link></li>
            <li><router-link to="/song">song</router-link></li>
            <li><router-link to="/artist">artist</router-link></li>
            <li><router-link to="/album">album</router-link></li>
        </ul>
    </div>
</template>
<style lang='scss' scoped>
.back {
    background-color: #F5F5F5;

    ul {
        width: 1200px;
        margin: auto;
        border: none;
        display: flex;
        // justify-content: center;
        // align-items: center;

        li {

            // border: 2px solid #aaa;
            width: 100%;
            margin: 0 50px;
            text-align: center;

            a {
                display: block;
                line-height: 50px;
                text-decoration: none;
                color: #333;
            }

            :hover {
                background-color: #09CEF6;
            }

        }
    }

}
</style>