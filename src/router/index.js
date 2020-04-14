import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/films',
    name: 'films',
    component: () => import( '../views/Films.vue'),
    children:[
      {
        path:'nowPlaying',
        component:()=>import('../views/NowPlaying')
      },
      {
        path:'comingSoon',
        component:()=>import('../views/ComingSoon')
      }
    ],
    redirect:"/films/nowPlaying"
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/About.vue')
  },
  {
    path:'/',
    redirect:"/films"
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import( '../views/Detail')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
