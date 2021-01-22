import Vue from "vue";
import VueRouter from "vue-router";
import Customer from "../views/Customer.vue";
import Product from "../views/Customer.vue";
import AddCustomer from "../components/AddCustomr.vue";
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
  },
  {
    path: "/add-customer",
    name: "AddCustomer",
    component: AddCustomer,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
