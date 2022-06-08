<template>
    <div class="valoracion">
        <div class="d-flex flex-column justify-content-center align-items-md-start">
            
            <h1 class="mt-4">@{{user}} - {{puntuacion}}/10</h1>
            <p id="comentario">"{{truncate(comment)}}"</p>
            <p class="small">{{fecha}}</p>

        </div>
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
       
    }
}
</script>

<style scoped>
#comentario {
    font-style: italic;
    text-overflow: clip;
}
</style>