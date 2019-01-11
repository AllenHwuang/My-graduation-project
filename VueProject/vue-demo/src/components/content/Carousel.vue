<template>
	<div>
		<div>
			<el-carousel indicator-position="outside" height="450px">
				<el-carousel-item v-for="image in images">
					<div>
						<el-row>
							<el-col :span="24"><img v-bind:src="image.src"/></el-col>
						</el-row>
					</div>
				</el-carousel-item>
			</el-carousel>
		</div>
		<div class="innerDiv">
				<!-- <SignupMini/> -->
		</div>
	</div>
</template>

<script>
	//import SignupMini from './SignupMini'
	export default {
		data() {
			return {
				"images":[
					{"src" : require('../../assets/pic1.jpg')},
					{"src" : require('../../assets/pic2.jpg')},
					{"src" : require('../../assets/pic3.jpg')}
					]
			};
		},
		/* components:{
			SignupMini
		} */
	}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

	.innerDiv{
		position:absolute; left:850px; top:150px; width:400px; height:260px;
	}
</style>

