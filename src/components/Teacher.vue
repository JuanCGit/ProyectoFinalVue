<template>
    <div class="teacher" @click="clicked='true'">
        <div class="d-flex flex-column justify-content-center align-items-center">
            <img :src="getImgUrl(img)">  
            <h1 class="mt-4">{{name}}</h1>
            <p>{{truncate(bio)}}</p>
        </div>
        <PopUp @hidePopUp="clicked = $event" v-if="clicked=='true'" :name="name" :bio="bio" :img="img"/>
    </div>
</template>

<script>
import PopUp from '@/components/PopUp.vue'

export default {
    name: "Teacher-Vue",
    data() {
        return {
            clicked: 'false'
        }
    },
    props: {
        name: String,
        bio: String,
        img: String
    },
    methods : {
        getImgUrl(img) {
            return require('@/assets/Teachers/'+ img)
        },
        truncate(input) {
            if (input.length > 100) {
                return input.substring(0, 100) + '...';
            }else {
                return input
            }
        },
        updateStatus() {
            this.clicked = 'false';
        }
    },
    components : {
        PopUp
    }
}
</script>

<style scoped>
 .teacher {
    padding: 25px;
    box-shadow: 0 30px 80px rgb(0 0 0 / 20%), 0 20px 70px rgb(0 0 0 / 20%);
    border-radius: 15px;
    margin-bottom: 50px;
    margin-left: 20px;
    height: 300px;
    cursor: pointer;
}
img {
    width: 100px;
    height: 100px;
}
</style>