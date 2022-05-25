<template>
  <div class="containerMerchandising">
    <h1 id="encabezado" class="encabezado" style="color:rgb(216, 30, 91); font-size: 40px; text-shadow: 1px 1px 2px black; border: solid black 10px;  border-radius: 75px; background-color: rgb(250, 169, 22);">Productos</h1>
        <div class="row">
            <div class="four columns">
                <div class="card">
                    <img src="/imgs/proteinas.jpeg" class="imagen-curso u-full-width">
                    <div class="info-card">
                        <h4 class="mainColor">Proteinas</h4>
                        <p>Sabor de Chocolate/Vainilla/Fresa</p>
                        <p class="precio">50€<span class="u-pull-right ">40€</span></p>
                        <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="1">Agregar Al Carrito</a>
                    </div>
                </div> <!--.card-->
            </div>
            <div class="four columns">
                    <div class="card">
                        <img src="/imgs/camiseta.jpeg" class="imagen-curso u-full-width">
                        <div class="info-card">
                            <h4>Camiseta MYGYM</h4>
                            <p>Tallas xs/s/m/l/xl</p>
                            <p class="precio">20€<span class="u-pull-right ">15€</span></p>
                            <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="2">Agregar Al Carrito</a>
                        </div>
                    </div>
            </div>
            <div class="four columns">
                  <div class="card">
                      <img src="/imgs/creatina.jpeg" class="imagen-curso u-full-width">
                      <div class="info-card">
                          <h4>Fosfato de Creatina</h4>
                          <p>Tamaño 1kg</p>
                          <p class="precio">40€<span class="u-pull-right ">30€</span></p>
                          <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="3">Agregar Al Carrito</a>
                      </div>
                  </div> <!--.card-->
            </div>

        </div> <!--.row-->
        <div class="row">
            <div class="four columns">
              <div class="card">
                  <img src="/imgs/straps.jpeg" class="imagen-curso u-full-width">
                  <div class="info-card">
                      <h4>Straps</h4>
                      <p>Tallas s/m/l/xl</p>
                      <p class="precio">20€<span class="u-pull-right ">15€</span></p>
                      <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="4">Agregar Al Carrito</a>
                  </div>
              </div> <!--.card-->
            </div>
            <div class="four columns">
              <div class="card">
                  <img src="/imgs/rodilleras.jpeg" class="imagen-curso u-full-width">
                  <div class="info-card">
                      <h4>Rodilleras</h4>
                      <p>Tallas s/m/l/xl</p>
                      <p class="precio">30€<span class="u-pull-right ">20€</span></p>
                      <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="5">Agregar Al Carrito</a>
                  </div>
              </div> <!--.card-->
            </div>
            <div class="four columns">
              <div class="card">
                  <img src="/imgs/guantes.jpeg" class="imagen-curso u-full-width">
                  <div class="info-card">
                      <h4>Guantes</h4>
                      <p>Tallas s/m/l/xl</p>
                      <p class="precio">15€<span class="u-pull-right ">10€</span></p>
                      <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="6">Agregar Al Carrito</a>
                  </div>
              </div> <!--.card-->
            </div>
        </div> <!--.row-->
        <div class="row">
            <div class="four columns">
                <div class="card">
                    <img src="/imgs/magnesio.jpeg" class="imagen-curso u-full-width">
                    <div class="info-card">
                        <h4>Magnesio</h4>
                        <p>Formato de 200ml</p>
                        <p class="precio">8€  <span class="u-pull-right ">5€</span></p>
                        <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="7">Agregar Al Carrito</a>
                    </div>
                </div> <!--.card-->
            </div>
            <div class="four columns">
              <div class="card">
                  <img src="/imgs/shaker.jpeg" class="imagen-curso u-full-width">
                  <div class="info-card">
                      <h4>Shaker</h4>
                      <p>Colores Rojo/Blanco/Gris</p>
                      
                      <p class="precio">$10€  <span class="u-pull-right ">6€</span></p>
                      <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="8">Agregar Al Carrito</a>
                  </div>
              </div> <!--.card-->
            </div>
        <div class="row">
          <div class="four columns">
              <div class="card">
                  <img src="/imgs/muñequera.jpeg" class="imagen-curso u-full-width">
                  <div class="info-card">
                      <h4>Muñequeras</h4>
                      <p>Tallas s/m/l/xl</p>
                    
                      <p class="precio">15€ <span class="u-pull-right ">10€</span></p>
                      <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="10">Agregar Al Carrito</a>
                  </div>
              </div> <!--.card-->
          </div>
          </div>
          </div>
  </div>
</template>

<script>
export default {
  name: 'Merchandising-Vue'
}
</script>

<style scoped>
.containerMerchandising {
  margin: 100px 0 100px 0;
}
</style>