import { createWebHistory, createRouter } from "vue-router";
import './index.css'
import HomePage from './components/HomePage.vue'
import GrowthCalculator from './components/calculators/GrowthCalculator.vue'
import LifetimeCalculator from './components/calculators/LifetimeCalculator.vue'


const routes = [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/growth-calculator',
      name: 'growthCalculator',
      component: GrowthCalculator
    },
    {
      path: '/lifetime-calculator',
      name: 'lifetimeCalculator',
      component: LifetimeCalculator
    }
  ];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
