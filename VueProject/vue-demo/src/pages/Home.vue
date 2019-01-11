<template>
	<div class="mainDiv">
		<el-row>
			<el-col :span="3"><p>&nbsp;</p></el-col>
			<el-col :span="18">
				<Echarts/>
			</el-col>
			<el-col :span="3"></el-col>
		</el-row>
		<el-row>
			<el-col :span="3"><p>&nbsp;</p></el-col>
			<el-col :span="18">
				<NewsModule/>
			</el-col>
			<el-col :span="3"></el-col>
		</el-row>
		
	</div>
</template>

<script type="text/javascript">
	import Echarts from '../components/content/Chart1.vue'
	import NewsModule from '../components/content/NewsModule'
	import Carousel from '../components/content/Carousel.vue'
	export default{
		name:'app',
		components:{
			Echarts, NewsModule, Carousel
		}
	}
</script>

<style>
	.mainDiv{
		background: #EAE4E8;
	}
</style>
