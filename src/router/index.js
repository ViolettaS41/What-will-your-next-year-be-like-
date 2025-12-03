import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/view/HomeView.vue";
import CardRombView from "@/view/CardRombView.vue";
import CardBlackHeartView from "@/view/CardBlackHeartView.vue";
import CardHeartView from "@/view/CardHeartView.vue";
import CardClubsView from "@/view/CardClubsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/diamonds",
      component: CardRombView,
    },
    {
      path: "/spades",
      component: CardBlackHeartView,
    },
    {
      path: "/hearts",
      component: CardHeartView,
    },
    {
      path: "/clubs",
      component: CardClubsView,
    },
  ],
});

export default router;
