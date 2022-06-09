<template>
<div class="carro">
  <table id="lista-carrito" class="u-full-width">
                                       
                                            <tr>
                                                <td>{{imagen}}</td>
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
  name: 'Carro-Vue',
  data() {
    return {
        arrayCarro : [
        ],
        
    }
  },
  
  props: {
        imagen:Number,
        nombre: String,
        precio: String,
        cantidad:Number
    },
}




</script>