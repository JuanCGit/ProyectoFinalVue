import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/profesores',
    name: 'Profesores',
    // route level code-splitting
    // this generates a separate chunk (profesores.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "profesores" */ '../views/Profesores.vue')
  },
  {
    path: '/tienda',
    name: 'Tienda',
    // route level code-splitting
    // this generates a separate chunk (tienda.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "tienda" */ '../views/Tienda.vue')
  },
  {
    path: '/horario',
    name: 'Horario',
    // route level code-splitting
    // this generates a separate chunk (horario.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "horario" */ '../views/Horario.vue')
  },
  {
    path: '/inscripcion',
    name: 'Inscripcion',
    // route level code-splitting
    // this generates a separate chunk (inscripcion.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "inscripcion" */ '../views/Inscripcion.vue')
  },
  {
    path: '/valoraciones',
    name: 'Valoraciones',
    // route level code-splitting
    // this generates a separate chunk (valoraciones.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "valoraciones" */ '../views/Valoraciones.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router
