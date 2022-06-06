<template>
  <div class="container mt-5">
    <ul class="listaResenas text-start">
        <li class="cards">
          <h5>Usuario 1</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, tenetur! Quisquam voluptate similique quaerat aliquid non nulla vel odio sapiente, cum eaque rerum dolor assumenda deserunt nesciunt tempore expedita fugit?</p>
          <div class="small">FechaHora</div>
        </li>
      <li class="cards">Reseña 2</li>
      <li class="cards">Reseña 3</li>
      <li class="cards">Reseña 4</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Valoraciones-Vue",
  methods: {
    abrirLink(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped lang="scss">
.listaResenas {
  list-style-type: none;
}

.cards {
  padding: 25px;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0), 0 20px 70px rgba(0, 0, 0, 0.12);
  border-radius: 15px;
  margin-bottom: 50px;
}
</style>