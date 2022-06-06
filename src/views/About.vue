<template>
  <div class="container about">
    <div class="miembros">
      <h1 class="mb-4 display-4">Nosotros</h1>

      <div @click="abrirLink('https://github.com/JuanCGit')" class="row row-cols-1 row-cols-md-2 cards">
        <div class="col-xxl-2 d-flex flex-column align-items-center justify-content-center"><img src="@/assets/fotoJuan.png" alt="Juan Casanova Gago"></div>
        <div class="col-xxl-10 d-flex flex-column justify-content-center text-lg-start">
            <h3>Juan Casanova</h3>
            <p>Desde pequeño tengo afán a la informática y todo lo que envuelve el tema. Conrespecto a mi motivación personal, la curiosidad y el deseo constante de aprender cosas nuevas me impulsan a desarrollarme constantemente.</p>
        </div>
      </div>

      <div @click="abrirLink('https://github.com/LucasEG1')" class="row row-cols-1 row-cols-md-2 cards">
        <div class="col-xxl-2 d-flex flex-column align-items-center justify-content-center"><img src="@/assets/fotoLucas.png" alt="Lucas Ezequiel Gyori"></div>
        <div class="col-xxl-10 d-flex flex-column justify-content-center text-lg-start">
            <h3>Lucas Gyori</h3>
            <p>Tras mucho tiempo sin saber qué quería estudiar, me decanté lo que más me gusta: la programación. Gracias a esta decisión me dedico a algo útil, interesante y que me permite tener tiempo libre para desconectar.</p>
        </div>
      </div>

      <div @click="abrirLink('https://github.com/RPC26')" class="row row-cols-1 row-cols-md-2 cards">
        <div class="col-xxl-2 d-flex flex-column align-items-center justify-content-center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png" alt="Rubén Pérez Castelló"></div>
        <div class="col-xxl-10 d-flex flex-column justify-content-center text-lg-start">
            <h3>Rubén Pérez Castelló</h3>
            <p>¡Hola! Soy Rubén y soy estudiante de Desarrollo de aplicaciones web en el Centro Público de Formación Profesional Ausiàs March de Valencia.</p>
        </div>
      </div>

      <div @click="abrirLink('https://github.com/lperezhurtado')" class="row row-cols-1 row-cols-md-2 cards">
        <div class="col-xxl-2 d-flex flex-column align-items-center justify-content-center"><img src="@/assets/fotoLuis.png" alt="Luis Pérez Hurtado"></div>
        <div class="col-xxl-10 d-flex flex-column justify-content-center tezt-lg-start">
            <h3>Luis Perez Hurtado</h3>
            <p>Soy Luis, futuro desarrollador web. Me gusta mucho la programación, una de mis pasiones y pienso dedicarme a ello. Aprender cosas nuevas no es un reto para mí, así que ¡a por todas!</p>
        </div>
      </div>
    </div>
    <!-- N U E S T R O  P R O Y E C T O -->
    <div class="proyecto">
      <h1 class="mb-4 display-4">Nuestro proyecto</h1>
      
      <div class="row row-cols-1 row-cols-md-2 cards" @click="abrirLink('https://github.com/JuanCGit/ProyectoFinalVue')">
        <div class="col-xxl-2 d-flex flex-column align-items-center justify-content-center"><img src="@/assets/myGym.png"/></div>
        <div class="col-xxl-10 d-flex flex-column justify-content-center">
            <h2 class="mainColor">My Gym</h2>
            <p>My Gym es un gimnasio que despertará tu pasión por el ejercicio, el cuidado propio y la salud física.</p>
            <p>Inscríbete ya y comienza a disfrutar de tus ventajas, como clases de entrenamiento personal con profesionales licenciados en
              ciencias del deporte y la salud, grandes instalaciones con variedad de material y un clima espectacular que te mantendrá
              motivado y así hacer de ti una persona más sana.
            </p>
        </div>
      </div>
    </div>
    <div class="tecnologias">
      <h1 class="mb-4 display-4">Tecnologías utilizadas</h1>
      
      <div  @click="abrirLink('https://vuejs.org/')" class="row row-cols-1 row-cols-md-2 cards">
        <div class="col-xxl-2 d-flex flex-column align-items-center justify-content-center"><img src="@/assets/logoVue.png"/></div>
        <div class="col-xxl-10 d-flex flex-column justify-content-center">
            <h2 style="color: #42b883">Vue.js</h2>
            <p>Vue.js es un framework de JavaScript de código abierto para la construcción de interfaces de usuario y aplicaciones de una sola página. Fue creado por Evan You, y es mantenido por él y por el resto de los miembros activos del equipo central que provienen de diversas empresas como Netlify y Netguru.</p>
        </div>
      </div>
      <div  @click="abrirLink('https://nodejs.org/es/')" class="row row-cols-1 row-cols-md-2 cards">
        <div class="col-xxl-2 d-flex flex-column align-items-center justify-content-center"><img src="@/assets/logoNodeJS.png"/></div>
        <div class="col-xxl-10 d-flex flex-column justify-content-center">
            <h2 style="color: #8ac400">Node.js</h2>
            <p>Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript, asíncrono, con E/S de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google.</p>
        </div>
      </div>
      <div @click="abrirLink('https://getbootstrap.com/')" class="row row-cols-1 row-cols-md-2 cards">
        <div class="col-xxl-2 d-flex flex-column align-items-center justify-content-center"><img src="@/assets/logoBootstrap.png"/></div>
        <div class="col-xxl-10 d-flex flex-column justify-content-center">
            <h2 style="color: #7952b3">Bootstrap 5</h2>
            <p>Bootstrap 5 es la versión más reciente de Bootstrap, el framework más popular para el desarrollo front-end responsivo.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About-Vue',
  methods: { 
      abrirLink(url) {
          window.open(url, '_blank');
      }
  }
}
</script>

<style scoped lang="scss">
.about {
  padding-top: 50px;
  padding-bottom: 50px;

  p {
  font-size: larger;
  }
  img {
    width: 100%;
  }
}
.tecnologias, .proyecto {
  h2 {
    font-weight: bold;
  }
}
.cards {
    padding: 25px;
    box-shadow: 0 30px 80px rgba(0,0,0,0), 0 20px 70px rgba(0,0,0,0.12);
    border-radius: 15px;
    margin-bottom: 50px;
    cursor: help;
}
</style>