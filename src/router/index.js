import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import SearchResults from "@/views/SearchResults.vue";
import PhotoDetails from "@/views/PhotoDetails.vue";
import NotFound from "@/views/NotFound.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/search/:tag",
    name: "searchResults",
    component: SearchResults,
    props: true,
  },
  {
    path: "/photo/:id/:secret", // view one picture
    name: "photoDetails",
    component: PhotoDetails,
  },

  //Not found
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
