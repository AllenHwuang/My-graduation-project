<template>
	<div>
		<div style="width: 100%;height: 500px;">
			<el-row>
        <el-col :span="4">
          <div style="border: 1px solid darkgray;">
            <el-input></el-input>
            <div class="friendsDiv" >
              <div v-for="(information,index) in informations" @click="changeFriend(index)">
                <el-row :style="information.colors">
                  <el-col :span="4">
                    <div style="">
                      <img src="../../../../static/logo.png" style="width: 50px;height: 50px;border-radius: 100px;margin-top: 10px"/>
                    </div>
                  </el-col>
                  <el-col :span="20">

                  </el-col>
                </el-row>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="20">
          <div>
            <div class="blockDiv">
              <div style="height: 90px;">
                <el-row>
                  <div style="text-align: center; box-shadow: 0px 2px 2px lightgray">
                    <h3>客服-001</h3>
                  </div>
                </el-row>
              </div>
              <div>
                <el-row>

                </el-row>
              </div>
              <!-- Left -->
              <div class="sender">
                <div class="headPicture">
                  <img src="../../../../static/tx.jpg"/>
                </div>
                <div>
                  <div class="left_triangle"></div>
                  <span> hello, man!</span>
                </div>
              </div>
              <!-- Right -->
              <div class="receiver">
                <div class="headPicture">
                  <img src="../../../../static/fushui.jpg"/>
                </div>
                <div>
                  <div class="right_triangle"></div>
                  <span> hello world!</span>
                </div>
              </div>
            </div>
            <br/>
            <el-input placeholder="请输入密码" v-model="inputText"></el-input>
            <el-button type="primary" @click="send()">发送</el-button>
          </div>
        </el-col>
      </el-row>
		</div>
	</div>
</template>

