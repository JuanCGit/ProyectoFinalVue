<template>
  <div class="fondo">
    <!-- Realizado por Juan Casanova Gago con la colaboración de Rubén Pérez Castelló -->
    <div class="containerHome">
      <div id="carousel-1" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item">
            <img
              class="w-100 d-block"
              src="@/assets/Activities/CalisteniaHome.jpg"
              alt="Slide Image"
            />
            <div class="carousel-caption d-block">
              <h2>Crossfit</h2>
              <h5 class="subtitulo">
                El Crossfit es una práctica deportiva que nació en California en el año 2001.
              </h5>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="w-100 d-block"
              src="@/assets/Activities/RunningHome.jpg"
              alt="Slide Image"
            />
            <div class="carousel-caption d-block">
              <h2>Running</h2>
              <h5 class="subtitulo">
                Running es una palabra inglesa que se refiere a la actividad de correr.
              </h5>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="w-100 d-block"
              src="@/assets/Activities/SpinningHome.jpg"
              alt="Slide Image"
            />
            <div class="carousel-caption d-block">
              <h2>Spinning</h2>
              <h5 class="subtitulo">
                Spinning es un ejercicio aeróbico, que se ha convertido en una de las actividades más demandadas.
              </h5>
            </div>
          </div>
          <div class="carousel-item active">
            <img
              class="w-100 d-block"
              src="@/assets/Activities/WeightHome.jpg"
              alt="Slide Image"
            />
            <div class="carousel-caption d-block">
              <h2>Halterofilia</h2>
              <h5 class="subtitulo">
                La halterofilia consiste en el levantamiento del máximo peso posible en una barra.
              </h5>
            </div>
          </div>
        </div>
        <div>
          <a class="carousel-control-prev" href="#carousel-1" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carousel-1" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </a>
        </div>
        <ol class="carousel-indicators">
          <li data-bs-target="#carousel-1" data-bs-slide-to="0"></li>
          <li data-bs-target="#carousel-1" data-bs-slide-to="1"></li>
          <li data-bs-target="#carousel-1" data-bs-slide-to="2"></li>
          <li
            class="active"
            data-bs-target="#carousel-1"
            data-bs-slide-to="3"
          ></li>
        </ol>
      </div>
      <h2 class="mt-5 text-decoration-underline fw-bold" style="color: white">
        Dónde nos podéis encontrar
      </h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12323.768974467639!2d-0.3683367!3d39.4480374!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x24b62f56a4f87943!2sCIP%20FP%20Ausi%C3%A0s%20March%20en%20Valencia!5e0!3m2!1ses!2ses!4v1652719886878!5m2!1ses!2ses"
        width="100%"
        height="400px"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="mt-5"
      >
      </iframe>
      <h2 class="mt-5 text-decoration-underline fw-bold" style="color: white">
        Transporte y comunicaciones
      </h2>
      <div class="row d-xl-flex justify-content-xl-center mt-5 mb-5 rowTarjeta gx-0">
        <div class="col-md-6 col-lg-4 col-xxl-3">
          <div class="tarjeta">
            <h2 class="mainColor">Autobús EMT</h2>
            <ul>
              <li>
                Las líneas 7, 13, 99 y N7 (nocturno) de la EMT a 2 minutos del
                centro.
              </li>
              <li>Las líneas 6, 8 y 64 de la EMT a 5 minutos del centro.</li>
              <li>Las líneas 18 de la EMT a 9 minutos del centro.</li>
              <li>Las líneas 14 de la EMT a 12 minutos del centro</li>
            </ul>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 col-xxl-3">
          <div class="tarjeta">
            <h2 class="mainColor">Autobús MetroBus</h2>
            <ul>
              <li>
                181 AUVACA desde Picassent (Alcàsser, Silla, Beniparrell, Albal,
                Catarroja, Massanassa, Alfafar-Barrio, Orba, Benetússer,
                Alfafar, València):
              </li>
              <li>
                184 AUVACA desde Silla (Beniparrell, Albal, Catarroja,
                Massanassa, Alfafar-Barrio Orba, Benetússer, Alfafar, València):
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 col-xxl-3">
          <div class="tarjeta">
            <h2 class="mainColor">Renfe Cercanías</h2>
            <ul>
              <li>
                Parada Valencia-Fuente de San Luís (Valencia-F.S.L.) a 11
                minutos a pie del centro.
              </li>
              <li>
                Líneas: C-3 con paradas en València Nord, València FSL,
                València-Sant Isidre, Xirivella, Aldaia, Ribarroja del Turia,
                Cheste, Chiva, Buñol, Requena y Utiel.
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 col-xxl-3">
          <div class="tarjeta">
            <h2 class="mainColor">Valenbici</h2>
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
                nostrum.
              </li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing.</li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur.
              </li>
              <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
            </ul>
          </div>
        </div>
      </div>
      <h2 class="mt-5 text-decoration-underline fw-bold" style="color: white">
        Seervicios Incluidos
      </h2>
      <div class="row d-xl-flex justify-content-xl-center my-5 rowTarjeta gx-0">
        <div class="col-md-6 col-lg-4 col-xxl-3">
          <div class="tarjeta">
            <h2 class="mainColor">Vestuarios</h2>
            <h5>Vestuarios, Duchas y Taquillas</h5>
            <p>Todos los centros disponen de vestuarios con taquillas gratuitas, así como zona de duchas. Adicionalmente puedes alquilar una taquillas de uso privado (consultar precio en el centro). </p>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 col-xxl-3">
          <div class="tarjeta">
            <h2 class="mainColor">Tabla</h2>
            <h5>Tabla de Entrenamiento</h5>
            <p>Incluimos gratis una tabla de entrenamiento a corde a tus objetivos. Nuestros monitores de sala te guiarán sobre el uso de las máquinas y material del centro para facilitarte la adaptación. </p>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 col-xxl-3">
          <div class="tarjeta">
            <h2 class="mainColor">Salas</h2>
            <h5>Salas y Material de Entrenamiento</h5>
            <p>Salas y Material de Entrenamiento. Disfruta de las salas de fitness y musculación y de todo el material de entrenamiento en cada centro. Contarás con todo lo que necesites para realizar tus entrenamientos.</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 col-xxl-3">
          <div class="tarjeta">
            <h2 class="mainColor">Biometría</h2>
            <h5>Acceso Seguro con Biometría</h5>
            <p>Acceso Seguro con Biometría. Nuestros centros cuentan con acceso mediante huella dactilar. Olvídate de llevar tarjeta o pulsera, tu acceso estará garantizado para utilizar todos los centros.</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 col-xxl-3">
          <div class="tarjeta">
            <h2 class="mainColor">Aforo</h2>
            <h5>Aforo Monumental</h5>
            <p>Los centros <span class="mainColor">myGym</span> son tan grandes que no tendrás problemas para entrenar ni para acceder a las clases dirigidas. Reserva tu plaza y disfruta de nuestras amplias salas.</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 col-xxl-3">
          <div class="tarjeta">
            <h2 class="mainColor">Personal</h2>
            <h5>Instructores Experimentados</h5>
            <p>Nuestros instructores de actividasdes dirigidas están formados y te ofrecerán la mejor experiencia, además de conseguir resultados lo pasarás increíblemente bien.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home-Vue",
};
</script>

<style scoped>
img{
  height: auto; 
  max-height: 93vh
}
ul{
  text-align: left;
}
.carousel {
  border-bottom: 4px solid white;
}
iframe {
  border-top: 4px solid white;
  border-bottom: 4px solid white;
}
.containerHome {
  margin: 0 0 -45px 0;
  text-align: center;
}
.fondo {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(251, 22, 22, 1) 0%,
    rgba(255, 0, 204, 1) 100%
  );
  margin-bottom: 0px;
}
.tarjeta{ 
  background-color: rgba(255, 255, 255, 0.8);
  padding: 30px;
  border-radius: 25px;
  margin: 0 15px 40px 15px;
  display: flex;
  flex-direction: column ;
  justify-content: center;
  min-height: 370px;
}
.rowTarjeta {
  padding: 0 30px;
}
@media (max-width: 450px) {
  .subtitulo {
    display: none;
  }
}
</style>