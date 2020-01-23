import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import store from "../store/index"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/account",
    name: "account",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Account.vue")
  },
  {
    path: "/bib/:id",
    name: "bib",
    component: () => import("../views/Bib.vue")
  },
  {
    path: "/colleges/",
    name: "colleges",
    component: () => import("../views/Colleges.vue")
  }
];



const router = new VueRouter({
  mode: "hash",
  // base: process.env.BASE_URL,
  base: "/",
  routes
});

router.beforeEach((to, from, next) => {
  if (!store.state.user.loggedIn && to.path !== "/login") next('/login')
  else next()
})

export default router;
