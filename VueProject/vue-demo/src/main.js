import Vue from 'vue';
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import Home from './pages/Home'
import Analysis from './pages/Analysis'
import SpecializedPlot from './pages/SpecializedPlot.vue'
import echarts from 'echarts'
import Chart1 from './components/content/Chart1'
Vue.prototype.$echarts = echarts
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
Vue.use(VueRouter)
// 配置路由
const router = new VueRouter({
	routes:[
		{path:"/", component:Home},
		{path:"/analysis", component:Analysis},
		{path:"/analysis/showgraph", component:SpecializedPlot}
	],
	mode:'history'
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