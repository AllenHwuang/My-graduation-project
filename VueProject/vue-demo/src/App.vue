<!-- 1.模版: HTML结构 -->
<template>
  <div id="app">
		<div style="">
			<el-row>
				<Header></Header>
			</el-row>
		</div>
		<!-- <el-row class="routerViewDiv">
			<el-col :span="3">
				<h1>&nbsp;</h1>
				<div class="galleryDiv">
					<Gallery></Gallery>
				</div>
			</el-col>
			<el-col :span="18">
				<div>
				<transition  name="slide-fade">
					<router-view></router-view>
				</transition>
				</div>
			</el-col>
		</el-row> -->
		<transition  name="slide-fade">
			<router-view></router-view>
		</transition>
		<Footer/></Footer>
	</div>
</template>

<!-- 行为: 处理逻辑 -->
<script>
	import Negative from './components/Negative'
	import Header from './components/common/Header'
	import Footer from './components/common/Footer'
	import Gallery from './components/common/Gallery'
  export default{
		name:'app',
		components:{
			Negative, Header, Footer,Gallery
		}
  }
</script>

<!-- 样式: CSS -->
<style>
body {
	font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
}
.galleryDiv{
	position: fixed;
	margin: 80px 0 auto 0;
}
.routerViewDiv{
	/* background-image: url(./assets/background.JPG); */
}
.slide-fade{
  position: absolute;left:0;right: 0;
}
.slide-fade-enter-active {
  transition: all 1.2s ease;
}
.slide-fade-leave-active {

  transition: all 1.2s cubic-bezier(2.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
{
  left:0;right: 0;
  transform: translateX(50px);
  opacity: 0;
}
</style>