<script>
   export default {
		data(){
			return{
				msg: 'Hello',
				data: 'test_data',
				inputText: '',
				roomName: 'Mary&Allen',
        username: '',
				data:{
					message: '',
					sender: '',
				},
				sessionScope:{
					username: 'Allen',
					identity: 'customer',
				},
        informations: [
          {colors:{color: 'blue', background:'#EAE4E8'}},
          {colors:{color: 'blue', background:'#EAE4E8'}},
          {colors:{color: 'blue', background:'#EAE4E8'}},
          {colors:{color: 'blue', background:'#EAE4E8'}},
          {colors:{color: 'blue', background:'#EAE4E8'}},
          {colors:{color: 'blue', background:'#EAE4E8'}},
        ]
			}
		},
		methods: {
			testConnect(){
			  var that = this;
			  console.log("11111111111")
				this.socket=io('ws://192.168.0.23:5000/test_conn');
				this.socket.on('server_response', function(res) {
					console.log(res.data);
				});
				this.socket.on('message', function(msg) {
					console.log("新消息:");
					console.log(msg);
          var jsonObject = JSON.parse(msg);
          that.inputText=''
					that.createNewElement(jsonObject);
				});
				this.socket.emit('joinRoom',{roomName:this.roomName, username:this.username});
				this.socket.on('reply', function(res) {
					console.log(res);
				});
				this.socket.on('leaveReply', function (msg) {
          console.log(res)
        });
			},
      createNewElement(message)
      {
        let userMessage = sessionStorage.getItem('user');
        console.log("现在登录的是:");
        console.log(userMessage);
        if(message.sender == userMessage)
        {
          var oDiv = document.createElement("div");
          var blockDiv=document.getElementsByClassName("blockDiv")[0]
          oDiv.className = "sender";
          blockDiv.appendChild(oDiv)
          var headpictrueDiv = document.createElement("div");
          headpictrueDiv.className="headPicture"
          var img = document.createElement("img");
          img.src = "../../../../static/tx.jpg";
          img.className=""
          headpictrueDiv.appendChild(img)
          var lDiv = document.createElement("div");
          var span = document.createElement("span");
          var message = document.createTextNode(message.message);
          span.appendChild(message);
          var left_triangleDiv = document.createElement("div");
          left_triangleDiv.className="left_triangle";
          lDiv.appendChild(span);
          lDiv.insertBefore(left_triangleDiv, span);
          oDiv.appendChild(lDiv);
          oDiv.insertBefore(headpictrueDiv, lDiv);
        }
        else
        {
          var oDiv = document.createElement("div");
          var blockDiv=document.getElementsByClassName("blockDiv")[0]
          oDiv.className = "receiver";
          blockDiv.appendChild(oDiv)
          var headpictrueDiv = document.createElement("div");
          headpictrueDiv.className="headPicture"
          var img = document.createElement("img");
          img.src = "../../../../static/fushui.jpg";
          headpictrueDiv.appendChild(img)
          var lDiv = document.createElement("div");
          var span = document.createElement("span");
          var message = document.createTextNode(message.message);
          span.appendChild(message);
          var right_triangleDiv = document.createElement("div");
          right_triangleDiv.className="right_triangle";
          lDiv.appendChild(span);
          lDiv.insertBefore(right_triangleDiv, span);
          oDiv.appendChild(lDiv);
          oDiv.insertBefore(headpictrueDiv, lDiv);
        }

      },
			send()
      {
				this.data.sender = sessionStorage.getItem('user');
				this.data.message = this.inputText
				this.socket.emit('imessage', this.data);
			},
      changeFriend(index) {
        this.informations = [
          {colors:{color: 'blue', background:'#EAE4E8'}},
          {colors:{color: 'blue', background:'#EAE4E8'}},
          {colors:{color: 'blue', background:'#EAE4E8'}},
          {colors:{color: 'blue', background:'#EAE4E8'}},
          {colors:{color: 'blue', background:'#EAE4E8'}},
          {colors:{color: 'blue', background:'#EAE4E8'}},
        ]
        this.informations[index].colors = {color: 'blue', background: 'lightgray'}
      }

		},
// 		sockets: {
// 			connect() {
// 				console.log('socket connected');
// 			}
// 		},
		mounted() {
		  var that = this;
      var t;
      var username=sessionStorage.getItem("user");
      this.username = username;
      clearTimeout(t)
      t = setTimeout(function (){
        that.testConnect();
      }, 2000);
		},
		beforeDestroy() {
		  console.log("beforeDestory的this....")
      console.log(this);
      this.socket.emit('leaveRoom',{roomName:this.roomName, username:this.username});
		  this.socket.close();
		},
	}
</script>
<style>
  h3{
    font-size: 20px;
    line-height: 90px;
    color: #363B40;
    font-weight: 500;
  }
  .friendsDiv{
    overflow-y:scroll;
    scroll-behavior:smooth;
    height:680px;
    width: 100%;
  }
  .blockDiv{
    overflow-y:scroll;
    scroll-behavior:smooth;
    height:630px;
  }
	.headPicture img{
		height: 50px;
		width: 50px;
		border-radius: 500px;
	}
  /* bubble style */
	.sender{
		clear:both;
	}
	.sender div:nth-of-type(1){
		float: left;
	}
	.sender div:nth-of-type(2){
		background-color: aquamarine;
		float: left;
		margin: 10px 20px 10px 15px;
		padding: 10px 10px 10px 0px;
		border-radius:7px;
	}

	.receiver div:first-child img,
	.sender div:first-child img{
		width:50px;
		height: 50px;
	}

	.receiver{
		clear:both;
	}
	.receiver div:nth-child(1){
		float: right;
	}
	.receiver div:nth-of-type(2){
		float:right;
		background-color: gold;
		margin: 10px 10px 10px 20px;
		padding: 10px 0px 10px 10px;
		border-radius:7px;
	}

	.left_triangle{
		height:0px;  
		width:0px;  
		border-width:8px;  
		border-style:solid;  
		border-color:transparent aquamarine transparent transparent;  
		position: relative;
		left:-16px;
		top:3px;
	}

	.right_triangle{
		height:0px;  
		width:0px;  
		border-width:8px;  
		border-style:solid;  
		border-color:transparent transparent transparent gold;  
		position: relative;
		right:-16px;
		top:3px;
	}
  </style>
