<template>
    <div class="containerPopUp d-flex justify-content-center alignitems-center">
        <div class="popUp flex-column">
            <img :src="getImgUrl(img)">  
            <h1 class="mt-4">{{name}}</h1>
            <p>{{bio}}</p>
            <h2 @click.stop="hidePopUp()">❌</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: "PopUp-Vue",
    props: {
        name: String,
        bio: String,
        img: String
    },
    methods : {
        getImgUrl(img) {
            return require('@/assets/Teachers/'+ img)
        },
        hidePopUp() {
            this.$emit("hidePopUp", "false");
        }
    }
}
</script>

<style scoped lang="scss">
.containerPopUp {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(255, 255, 255, 0.8);
    align-items: center;
}
.popUp {
    position: relative;
    box-sizing: border-box;
    padding: 50px 40px;
    width: 700px;
    height: 700px;
    margin: 0 20px 0 20px;
    background-color: rgb(255, 255, 255);
    border: 3px solid black;
    border-radius: 20px;
    display: flex;
    justify-content: start;
    align-items: center;
    overflow: auto;
    h2 {
        position: absolute;
        top: 10px;
        right: 10px;
    }
}
html, body{
    height: 99%;
    border: 1px solid red;
    overflow:hidden;
}  
</style>