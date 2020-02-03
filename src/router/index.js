import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import index from '@/pages/index'
import user from '@/pages/user'
import organization from '@/pages/organization'
import active from '@/pages/active'
import shop from '@/pages/shop'
import change from '@/pages/change'
import check from '@/pages/check'
import num from '@/pages/num'
import message from '@/pages/message'
import system from '@/pages/system'
import older from '@/pages/older'
import volunteers from '@/pages/volunteers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      redirect:'/index/user',

      children:[
        {
          path: 'user',
          name: 'user',
          component: user,
        },

        {
          path: 'organization',
          name: 'organization',
          component: organization,
        },

        {
          path: 'active',
          name: 'active',
          component: active,
        },

        {
          path: 'shop',
          name: 'shop',
          component: shop,
        },

        {
          path: 'change',
          name: 'change',
          component: change,
        },

        {
          path: 'check',
          name: 'check',
          component: check,
        },

        {
          path: 'num',
          name: 'num',
          component: num,
        },

        {
          path: 'message',
          name: 'message',
          component: message,
        },

        {
          path: 'system',
          name: 'system',
          component: system,
        },

        {
          path: 'older',
          name: 'older',
          component: older,
        },

        {
          path: 'volunteers',
          name: 'volunteers',
          component: volunteers,
        },
      ]
    }
  ]
})
