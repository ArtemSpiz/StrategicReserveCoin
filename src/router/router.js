import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Tokenomics from "@/pages/Tokenomics.vue";
import Roadmap from "@/pages/Roadmap.vue";
import Whitepaper from "@/pages/Whitepaper.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/tokenomics", component: Tokenomics },
  { path: "/roadmap", component: Roadmap },
  { path: "/whitepaper", component: Whitepaper },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
