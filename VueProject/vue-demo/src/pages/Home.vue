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
    data(){
		  return {
		    roomName: 'Marry&Allen',
      }
    },
		components:{
			Echarts, NewsModule, Carousel
		},
		methods:{
			// testConnect(){
			//   var that = this;
			//   console.log("Home执行了连接测试....")
			// 	this.socket=io('ws://192.168.0.23:5000/test_conn');
			//   // this.socket.close()
			// 	this.socket.on('server_response', function(res) {
			// 	  console.log("Home的server_reponse:")
			// 		console.log(res.data);
			// 	});
			// 	this.socket.on('message', function(msg) {
			// 	  console.log("HOME:")
			// 		console.log("新消息:")
			// 		console.log(msg)
      //     console.log("ABCDRFG")
      //     that.notify();
			// 	});
			// 	this.socket.emit('joinRoom',{roomName:this.roomName});
			// 	this.socket.on('reply', function(res) {
			// 	  console.log("Home的reply")
			// 		console.log(res);
			// 	});
			// 	this.socket.on('test', function(res) {
			// 	  console.log('Home:')
      //     console.log('on.......')
      //     console.log(res)
      //   });
			// },
      // notify() {
      //   this.$notify.info({
      //     title: '消息',
      //     message: '您有一条未读消息'
      //   });
      // },
		},
		mounted(){
			//当在任一路由页面被刷新时,即是根组件app被重新创建,此时可以进行webSocket重连
			//从localStorage中获取用户信息,是登录状态则可以进行webSocket重连
			let user = sessionStorage.getItem('user');
			console.log("HOME:");
			console.log(user);
			if(user)
			{
				// this.testConnect();
			} else
			{
				console.log("主页: 您还没有登录...")
			}
		},
	}
</script>

<style>
	.mainDiv{
		background: #EAE4E8;
	}
</style>
