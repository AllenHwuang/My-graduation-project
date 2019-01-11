<template>
	<div style="">
		<el-menu
		  :default-active="activeIndex2"
		  class="el-menu-demo"
		  mode="horizontal"
		  @select="handleSelect"
		  background-color="#545c64"
		  text-color="#fff"
		  router="true"
		  active-text-color="#ffd04b">
		  <el-menu-item index="/">首页</el-menu-item>
		  <el-submenu index="2">
			<template slot="title">数据分析</template>
			<el-menu-item index="/chart1">图表1</el-menu-item>
			<el-menu-item index="/chart2">图表2</el-menu-item>
			<!-- <el-menu-item index="2-3">选项3</el-menu-item> -->
			<el-submenu index="2-4">
			  <template slot="title">选项4</template>
			  <el-menu-item index="2-4-1">选项1</el-menu-item>
			  <el-menu-item index="2-4-2">选项2</el-menu-item>
			  <el-menu-item index="2-4-3">选项3</el-menu-item>
			</el-submenu>
		  </el-submenu>
		  <el-menu-item index="/">工作台</el-menu-item>
		  <el-menu-item index="/">工作台</el-menu-item>
		  <el-menu-item index="/">工作台</el-menu-item>
		  <el-menu-item index="/">工作台</el-menu-item>
		  <el-menu-item index="/">工作台</el-menu-item>
		  <el-menu-item index="3" disabled>消息中心</el-menu-item>
		  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
		</el-menu>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
	.el-menu-demo{
		width: 100%;
		/* height: 100px; */
		margin: 0 auto;
	}
</style>
