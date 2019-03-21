<!-- 1.模版: HTML结构 -->
<template>
  <div id="app">
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
    <router-view v-wechat-title='$route.meta.title'></router-view>
	</div>
</template>

<!-- 行为: 处理逻辑 -->
<script>
	import Negative from './components/Negative'
	import Header from './components/common/Header'
	import Footer from './components/common/Footer'
	import Gallery from './components/common/Gallery'
  import * as router from "vue-router";
  export default{
		name:'app',
    data(){
		  return {
		    roomName: 'Marry&Allen',
        username: '',
        headerShow: true,
        footerShow: true,
      }
    },
		components:{
			Negative,
      Header,
      Footer,
      Gallery,
		},
		methods: {
      setConnect() {
        var that = this;
        this.socket = io('ws://192.168.0.23:5000/test_conn');
        this.socket.on('server_response', function (res) {
          console.log(res.data);
        });
        this.socket.on('message', function (msg) {
          console.log("新消息:")
          console.log(msg)
          that.notify();
        });
        this.socket.emit('joinRoom', {roomName: this.roomName, username: this.username});
        this.socket.on('reply', function (res) {
          console.log(res);
        });
        this.socket.on('leaveReply', function (msg) {
          console.log(res)
        });
      },

    },
    watch: {
      '$route' (val, old) {
        // 当前路由
        console.log(val);
        // 上一个路由
        console.log(old);
        if(old.name == 'login')
        {
          this.setConnect();
        }
        if(val.name == 'service')
        {
          this.socket.emit('leaveRoom',{roomName:this.roomName, username:this.username});
          this.socket.close()
        }
        if(old.name == 'serviece')
        {
          var that = this;
          var t;
          var username=sessionStorage.getItem("user");
          this.username = username;
          clearTimeout(t)
          t = setTimeout(function (){
            that.setConnect();
          }, 2000);
        }
      }
    },
		mounted(){
			//当在任一路由页面被刷新时,即是根组件app被重新创建,此时可以进行webSocket重连
			//从localStorage中获取用户信息,是登录状态则可以进行webSocket重连
			let userMessage = sessionStorage.getItem('user');
			console.log(userMessage)
      this.username = userMessage;
			if(userMessage)
			{
        this.setConnect();
			} else
			{
				console.log("App: 您还没有登录...")
			}

		},
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
