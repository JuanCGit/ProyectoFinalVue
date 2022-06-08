<template>
  <div class="container mt-5">
    <ul class="listaResenas">
      <!-- Bucle que recorre el array de reseñas, si hay elementos nuevos, los muestra -->
      <div v-for="valoracion in reseñas" v-bind:key="valoracion.index" class="col">
        <li class="cards">
          <Valoraciones :user="valoracion.user" :puntuacion="valoracion.puntos" :comment="valoracion.comment" :fecha="valoracion.fecha"/> 
        </li> 
      </div>
    </ul>
    <button id="btnForm" class="btn btn-outline-danger border-0 border-3 border-start border-bottom m-3 border-danger" type="button" data-bs-toggle="offcanvas" data-bs-target="#form">
      ¡Cuéntanos tu experiencia!
    </button>
    <div class="offcanvas offcanvas-end" id="form">
      <form>
        <fieldset class="mx-3">
          <legend class="mt-3 mb-5">¿Que te pareció <span class="mainColor">MYGYM</span>?</legend>
          <div class="inputs my-2">
            <label for="nombre">Usuario</label>
            <input id="nombre" v-model="usuario" type="text" class="form-control" required>
          </div>
          
          <textarea  v-model="comentario" class="form-control mb-3" name="comentario" id="comment" cols="15" rows="3" placeholder="Tu comentario aquí..."></textarea>
          ☹️<input v-model="puntuacion" type="range" min="0" max="10">😁
        </fieldset>
        <div>
          <button type="button" @click="crearValoracion" class="btn btn-outline-secondary" data-bs-dismiss="offcanvas">Añadir</button>
        </div>
      </form>
    </div>

  </div>
</template>

<script>
  import Valoraciones from '@/components/Valoraciones.vue';
  export default {
    
  name: "Valoraciones-Vue",
  data(){
      return {
        reseñas : [
          {user:"Esteban Quito",puntos:10, comment: "Excelente trato con el cliente, recomendable 10/10", fecha:"15/3/2022 13:45"},
          {user:"Elsa Naoria", puntos:9, comment: "Personal muy profesional, disponibilidad completa y muy buen clima", fecha:"21/4/2022 19:23"},
          {user:"Armando Bronca", puntos:2, comment: "Tardaron mucho en atenderme, los aseos no tenían jabón y el agua sale muy fría", fecha:"17/05/2022 12:31"},
        ],
        usuario:"",
        puntuacion: 5,
        comentario:"",
        fecha:""          
      }
    },
    components: {
      Valoraciones
    },
    methods: {
      abrirLink(url) {
        window.open(url, "_blank");
      },
      crearValoracion() {
        const lista = this.reseñas;
        let dia = new Date();
        let newComment = {
          user: this.usuario,
          comment:this.comentario,
          fecha: dia.getDate() + "/" + (dia.getMonth()+1) + "/" + dia.getFullYear() + " " + dia.getHours() + ":" + dia.getMinutes(),
          puntos: this.puntuacion.valueOf()
        };
        if (newComment.user == "") { newComment.user = "Anónimo"; }
        if (newComment.comment == "") { newComment.comment = "[Sin comentario]"; }
        lista.push(newComment);
      }
    },
  };
</script>

<style scoped lang="scss">
  .listaResenas {
    list-style-type: none;
  }
  textarea {
    resize: none;
  }
  .cards {
    padding: 25px;
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0), 0 20px 70px rgba(0, 0, 0, 0.12);
    border-radius: 15px;
    margin-bottom: 50px;
  }
  .inputs{
    position: relative;
  }
  label {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(10px,10px);
    transform-origin: left;
    transition: transform .25s;
  }
  #nombre{
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: transparent;
    outline: 2px solid;
  }
  .inputs:focus-within label {
    transform: translate(0, -30px) scale(.8);

  }
  #btnForm{
    border-radius: 15px;
  }
</style>