<template>
    <div class="valoracion">
        <div class="d-flex flex-column justify-content-center align-items-center">
            
            <h1 class="mt-4">@{{user}} - {{puntuacion}}/10</h1>
            <p>{{truncate(comment)}}</p>
            <p class="small">{{fecha}}</p>

        </div>
        <PopUp @hidePopUp="clicked = $event" v-if="clicked=='true'" :user="user" :comment="comment" :fecha="fecha"/>
    </div>
</template>

<script>
import PopUp from '@/components/PopUp.vue'

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
        fecha: String,
        puntuacion: Number
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