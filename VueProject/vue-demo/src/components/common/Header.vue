<template>
	<div style="margin: 0 auto; background-color: rgb(84, 92, 100)">
		<el-row>
			<el-col :span="3">&nbsp;</el-col>
			<el-col :span="18">
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
				<el-menu-item index="/analysis">数据分析</el-menu-item>
				<el-submenu index="2">
					<template slot="title">个人中心</template>
					<el-menu-item index="/...">身份信息</el-menu-item>
					<el-menu-item index="/...">投诉建议</el-menu-item>
					<el-menu-item index="/...">定制服务</el-menu-item>
				</el-submenu>
				<el-menu-item index="/">商务合作</el-menu-item>
				</el-menu>
			</el-col>
			<el-col :span="3"></el-col>
		</el-row>
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
