import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../components/Main.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Main },
  { path: '/login', component: Login },
  { path: '/register', component: Register }
]


const router = new VueRouter({
  mode: 'history',
  routes
})

export default router;