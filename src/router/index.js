import Vue from "vue";
import VueRouter from "vue-router";

import MainPage from "@/components/MainPage";
import Map from "@/components/MainPage/components/Map/Map.vue";

Vue.use(VueRouter);

let router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: MainPage,
      children: [
        {
          path: "/map",
          name: "map",
          component: Map
        }
      ]
    }
  ]
});

export default router;
