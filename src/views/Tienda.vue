<template>
 <div class="submenu">
    <!-- Realizado por Rubén Pérez Castelló (90%) y Luis Pérez Hurtado (10%) -->
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
                                                <td>   
                                                    <div v-for="producto in arrayCarro" v-bind:key="producto.index">
                                                      <Productos :img="producto.img"/>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div v-for="producto in arrayCarro" v-bind:key="producto.index">
                                                      <Productos :nombre="producto.nombre"/>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div v-for="producto in arrayCarro" v-bind:key="producto.index">
                                                      <Productos :precio="producto.precio"/>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div v-for="producto in arrayCarro" v-bind:key="producto.index">
                                                      <Productos :cantidad="producto.cantidad"/>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div v-for="producto in arrayCarro" v-bind:key="producto.index">
                                                      <button class="btn btn-danger" type="button" style="width: 80%;" id="quitar-producto" @click="quitarProducto(producto.id)">Quitar producto</button>
                                                    </div>
                                                </td>
                                              </tr> 
                                        </thead>
                                        <tbody></tbody>
                                    </table>

                                    <button class="btn btn-danger" type="button" style="width: 80%;" id="vaciar-carrito" @click="vaciarCarrito()">Vaciar Carrito</button>
                            </div>
                    </div>

  <div class="containerTienda">
    <h1>Nuestros <span class="mainColor">Productos</span></h1>
    <div class="row gx-0 d-flex justify-content-center">
      <div class="col-md-6 col-lg-4 col-xl-3 columna" >
          <div class="producto d-flex">
              <img src="@/assets/Productos/proteinas.png" alt="">
              <h2>Proteinas</h2>
              <h6>Sabor chocolate/vainilla</h6>
              <h4>50€</h4>
              <button class="btn btn-primary" type="button" style="width: 80%;" id="1" @click="añadirProducto(0)">Comprar</button>
          </div>
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3 columna" >
          <div class="producto d-flex">
              <img src="@/assets/Productos/rodilleras.png" alt="">
              <h2>Rodilleras</h2>
              <h6>Talla s/m/l/xl</h6>
              <h4>20€</h4>
              <button class="btn btn-primary" type="button" style="width: 80%;" id="2" @click="añadirProducto(1)">Comprar</button>
          </div>
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3 columna" >
          <div class="producto d-flex">
              <img src="@/assets/Productos/creatina.png" alt="">
              <h2>Creatina</h2>
              <h6>Formato de 1kg</h6>
              <h4>30€</h4>
              <button class="btn btn-primary" type="button" style="width: 80%;" id="3" @click="añadirProducto(2)">Comprar</button>
          </div>
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3 columna" >
          <div class="producto d-flex">
              <img src="@/assets/Productos/guantes.png" alt="">
              <h2>Guantes</h2>
              <h6>Talla s/m/l/xl</h6>
              <h4>12€</h4>
              <button class="btn btn-primary" type="button" style="width: 80%;" id="4"  @click="añadirProducto(3)">Comprar</button>
          </div>
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3 columna" >
          <div class="producto d-flex">
              <img src="@/assets/Productos/straps.png" alt="">
              <h2>Straps</h2>
              <h6>Talla m/l/xl</h6>
              <h4>15€</h4>
              <button class="btn btn-primary" type="button" style="width: 80%;" id="5"  @click="añadirProducto(4)">Comprar</button>
          </div>
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3 columna">
          <div class="producto d-flex">
              <img src="@/assets/Productos/shaker.png" alt="">
              <h2>Shaker</h2>
              <h6>Color negro/rojo</h6>
              <h4>10€</h4>
              <button class="btn btn-primary" type="button" style="width: 80%;" id="6"  @click="añadirProducto(5)">Comprar</button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Productos from "@/components/Productos.vue"
export default {
  name: 'Merchandising-Vue',
  data(){
    return{
       arrayProductos : [
          {id:0, nombre: "Proteina Whey", descripcion:"Sabor de Chocolate/Vainilla/Fresa", img:"proteinas.png", precio:"40€", cantidad:0},
          {id:1, nombre: "Rodilleras", descripcion:"Tallas s/m/l/xl", img:"rodilleras.png", precio:"20€", cantidad:0 },
          {id:2, nombre: "Creatina", descripcion:"Tamaño 1kg", img:"creatina.png", precio:"40€", cantidad:0},
          {id:3, nombre: "Guantes", descripcion:"Tallas s/m/l/xl", img:"guantes.png", precio:"10€", cantidad:0},
          {id:4, nombre: "Straps", descripcion:"Tallas s/m/l/xl", img:"straps.png", precio:"15€", cantidad:0},
          {id:5, nombre: "Shaker", descripcion:"Colores Rojo/Blanco/Gris", img:"shaker.png", precio:"40 €", cantidad:0},
        ],

        arrayCarro : [
        ],
    }

  },

  components:{
    Productos
  },

  methods:{

    añadirProducto(id){
      let producto = this.arrayProductos[id]
      let newProducto={
        id: producto.id,
        nombre: producto.nombre,
        descripcion: producto.descripcion,
        img: producto.img,
        precio: producto.precio,
        cantidad:producto.cantidad
        }

        if(this.arrayCarro.length==0){
          this.arrayCarro.push(newProducto)
          newProducto.cantidad++
        }
        else {
          if(this.arrayCarro.length != 0 ) {
            let encontrado = false;
            for(let i=0; i < this.arrayCarro.length && encontrado == false; i++) {
              if(this.arrayCarro[i].id==newProducto.id)
              {
                this.arrayCarro[i].cantidad++
                encontrado = true
              }
            }

            if (encontrado == false) {
              this.arrayCarro.push(newProducto)
              newProducto.cantidad++
            }                       
          }
        }
    },

    quitarProducto(id) {
      if(this.arrayCarro.length != 0 ) {
            let encontrado = false
            for(let i=0; i < this.arrayCarro.length && encontrado == false; i++) {
              if(this.arrayCarro[i].id==id)
              {
                encontrado = true

                if (this.arrayCarro[i].cantidad > 1) {
                  this.arrayCarro[i].cantidad--
                }
                else {
                  this.arrayCarro.splice(i, 1);
                }
              }
            }                     
          }
    },

    vaciarCarrito() {
      if(this.arrayCarro.length != 0 ) {
        this.arrayCarro = []
      }
    }
  }
}
</script>

<style scoped>
.containerTienda {
  margin: 100px 0;
}
.producto {
    padding: 50px;
    box-shadow: 0 30px 80px rgb(0 0 0 / 20%), 0 20px 70px rgb(0 0 0 / 20%);
    border-radius: 15px;
    cursor: pointer;
    flex-direction: column;
    align-content: center;
    justify-content: center;
}
.columna{
  padding: 30px;
}
button {
  align-self: center;
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

    top:0%;
    z-index: 1;
    background-color: white;
    padding: 20px;
    min-height: 400px;
    min-width: 300px;
}

</style>