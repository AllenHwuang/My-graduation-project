import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios'
import qs from 'qs';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
import animate from 'animate.css';
import md5 from 'js-md5';
import App from './App.vue';
import Root from './pages/Root';
import Home from './pages/Home';
import Admin from './pages/Admin'
import AdminLogin from './pages/AdminLogin'
import Login from './pages/Login'
import Regist from './pages/regist'
import Analysis from './pages/Analysis';
import Profile from './pages/Profile'
import BasicInfo from './components/content/profile/BasicInfo'
import AlterPassword from './components/content/profile/AlterPassword'
import Billing from './components/content/profile/Billing'
import Service from './components/content/profile/Service'
import Addfunds from './components/content/profile/billings/Addfunds'
import CreditCard from './components/content/profile/billings/payments/CreditCard'
import Paypal from './components/content/profile/billings/payments/Paypal'
import Bitcoin from './components/content/profile/billings/payments/Bitcoin'
import Alipay from './components/content/profile/billings/payments/Alipay'
import WeChatPay from './components/content/profile/billings/payments/WechatPay'
import GiftCode from './components/content/profile/billings/payments/GiftCode'
import Limit from './components/content/profile/billings/Limit'
import History from './components/content/profile/billings/History'
import SpecializedPlot from './pages/SpecializedPlot.vue';
import echarts from 'echarts';
// import Chart1 from './components/content/Chart1';

library.add(fas, far, fab)
// Vue.component('font-awesome-icon', FontAwesomeIcon)
// Vue.component('font-awesome-layers', FontAwesomeLayers)
// Vue.component('font-awesome-layers-text', FontAwesomeLayersText)
Vue.prototype.$echarts = echarts
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
Vue.use(iView);
Vue.use(VueRouter)
Vue.use(require('vue-wechat-title'));
Vue.prototype.$ajax = axios;
Vue.prototype.$md5 = md5;
Vue.prototype.$qs = qs;
Vue.prototype.notify = function (){
  this.$notify.info({
    title: '消息',
    message: '您有一条未读消息'
  });
}
Vue.use(VueAxios, axios)
// Vue.use(new VueSocketIO({
//     debug: true,
//     connection: 'ws://127.0.0.1:5000/test_conn',
//     // options: { path: "/test_conn/" } //Optional options
// }))


// 配置路由
const router = new VueRouter({
	routes:[
    {
      path: '/login',
      component: Login,
      name: 'login',
      meta: {
        title: '登录',
        requireAuth: true,
      },
    },
    {
      path: '/regist',
      component: Regist,
      name: 'regist'
    },
    {
      path: '/adminLogin',
      component: AdminLogin,
      name: 'adminLogin',
    },
    {
      path: '/admin',
      component: Admin,
      name: 'Admin',
    },
    {
      path: '/root',
      component: Root,
      name: 'root',
      children: [
        {
          path: 'home',
          component: Home,
          name: 'home',
        },
        {
          path: 'analysis',
          component: Analysis,
          name: 'analysis',
        },
        {
          path: 'profile',
          component: Profile,
          name: 'profile',
          children:[
            {                      //二级路由
              path:'basicinfo',            //二级的默认路由（此path指向上一级，即path:'/about'）
              name:'basicinfo',
              component:BasicInfo
            },
            {                      //二级路由
              path:'alterpassword',            //二级的默认路由（此path指向上一级，即path:'/about'）
              name:'alterpassword',
              component:AlterPassword
            },
            {                      //二级路由
              path:'billing',            //二级的默认路由（此path指向上一级，即path:'/about'）
              name: 'billing',
              component:Billing,
              children:[
                {
                  path: 'addfunds',
                  name: 'addfunds',
                  component: Addfunds,
                  children:[
                    {
                      path: 'creditcard',
                      name: 'creditcard',
                      component: CreditCard,
                    },
                    {
                      path: 'paypal',
                      name: 'paypal',
                      component: Paypal,
                    },
                    {
                      path: 'bitcoin',
                      name: 'bitcoin',
                      component: Bitcoin,
                    },
                    {
                      path: 'alipay',
                      name: 'alipay',
                      component: Alipay,
                    },
                    {
                      path: 'wechatpay',
                      name: 'wechatpay',
                      component: WeChatPay,
                    },
                    {
                      path: 'giftcode',
                      name: 'giftcode',
                      component: GiftCode,
                    },
                  ]
                },
                {
                  path: 'limit',
                  name: 'limit',
                  component: Limit,
                },
                {
                  path: 'history',
                  name: 'history',
                  component: History,
                },
              ]
            },
            {
              path:'service',
              name: 'service',
              component:Service,
            }
          ]
        },
      ]
    },
		// {
		//   path:"/login",
    //   component:Login,
    //   name:'login',
    // },
    // {
    //   path: '/regist',
    //   component: Regist,
    //   name: 'regist',
    // },
    // {
    //   path: '/home',
    //   component: Home,
    //   name: 'home',
    // },
		// {
		//   path:"/analysis",
    //   component:Analysis,
    //   name:'analysis',
    // },
		{
		  path:"/analysis/showgraph",
      component:SpecializedPlot,
      name:'specializedplot',
    },
		// {
		// 	path:"/profile",
    //   name:"profile",
		// 	component:Profile,
		// 	children:[
		// 		{                      //二级路由
		// 			path:'basicinfo',            //二级的默认路由（此path指向上一级，即path:'/about'）
		// 			name:'basicinfo',
    //       component:BasicInfo
		// 		},
		// 		{                      //二级路由
		// 			path:'alterpassword',            //二级的默认路由（此path指向上一级，即path:'/about'）
		// 			name:'alterpassword',
    //       component:AlterPassword
		// 		},
		// 		{                      //二级路由
		// 			path:'billing',            //二级的默认路由（此path指向上一级，即path:'/about'）
		// 			name: 'billing',
		// 			component:Billing,
		// 			children:[
		// 				{
		// 					path: 'addfunds',
		// 					name: 'addfunds',
		// 					component: Addfunds,
		// 					children:[
		// 						{
		// 							path: 'creditcard',
		// 							name: 'creditcard',
		// 							component: CreditCard,
		// 						},
		// 						{
		// 							path: 'paypal',
		// 							name: 'paypal',
		// 							component: Paypal,
		// 						},
		// 						{
		// 							path: 'bitcoin',
		// 							name: 'bitcoin',
		// 							component: Bitcoin,
		// 						},
		// 						{
		// 							path: 'alipay',
		// 							name: 'alipay',
		// 							component: Alipay,
		// 						},
		// 						{
		// 							path: 'wechatpay',
		// 							name: 'wechatpay',
		// 							component: WeChatPay,
		// 						},
		// 						{
		// 							path: 'giftcode',
		// 							name: 'giftcode',
		// 							component: GiftCode,
		// 						},
		// 					]
		// 				},
		// 				{
		// 					path: 'limit',
		// 					name: 'limit',
		// 					component: Limit,
		// 				},
		// 				{
		// 					path: 'history',
		// 					name: 'history',
		// 					component: History,
		// 				},
		// 			]
		// 		},
		// 		{
		// 			path:'service',
		// 			name: 'service',
		// 			component:Service,
		// 		}
		// 	]
		// },
	],
	mode:'history',
})

new Vue({
	router,
  el: '#app',
  render: h => h(App)
});

/* 
 The Vue build version to load with the `import` command
 (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
	components: { App }
}) 
*/
