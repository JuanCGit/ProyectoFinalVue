<template>
    <nav class="navbar navbar-light navbar-expand-md">
    <div class="container-fluid">
        <router-link class="nav-link active" :class="$route.name == 'Home' ? 'active-nav' : ''" to="/">
            <img src="@/assets/LogoSmall2.png" style="width: 40px;"/>
        </router-link>
        <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-1">
            <span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span>
        </button>
        <div id="navcol-1" class="collapse navbar-collapse">
            <ul class="navbar-nav">
                <li class="nav-item"><router-link class="nav-link active" :class="$route.name == 'Home' ? 'active-nav' : ''" to="/"><h4>Home</h4></router-link></li>
                <li class="nav-item"><router-link class="nav-link active" :class="$route.name == 'Contact' ? 'active-nav' : ''" to="/contact"><h4>Contact</h4></router-link></li>
                <li class="nav-item"><router-link class="nav-link active" :class="$route.name == 'Merchandising' ? 'active-nav' : ''" to="/merchandising"><h4>Merchandising</h4></router-link></li>
                <li class="nav-item"><router-link class="nav-link active" :class="$route.name == 'Teachers' ? 'active-nav' : ''" to="/teachers"><h4>Teachers</h4></router-link></li>
                <li class="nav-item"><router-link class="nav-link active" :class="$route.name == 'About' ? 'active-nav' : ''" to="/about"><h4>About</h4></router-link></li>
            </ul>
        </div>
    </div>
    </nav>
</template>

<script>
    export default {
        name: "NavBar-Vue"
    }
</script>

<style scoped lang="scss">
    h4 {
        margin: 0px;
        &:hover{
            color: #e9172b;
        }
    }
    .navbar {
        box-shadow: 5px 5px 10px rgb(204, 204, 204);
    }
    li {
        .active-nav {
            color: #e9172b !important;
        }
    }
    
</style>