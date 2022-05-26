<template>
</template>

<script>
export default {
  name: 'Productos-Vue',
  data() {
    return {
        arrayProductos : [
          {nombre: "Proteina Whey", descripcion:"Sabor de Chocolate/Vainilla/Fresa", img:"proteinas.jpeg", precio:"40€", cantidad: 0},
          {nombre: "Camiseta MYGYM", descripcion:"Tallas xs/s/m/l/xl", img:"camiseta.jpeg", precio:"15€", cantidad: 0},
          {nombre: "Creatina", descripcion:"Tamaño 1kg", img:"creatina.jpeg", precio:"40€", cantidad: 0},
          {nombre: "Straps", descripcion:"Tallas s/m/l/xl", img:"straps.jpeg", precio:"15€", cantidad: 0},
          {nombre: "Rodilleras", descripcion:"Tallas s/m/l/xl", img:"rodilleras.jpeg", precio:"20€", cantidad: 0},
          {nombre: "Guantes", descripcion:"Tallas s/m/l/xl", img:"guantes.jpeg", precio:"10€", cantidad: 0},
          {nombre: "Magnesio", descripcion:"Formato de 200ml", img:"magnesio.jpeg", precio:"5€", cantidad: 0},
          {nombre: "Shaker", descripcion:"Colores Rojo/Blanco/Gris", img:"shaker.jpeg", precio:"40 €", cantidad: 0},
          {nombre: "Muñequeras", descripcion:"Tallas s/m/l/xl", img:"muñequera.jpeg", precio:"40 €", cantidad: 0},
        ],
        activityType: ""
    }
  }
}
</script>

<style scoped lang="scss">
</style>