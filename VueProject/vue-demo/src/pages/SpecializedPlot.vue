<template>
	<div class="mainDiv">
		<el-row>
			<el-col :span="12">
				<DatasetsGraph/>
			</el-col>
			<el-col :span="12">
				<div style="margin: 10px 30px 5px 5px;">
					<ScatterDatasets/>
				</div>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="24">
				<div style="height: 400px;">
					<LineGradient/>
				</div>
			</el-col>
		</el-row>
		<!-- <el-row>
			<el-col :span="12">
				<div style="margin: 220px 40px 100px 100px;">
				<p style="line-height: 28px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
				 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
				 Ut enim ad minim veniam, quis nostrud exercitation ullamco 
				 laboris nisi ut aliquip ex ea commodo consequat. 
				 Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. 
					Excepteur sint occaecat cupidatat non proident, 
					sunt in culpa qui officia deserunt mollit anim id</p>
				</div>
			</el-col>
			<el-col :span="12">
				<div style="margin: 330px 70px 100px 70px;">
				<p style="line-height: 28px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
				 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
				 Ut enim ad minim veniam, quis nostrud exercitation ullamco 
				 laboris nisi ut aliquip ex ea commodo consequat. 
				 Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. 
					Excepteur sint occaecat cupidatat non proident, 
					sunt in culpa qui officia deserunt mollit anim id</p>
				</div>
			</el-col>
		</el-row> -->
	</div>
</template>

<script>
	import DatasetsGraph from '../components/content/analysis/DatasetsGraph.vue'
	import ScatterDatasets from '../components/content/analysis/ScatterDatasets.vue'
	import LineGradient from '../components/content/analysis/LineGradient.vue'
	export default {
		data() {
			return {
				
			};
		},
		components:{
			DatasetsGraph, ScatterDatasets, LineGradient
		}
	}
</script>

<style>
.mainDiv{
		background: #EAE4E8;
	}
</style>
