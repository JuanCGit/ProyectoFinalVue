<template>
  <div class="fondo">
    <div class="containerHome">
      <div id="carousel-1" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
          <div class="carousel-item">
            <img class="w-100 d-block" src="@/assets/Activities/CalisteniaHome.jpg" alt="Slide Image" style="height: auto;max-height: 93vh;" />
            <div class="carousel-caption d-block">
              <h2>Prueba</h2>
              <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, assumenda.</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img class="w-100 d-block" src="@/assets/Activities/RunningHome.jpg" alt="Slide Image" style="height: auto;max-height: 93vh;" />
            <div class="carousel-caption d-block">
              <h2>Prueba</h2>
              <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, assumenda.</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img class="w-100 d-block" src="@/assets/Activities/SpinningHome.jpg" alt="Slide Image" style="height: auto;max-height: 93vh;" />
            <div class="carousel-caption d-block">
              <h2>Prueba</h2>
              <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, assumenda.</h5>
            </div>
          </div>
          <div class="carousel-item active">
            <img class="w-100 d-block" src="@/assets/Activities/WeightHome.jpg" alt="Slide Image" style="height: auto;max-height: 93vh;" />
            <div class="carousel-caption d-block">
              <h2>Prueba</h2>
              <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, assumenda.</h5>
            </div>
          </div>
      </div>
      <div>
        <a class="carousel-control-prev" href="#carousel-1" role="button" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></a><a class="carousel-control-next" href="#carousel-1" role="button" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></a></div>
        <ol class="carousel-indicators">
            <li data-bs-target="#carousel-1" data-bs-slide-to="0"></li>
            <li data-bs-target="#carousel-1" data-bs-slide-to="1"></li>
            <li data-bs-target="#carousel-1" data-bs-slide-to="2"></li>
            <li class="active" data-bs-target="#carousel-1" data-bs-slide-to="3"></li>
        </ol>
      </div>
      <h2 class="mt-5 text-decoration-underline fw-bold" style="color: white;">
        Dónde nos podéis encontrar
      </h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12323.768974467639!2d-0.3683367!3d39.4480374!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x24b62f56a4f87943!2sCIP%20FP%20Ausi%C3%A0s%20March%20en%20Valencia!5e0!3m2!1ses!2ses!4v1652719886878!5m2!1ses!2ses"
        width="100%" height="400px"  allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade" class="mt-5">
      </iframe>
      <h2 class="mt-5 text-decoration-underline fw-bold" style="color: white;">
        Transporte y comunicaciones
      </h2>
      <div class="row d-xl-flex justify-content-xl-center mt-5 mb-5 rowTarjeta gx-0">
        <div class="col-md-6 col-lg-4 col-xxl-3" style="text-align: left;">
            <div class="tarjeta">
                <h1 style="text-align: center">En AUTOBÚS EMT</h1>
                <ul>
                  <li>Las líneas 7, 13, 99 y N7 (nocturno) de la EMT a 2 minutos del centro.</li>
                  <li>Las líneas 6, 8 y 64 de la EMT a 5 minutos del centro.</li>
                  <li>Las líneas 18 de la EMT a 9 minutos del centro.</li>
                  <li>Las líneas 14 de la EMT a 12 minutos del centro</li>
                  <a href="https://geoportal.emtvalencia.es/visor?lang=va">
                    <li>Otras líneas accede aquí.</li>
                  </a>
                </ul>
            </div>
        </div>
        <div class="col-md-6 col-lg-4 col-xxl-3" style="text-align: left;">
            <div class="tarjeta">
                <h1 style="text-align: center">En AUTOBÚS MetroBus</h1>
                <ul>
                  <li>181 AUVACA desde Picassent (Alcàsser, Silla, Beniparrell, Albal, Catarroja, Massanassa, Alfafar-Barrio, Orba, Benetússer, Alfafar, València):</li>
                  <li>184 AUVACA desde Silla (Beniparrell, Albal, Catarroja, Massanassa, Alfafar-Barrio Orba, Benetússer, Alfafar, València):</li>
                </ul>
            </div>
        </div>
        <div class="col-md-6 col-lg-4 col-xxl-3" style="text-align: left;">
            <div class="tarjeta">
                <h1 style="text-align: center">En TREN RENFE Cercanías</h1>
                <ul>
                <li>Parada Valencia-Fuente de San Luís (Valencia-F.S.L.) a 11 minutos a pie del centro.</li>
                <li>Líneas: C-3 con paradas en València Nord, València FSL, València-Sant Isidre, Xirivella, Aldaia,
                      Ribarroja
                      del Turia, Cheste, Chiva, Buñol, Requena y Utiel.
                </li><li>Frecuencia: 30 minutos aprox.</li>
                </ul>
            </div>
        </div>
        <div class="col-md-6 col-lg-4 col-xxl-3" style="text-align: left;">
            <div class="tarjeta">
                <h1 style="text-align: center">En AUTOBÚS EMT</h1>
                <ul>
                  <li>Las líneas 7, 13, 99 y N7 (nocturno) de la EMT a 2 minutos del centro.</li>
                  <li>Las líneas 6, 8 y 64 de la EMT a 5 minutos del centro.</li>
                  <li>Las líneas 18 de la EMT a 9 minutos del centro.</li>
                  <li>Las líneas 14 de la EMT a 12 minutos del centro</li>
                  <a href="https://geoportal.emtvalencia.es/visor?lang=va">
                    <li>Otras líneas accede aquí.</li>
                  </a>
                </ul>
            </div>
        </div>
    </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Home-Vue'
}
</script>

<style scoped>
.containerHome {
  margin: 0 0 100px 0;
}
.fondo{
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(251,22,22,1) 0%, rgba(255,0,204,1) 100%);
  margin-bottom: 0px;
}
.tarjeta{
  background-color: white;
  padding: 30px 10px;
  border-radius: 25px;
  margin: 0 15px 40px 15px;
}
.rowTarjeta{
  padding: 0 30px;
}
</style>