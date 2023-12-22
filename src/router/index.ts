import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LoginView from "../views/LoginView.vue";
import PersonnalGalleryView from "../views/PersonnalGalleryView.vue";
import PublicGalleryView from "../views/PublicGalleryView.vue";
import CartView from "../views/CartView.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/personnal-gallery",
    name: "personnal-gallery",
    component: PersonnalGalleryView,
  },
  {
    path: "/public-gallery",
    name: "public-gallery",
    component: PublicGalleryView,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
// import { useUser } from "@/store/User";
// import { storeToRefs } from "pinia";

// const store = useUser();
// const { loggedUsername, logged } = storeToRefs(store);
const logged = true;
router.beforeEach(async (to, from) => {
  // TODO : make a call to check log
  if (!logged && to.name !== "login") {
    return { name: "login" };
  }
});

export default router;
