<template>
	<div class="charts">
		<div v-show="show" id="barGraph"></div>
	</div>
</template>

<script>
// 引入基本模板,按需加载
var echarts = require('echarts/lib/echarts');
/* // 引入柱状图
require('echarts/lib/chart/bar');
// 引入柱状图
require('echarts/lib/chart/pie');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title'); */
export default {
	name: "Charts",
	data () {
		return { show: true }
	 },
	mounted(){
		this.drawBar();
		//this.drawPie();
	 },
 methods:{
 drawBar(){
  // 基于dom，初始化echarts实例
  let barGraph = echarts.init(document.getElementById('barGraph'));
  // 绘制图表
  barGraph.setOption({
  title: {
   text: 'A股大盘上证指数图',
   left: 'center'
  },
  tooltip: {
   trigger: 'item',
   formatter: '{a} <br/>{b} : {c}'
  },
  legend: {
   left: 'center',
   data: ['本年', '上年'],
   bottom:0
  },
  xAxis: {
   type: 'category',
   name: 'x',
   splitLine: {show: false},
   data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
  },
  grid: {
   left: '1%',
   right: '2%',
   bottom: '8%',
   containLabel: true
  },
  yAxis: {
   type: 'category',
   name: 'y',
   splitLine: {show: true},
   data:['10%','20%','30%','40%','50%','60%','70%','80%','90%','100%']
  },
  series: [
   {
   name: '本年',
   type: 'line',
   data: [0.8, 0.98, 0.96, 0.27, 0.81, 0.47, 0.74, 0.23, .69, 0.25, 0.36, 0.56]
   },
   {
   name: '上年',
   type: 'line',
   data: [1, 0.2, 0.4, 0.8, 0.16, 0.32, 0.64, 1.28, 5.6, 0.25, 0.63, 0.65, 0.12]
   },
  ]
  })
 }
 }
}
</script>

<style>
	#barGraph{
		height:400px;
	}
	canvas{
		margin: 0 auto;
	}
	.charts{
		width: 600px;
		margin: 30px 40px 40px 60px;
	}
</style>
