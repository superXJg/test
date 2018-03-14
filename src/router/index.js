import Vue from 'vue'
import Router from 'vue-router'
import Pickerdemo from 'components/pickerdemo'

Vue.use(Router)

export default new Router({
  routes: [
      {
        path: '/picker',
        component: Pickerdemo
      }
  ]
})
