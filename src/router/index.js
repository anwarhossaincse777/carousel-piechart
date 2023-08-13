import { createRouter, createWebHistory } from 'vue-router'

const Home=()=>import('../views/HomeView.vue')
const About=()=>import('../views/AboutView.vue')
const Carousel=()=>import('../views/Carousel.vue')
const Chart=()=>import('../views/Chart.vue')
const NotFound=()=>import('../views/NotFoundView.vue')


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path:'/',
      name:'home',
      component:Home
    },
    {
      path:'/about',
      name:'about',
      component:About
    },

    {
      path:'/carousel',
      name:'carousel',
      component:Carousel
    },

    {
      path: '/chart',
      name: 'chart',
      component:Chart,
    },

    {
      path:'/:pathMatch(.*)*',
      name: 'notfound',
      component:NotFound,
    },
  ]
})

export default router
