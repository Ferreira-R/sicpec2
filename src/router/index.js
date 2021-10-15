import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home.vue";
import Integrantes from "../views/Integrantes/Integrantes.vue";
import Agendamiento from "../views/Agendamiento/Agendamiento.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Integrantes",
    name: "Integrantes",
    component: Integrantes,
  },
  {
    path: "/Agendamiento",
    name: "Agendamiento",
    component: Agendamiento,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
