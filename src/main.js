import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import Arrows from "./components/Arrows.vue";
import Animations from "./components/MoreAnimations.vue";
import MeterInputV2 from "./components/MeterInputV2.vue";
import KeyActions from "./components/KeyActions.vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  {
    path: "/arrows",
    component: Arrows
  },
  {
    path: "/animations",
    component: Animations
  },
  { path: "/meter-reading", component: HelloWorld },
  { path: "/meter-reading-v2", component: MeterInputV2 },
  { path: "/key-actions", component: KeyActions }
];
const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
