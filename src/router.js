import { createRouter, createWebHistory } from "vue-router";


export default  createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "home",
      path: "/",
      component: import("@/pages/Index.vue"),
      meta: { title: "Home", requiresAuth: false },
    },
    {
      name: "product",
      path: "/product",
      component: import("@/pages/Products.vue"),
      meta: { title: "Product", requiresAuth: false },
    },
    {
      path: "/home",
      redirect: "/",
    },
    //not found 404
    {
      name: "404",
      path: "/:pathMatch(.*)*",
      component: import("@/pages/404.vue"),
    },
    {
      name: "basket",
      path: "/basket",
      component: import("@/pages/Basket.vue"),
      meta: { title: "Basket", requiresAuth: false },
    },
    {
      name: "country",
      path: "/country",
      component: import("@/pages/Country.vue"),
      meta: { title: "Country", requiresAuth: false },
    },
    {
      name: "detail",
      path: "/detail/:id",
      component: import("@/pages/country-detail/DetailCountry.vue"),
      meta: { title: "Detail" },
    },
    {
      name: "random-user",
      path: "/random-user",
      component: import("@/pages/RandomUser.vue"),
      meta: { title: "random-user", requiresAuth: false },
    },
    {
      name: "weather",
      path: "/weather",
      component: import("@/pages/Weather.vue"),
      meta: { title: "Weather", requiresAuth: false },
    },
    {
      name: "movies",
      path: "/movies",
      component: import("@/pages/movies/IndexMovies.vue"),
      meta: { title: "movies", requiresAuth: false },
    },
    {
      name: "detail-movies",
      path: "/movies/:id",
      component: import("@/pages/movies/detail/DetailMovie.vue"),
      meta: { title: "movies-detail", requiresAuth: false },
    },
    {
      name: "fav-movies",
      path: "/fav-movies",
      component: import("@/pages/movies/FavMovies.vue"),
      meta: { title: "fav-movies", requiresAuth: false },
    },
    {
      name: "logout",
      path: "/logout",
      component: import("@/pages/CreateAccount.vue"),
      meta: { title: "create-account", requiresAuth: false },
    },
    {
      name: "login",
      path: "/login",
      component: import("@/pages/Login.vue"),
      meta: { title: "Login", requiresAuth: false },
    },
    {
      name: "dashboard",
      path: "/dashboard",
      component: import("@/pages/dashboard/DashboardPanel.vue"),
      meta: { title: "Dashboard", requiresAuth: true },
      children: [
        {
          name: "home-dashboard",
          path: "/dashboard/home",
          component: import("@/pages/dashboard/child/Home.vue"),
        },
        {
          name: "message-dashboard",
          path: "/dashboard/message",
          component: import("@/pages/dashboard/child/Message.vue"),
        },
        {
          name: "chart-dashboard",
          path: "/dashboard/chart",
          component: import("@/pages/dashboard/child/Chart.vue"),
        },
        {
          name: "setting-dashboard",
          path: "/dashboard/setting",
          component: import("@/pages/dashboard/child/Setting.vue"),
        },
      ],
    },
  ],
});

