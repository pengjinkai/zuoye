import Vue from 'vue'
import VueRouter from 'vue-router'

//引入的页面


//使用路由  加载路由
Vue.use(VueRouter)

//定义路由表
const routes = [
  {
    path: '/',
    redirect:'/mymain' //重定向
  },
  {
  	  path:'/mymain',
  	  name:'mymain',
  	  //路由栏加载,性能更好
  	  component: () => import(/* webpackChunkName: "mymain" */ '../views/Mymain.vue')
  },
  {
  	  path:'/myfind',
  	  name:'myfind',
  	  //路由栏加载,性能更好
  	  component: () => import(/* webpackChunkName: "myfind" */ '../views/Myfind.vue'),
	  children:[
		  {path:'/matt', name:'matt', component: () => import(/* webpackChunkName: "matt" */ '../views/Matt.vue')},
		  {path:'/mreco', name:'mreco', component: () => import(/* webpackChunkName: "mreco" */ '../views/Mreco.vue')},
		  {path:'/mcity', name:'mcity', component: () => import(/* webpackChunkName: "mcity" */ '../views/Mcity.vue')}
	  ]
  },
  {
  	  path:'/mymessage',
  	  name:'mymessage',
  	  //路由栏加载,性能更好
  	  component: () => import(/* webpackChunkName: "mymessage" */ '../views/Mymessage.vue')
  },
  {
  	  path:'/myme',
  	  name:'myme',
  	  //路由栏加载,性能更好
  	  component: () => import(/* webpackChunkName: "myme" */ '../views/Myme.vue')
  },
  {
  	  path:'/myitem/:itemid',
  	  name:'myitem',
  	  //路由栏加载,性能更好
  	  component: () => import(/* webpackChunkName: "myitem" */ '../views/Myitem.vue')
  },
 {
  	  path:'/ess/:itemid',
  	  name:'ess',
  	  //路由栏加载,性能更好
  	  component: () => import(/* webpackChunkName: "ess" */ '../views/ess.vue')
  },
  {
   	  path:'/login',
   	  name:'login',
   	  //路由栏加载,性能更好
   	  component: () => import(/* webpackChunkName: "login" */ '../views/login.vue')
	  children:[
		     {path:'/zhuce', name:'zhuce', component: () => import(/* webpackChunkName: "zhuce" */ '../views/zhuce.vue')},
		     {path:'/denglu', name:'denglu', component: () => import(/* webpackChunkName: "denglu" */ '../views/denglu.vue')},
	  ]
   }
]

//创建路由对象
const router = new VueRouter({
  routes
})

//输出
export default router
