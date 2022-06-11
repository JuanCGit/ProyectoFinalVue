<template>
 <div class="producto">
  <table id="lista-carrito" class="u-full-width">
                                       
                                            <tr>
                                                <td>{{img}}</td>
                                                <td>{{nombre}}</td>
                                                <td>{{precio}}</td>
                                                <td>{{cantidad}}</td>
                                                <td></td>
                                            </tr>
                                        
 </table>
</div>
</template>

<script>
export default {
  name: 'Productos-Vue',
  data() {
    return {
        arrayProductos : [
         {id:1, nombre: "Proteina Whey", descripcion:"Sabor de Chocolate/Vainilla/Fresa", img:"proteinas.png", precio:"40€", cantidad:0},
          {id:2, nombre: "Rodilleras", descripcion:"Tallas s/m/l/xl", img:"rodilleras.png", precio:"20€", cantidad:0 },
          {id:3, nombre: "Creatina", descripcion:"Tamaño 1kg", img:"creatina.png", precio:"40€", cantidad:0},
          {id:4, nombre: "Guantes", descripcion:"Tallas s/m/l/xl", img:"guantes.png", precio:"10€", cantidad:0},
          {id:5, nombre: "Straps", descripcion:"Tallas s/m/l/xl", img:"straps.png", precio:"15€", cantidad:0},
          {id:6, nombre: "Shaker", descripcion:"Colores Rojo/Blanco/Gris", img:"shaker.png", precio:"40 €", cantidad:0},
        ],
    }
  },

 props: {
        id:Number,
        nombre: String,
        descripcion: String,
        img: String,
        precio: String,
        cantidad:Number,
        boton: HTMLElement
        
    },

}
</script>

<style scoped lang="scss">
</style>