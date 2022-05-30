<template>
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
    <div><a class="carousel-control-prev" href="#carousel-1" role="button" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></a><a class="carousel-control-next" href="#carousel-1" role="button" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></a></div>
    <ol class="carousel-indicators">
        <li data-bs-target="#carousel-1" data-bs-slide-to="0"></li>
        <li data-bs-target="#carousel-1" data-bs-slide-to="1"></li>
        <li data-bs-target="#carousel-1" data-bs-slide-to="2"></li>
        <li class="active" data-bs-target="#carousel-1" data-bs-slide-to="3"></li>
    </ol>
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
</style>