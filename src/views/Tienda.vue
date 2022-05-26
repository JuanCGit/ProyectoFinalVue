<template>
  <div class="containerTienda">
    <h1 class="mainColor">Nuestros Productos</h1>
    <div class="row gx-0 d-flex justify-content-center">
      <div class="col-md-6 col-lg-4 col-xl-3 columna">
          <div class="producto d-flex">
              <img src="@/assets/Productos/proteinas.png" alt="">
              <h2>Proteinas</h2>
              <h6>Heading</h6>
              <h4>50€</h4><button class="btn btn-primary" type="button" style="width: 80%;">Button</button>
          </div>
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3 columna">
          <div class="producto d-flex">
              <img src="@/assets/Productos/rodilleras.png" alt="">
              <h2>Rodilleras</h2>
              <h6>Heading</h6>
              <h4>50€</h4><button class="btn btn-primary" type="button" style="width: 80%;">Button</button>
          </div>
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3 columna">
          <div class="producto d-flex">
              <img src="@/assets/Productos/creatina.png" alt="">
              <h2>Creatina</h2>
              <h6>Heading</h6>
              <h4>50€</h4><button class="btn btn-primary" type="button" style="width: 80%;">Button</button>
          </div>
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3 columna">
          <div class="producto d-flex">
              <img src="@/assets/Productos/guantes.png" alt="">
              <h2>Guantes</h2>
              <h6>Heading</h6>
              <h4>50€</h4><button class="btn btn-primary" type="button" style="width: 80%;">Button</button>
          </div>
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3 columna">
          <div class="producto d-flex">
              <img src="@/assets/Productos/straps.png" alt="">
              <h2>Straps</h2>
              <h6>Heading</h6>
              <h4>50€</h4><button class="btn btn-primary" type="button" style="width: 80%;">Button</button>
          </div>
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3 columna">
          <div class="producto d-flex">
              <img src="@/assets/Productos/shaker.png" alt="">
              <h2>Shaker</h2>
              <h6>Heading</h6>
              <h4>50€</h4><button class="btn btn-primary" type="button" style="width: 80%;">Button</button>
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

</style>