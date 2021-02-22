import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    }
  ]
})
