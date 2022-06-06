<template>
    <div class="teacher" @click="clicked='true'">
        <div class="d-flex flex-column justify-content-center align-items-center">
            <img :src="getImgUrl(img)">  
            <h1 class="mt-4">{{user}}</h1>
            <p>{{truncate(comment)}}</p>
        </div>
        <PopUp @hidePopUp="clicked = $event" v-if="clicked=='true'" :user="user" :comment="comment" :fecha="fecha"/>
    </div>
</template>

<script>


export default {
    name: "Valoraciones-Vue",
    data() {
        return {
            clicked: 'false'
        }
    },
    props: {
        user: String,
        comment: String,
        fecha: String
    },
    methods : {
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
</style>