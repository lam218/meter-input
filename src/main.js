import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import Arrows from "./components/Arrows.vue";
import Animations from './components/MoreAnimations.vue';
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter)

const routes = [
  {
    path: "/arrows",
    component: Arrows
  },
  {
    path: "/animations",
    component: Animations
  },
  { path: "/meter-reading", component: HelloWorld }
];
const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
