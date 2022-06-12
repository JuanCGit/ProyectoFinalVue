<template>
  <div class="container mt-5">
    <!-- Realizado por Luis Pérez Hurtado y Lucas Ezequiel Gyori -->
    <h1 class="my-5">Vuestras <span class="mainColor">reseñas</span></h1>
    <div class="form-switch float-end text-success">
      <input type="checkbox" class="form-check-input" @click="esAdmin=!esAdmin"> Modo ADMIN
    </div>
    <br>
    <ul class="listaResenas">
      <!-- Bucle que recorre el array de reseñas, si hay elementos nuevos, los muestra -->
      <div v-for="valoracion in valoraciones" v-bind:key="valoracion.index" class="col">
        <li class="cards">
          <Valoracion :usuario="valoracion.usuario" :puntuacion="valoracion.puntos" :comentario="valoracion.comentario" :fecha="valoracion.fecha" :ID="valoracion.ID" /> 
          <div v-if="esAdmin">
            <button class="btn btn-outline-info" @click="editarValoracion(valoracion.ID)">Editar</button>
            <button class="btn btn-outline-danger" @click="eliminarValoracion(valoracion.ID)">Eliminar</button>
          </div>
        </li>
      </div>
    </ul>
    
    <button id="btnForm" class="btn btn-outline-danger border-0 border-3 border-start border-bottom m-3 border-danger mb-5" type="button" data-bs-toggle="offcanvas" data-bs-target="#form">
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
          <textarea  v-model="comentario" class="form-control mb-3" name="comentario" id="comentario" cols="15" rows="3" placeholder="Tu comentario aquí..."></textarea>
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
  import Valoracion from '@/components/Valoracion.vue';
  import Swal from 'sweetalert2';
  export default {
    
  name: "Valoraciones-Vue",
  data(){
      return {
        esAdmin:false,
        idActual: 3,
        valoraciones : [
          {ID:0, usuario:"Esteban Quito",puntos:10, comentario: "Excelente trato con el cliente, recomendable 10/10", fecha:"15/3/2022 13:45"},
          {ID:1, usuario:"Elsa Naoria", puntos:9, comentario: "Personal muy profesional, disponibilidad completa y muy buen clima", fecha:"21/4/2022 19:23"},
          {ID:2, usuario:"Armando Bronca", puntos:2, comentario: "Tardaron mucho en atenderme, los aseos no tenían jabón y el agua sale muy fría", fecha:"17/05/2022 12:31"},
        ],
        usuario:"",
        puntuacion: 5,
        comentario:"",
        fecha:"",
        ID: this.idActual
      }
    },
    components: {
      Valoracion
    },
    methods: {
      abrirLink(url) {
        window.open(url, "_blank");
      },
      crearValoracion() {
        const lista = this.valoraciones;
        let dia = new Date();
        let newValoracion = {
          usuario: this.usuario,
          comentario:this.comentario,
          fecha: dia.getDate() + "/" + (dia.getMonth()+1) + "/" + dia.getFullYear() + " " + dia.getHours() + ":" + dia.getMinutes(),
          puntos: this.puntuacion.valueOf(),
          ID: this.idActual
        };
        if (newValoracion.usuario == "") { newValoracion.usuario = "Anónimo"; }
        if (newValoracion.comentario == "") { newValoracion.comentario = "[Sin comentario]"; }
        lista.push(newValoracion);
        this.idActual++;
      },
      editarValoracion(id) {
        let valoracion = this.valoraciones[id];
        let nuevoComentario = prompt("Introduzca el nuevo comentario",valoracion.comentario);
        
        if(nuevoComentario==null || nuevoComentario==valoracion.comentario){
          this.popup("No se han realizado cambios","info");
        }
        else{
          valoracion.comentario = nuevoComentario;
          this.popup("Cambios realizados con exito","success");
        }
      },
      eliminarValoracion(id) {
        this.valoraciones.splice(id,1);
        for (let i = id; i < this.valoraciones.length; i++) {
          this.valoraciones[i].ID=i
        }
        this.popup("Comentario eliminado con éxito","success")
      },
      popup(message, status) {
            Swal.fire({
                customClass : {
                    title: 'swal2-title',
                    cancelButton: 'swal2-cancel',
                    confirmButton: 'swal2-confirm',
                    input: 'swal2-input'
                },
                icon: status,
                title: message,
                toast: true,
                position: 'bottom-end',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true
            })
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
  #nombre, textarea{
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: transparent;
    outline: 2px solid rgb(147, 70, 70);
  }
  
  form:focus-within label, form input:valid + .label {
    transform: translate(0, -30px) scale(.8);
  }
  #btnForm{
    border-radius: 15px;
  }
</style>