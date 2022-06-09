<template>
 <p></p>
</template>

<script>
export default {
  name: 'Productos-Vue',
  data() {
    return {
        arrayProductos : [
          {id:1, nombre: "Proteina Whey", descripcion:"Sabor de Chocolate/Vainilla/Fresa", img:"proteinas.jpeg", precio:"40€"},
          {id:2, nombre: "Creatina", descripcion:"Tamaño 1kg", img:"creatina.jpeg", precio:"40€"},
          {id:3, nombre: "Straps", descripcion:"Tallas s/m/l/xl", img:"straps.jpeg", precio:"15€"},
          {id:4, nombre: "Rodilleras", descripcion:"Tallas s/m/l/xl", img:"rodilleras.jpeg", precio:"20€"},
          {id:5, nombre: "Guantes", descripcion:"Tallas s/m/l/xl", img:"guantes.jpeg", precio:"10€"},
          {id:6, nombre: "Shaker", descripcion:"Colores Rojo/Blanco/Gris", img:"shaker.jpeg", precio:"40 €",},
        ],
    }
  },

 props: {
        id:Number,
        nombre: String,
        descripcion: String,
        img: String,
        precio: String
    },

}
</script>

<style scoped lang="scss">
</style>