<template>
    <footer>
        <div class="containerFooter py-4 py-lg-5">
            <div class="myFooter">
                <div class="row justify-content-center">
                    <div class="col-sm-6 col-md-6 col-xl-4 text-center text-xl-center d-flex flex-column item">
                        <h3 class="fs-6 fw-bold mb-3 mt-3">MAPA DE LA WEB</h3>
                        <ul class="list-unstyled">
                            <li><a class="link-secondary" href="#">Ejemplo Página 1</a></li>
                            <li><a class="link-secondary" href="#">Ejemplo Página 2</a></li>
                            <li><a class="link-secondary" href="#">Ejemplo Página 3</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-6 col-xl-4 text-center text-xl-center d-flex flex-column item">
                        <h3 class="fs-6 fw-bold mb-3 mt-3">CONTACTO</h3>
                        <ul class="list-unstyled">
                            <li>96651342978</li>
                            <li>+34 693527810</li>
                            <li><a class="link-secondary" href="mailto:contacto@myGym.com">contacto@myGym.com</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-12 col-xl-4 text-center text-lg-center d-flex flex-column align-items-center order-first order-xl-last mt-3 item social">
                        <div class="fw-bold d-flex mb-2"><img src="@/assets/myGym.png" style="height: 25px;" /></div>
                        <p class="text-muted copyright">Be <span class="mainColor">stronger</span> than your excuses and you will get <span class="mainColor">everything</span> you expect.</p>
                    </div>
                </div>
                <hr/>
                <div class="d-flex justify-content-between align-items-center pt-3">
                    <p class="text-muted mb-0">Copyright myGym © 2022</p>
                    <ul class="list-inline mb-0">
                        <li class="list-inline-item"><a href="https://www.facebook.com/" target="_blank"><img width="25px" src="@/assets/Redes/facebook.png" alt="Icono Facebook"></a></li>
                        <li class="list-inline-item"><a href="https://www.instagram.com/" target="_blank"><img width="25px" src="@/assets/Redes/instagram.png" alt="Icono Instagram"></a></li>
                        <li class="list-inline-item"><a href="https://twitter.com/" target="_blank"><img width="25px" src="@/assets/Redes/twitter.png" alt="Icono Twitter"></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer-Vue"
}
</script>

<style scoped lang="scss">
.containerFooter {
    .myFooter {
        margin: 0 50px;
    }
    box-shadow: 5px -5px 10px rgb(204, 204, 204);
}
</style>
