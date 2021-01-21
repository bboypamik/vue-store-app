import Vue from "vue";
import VueRouter from "vue-router";
import Customer from "../views/Customer.vue";
import Product from "../views/Customer.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Customer",
    component: Customer,
  },
  {
    path: "/products",
    name: "products",
    component: Product,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
];

const router = new VueRouter({
  routes,
});

export default router;
