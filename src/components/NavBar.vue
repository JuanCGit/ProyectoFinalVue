<template>
    <nav class="navbar navbar-light navbar-expand-md">
    <div class="container-fluid">
        <router-link class="nav-link active" :class="$route.name == 'Home' ? 'active-nav' : ''" to="/">
            <imagen src="@/assets/LogoSmall2.png" style="width: 40px;"/>
        </router-link>
        <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-1">
            <span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span>
        </button>
        <div id="navcol-1" class="collapse navbar-collapse">
            <ul class="navbar-nav">
                <li class="nav-item"><router-link class="nav-link active" :class="$route.name == 'Home' ? 'active-nav' : ''" to="/"><h4>Home</h4></router-link></li>
                <li class="nav-item"><router-link class="nav-link active" :class="$route.name == 'Contact' ? 'active-nav' : ''" to="/contact"><h4>Contact</h4></router-link></li>
                <li class="nav-item"><router-link class="nav-link active" :class="$route.name == 'Horario' ? 'active-nav' : ''" to="/horario"><h4>Horario</h4></router-link></li>
                <li class="nav-item"><router-link class="nav-link active" :class="$route.name == 'Teachers' ? 'active-nav' : ''" to="/teachers"><h4>Teachers</h4></router-link></li>
                <li class="nav-item"><router-link class="nav-link active" :class="$route.name == 'Inscripcion' ? 'active-nav' : ''" to="/inscripcion"><h4>Inscripcion</h4></router-link></li>
                <li class="nav-item"><router-link class="nav-link active" :class="$route.name == 'About' ? 'active-nav' : ''" to="/about"><h4>About</h4></router-link></li>
                <li class="nav-item"><router-link class="nav-link active" :class="$route.name == 'Tienda' ? 'active-nav' : ''" to="/tienda"><h4>Tienda</h4></router-link></li>
               
               
                    <li class="submenu">
                            <img src="@/assets/carro2.png" id="imagen-carrito">
                            <div id="carrito">
                                    <table id="lista-carrito" class="u-full-width">
                                        <thead>
                                            <tr>
                                                <th>Imagen</th>
                                                <th>Nombre</th>
                                                <th>Precio</th>
                                                <th>Cantidad</th>
                                                <th></th>
                                            </tr>
                                            <tr>
                                                <div v-for="carro in arrayProductos" v-bind:key="carro.index">
                                                    <Carro :imagen="carro.imagen" 
                                                    :nombre="carro.nombre" :precio="carro.precio" :cantidad="carro.cantidad"  />
                                                </div>
                                              </tr> 
                                        </thead>
                                        <tbody></tbody>
                                    </table>

                                    <a href="#" id="vaciar-carrito" class="button u-full-width">Vaciar Carrito</a>
                            </div>
                    </li>
               
                
            </ul>
        </div>
    </div>
    </nav>
</template>

<script>
  
import Carro from '@/components/Carro.vue'

export default {
  name: "NavBar-Vue",
  data(){
      return{
          arrayProductosSeleccionados : [
          {id:1, nombre: "", descripcion:"Sabor de Chocolate/Vainilla/Fresa", imagen:"proteinas.jpeg", precio:"40€"},
          {id:2, nombre: "", descripcion:"Tamaño 1kg", imagen:"creatina.jpeg", precio:"40€"},
          {id:3, nombre: "", descripcion:"Tallas s/m/l/xl", imagen:"straps.jpeg", precio:"15€"},
          {id:4, nombre: "", descripcion:"Tallas s/m/l/xl", imagen:"rodilleras.jpeg", precio:"20€"},
          {id:5, nombre: "", descripcion:"Tallas s/m/l/xl", imagen:"guantes.jpeg", precio:"10€"},
          {id:6, nombre: "", descripcion:"Colores Rojo/Blanco/Gris", imagen:"shaker.jpeg", precio:"40 €",},
        ], 
         arrayProductos : [
          {id:1, nombre: "Proteina Whey", descripcion:"Sabor de Chocolate/Vainilla/Fresa", imagen:"proteinas.jpeg", precio:"40€"},
          {id:2, nombre: "Creatina", descripcion:"Tamaño 1kg", imagen:"creatina.jpeg", precio:"40€"},
          {id:3, nombre: "Straps", descripcion:"Tallas s/m/l/xl", imagen:"straps.jpeg", precio:"15€"},
          {id:4, nombre: "Rodilleras", descripcion:"Tallas s/m/l/xl", imagen:"rodilleras.jpeg", precio:"20€"},
          {id:5, nombre: "Guantes", descripcion:"Tallas s/m/l/xl", imagen:"guantes.jpeg", precio:"10€"},
          {id:6, nombre: "Shaker", descripcion:"Colores Rojo/Blanco/Gris", imagen:"shaker.jpeg", precio:"40 €",},
        ], 
      }
      
      
      },


  

  components:{
    Carro

  },

  methods:{



}
  }
</script>

<style scoped lang="scss">
    h4 {
        margin: 0px;
        &:hover{
            color: #e9172b;
        }
    }

    .navbar {
        box-shadow: 5px 5px 10px rgb(204, 204, 204);
    }
    li {
        .active-nav {
            color: #e9172b !important;
        }
    }
    .submenu {
    position: relative;
}
    .submenu #carrito{
    display: none;
}

.submenu:hover #carrito{
    display: block;
    position: absolute;
    right:0;

    top:100%;
    z-index: 1;
    background-color: white;
    padding: 20px;
    min-height: 400px;
    min-width: 300px;
}
</style>