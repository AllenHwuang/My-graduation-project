<template>
	<div>
		<div style="margin-left: 50px;">
			<div style="margin-top: 20px;">
				<div style="margin-bottom: 20px;">
          <el-row>
            <el-col span="4" :offset="24">
              <div>
                <el-row>
                  <el-col :span="12">
                    <div class="custume" style="">
                      $0.64
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="balance" style="">
                      $0.03
                    </div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col class="smtext" :span="12">
                    Charges This Month
                  </el-col>
                  <el-col class="smtext" :span="12">
                    Remaining Credit
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
					<el-row>
						<el-col :span="12">
							<div style=""><h1>Billing</h1></div>
						</el-col>
            <el-col :span="12">

            </el-col>
					</el-row>
				</div>
				<div class="table_billing">
					<el-row>
						<el-col :span="4" :offset="1">
							<div>
								<span style="position: relative; display: block; width: 135px;" @click="changeActive($event, 1)" class="billings">
									<router-link :to="{ name: 'addfunds' }">
										<p>Make Payment
										</p>
									</router-link>
								</span>
							</div>
						</el-col>
						<el-col :span="2">
							<div>
								<span style="position: relative; display: block; width: 45px;" @click="changeActive($event, 2)" class="billings">
									<router-link :to="{ name: 'limit' }">
										<p>Limit</p>
									</router-link>
								</span>
							</div>
						</el-col>
						<el-col :span="3">
							<div>
								<span style="position: relative; display: block; width: 65px;" @click="changeActive($event ,3)" class="billings">
									<router-link :to="{ name: 'history' }">
										<p>History</p>
									</router-link>
								</span>
							</div>
						</el-col>
					</el-row>
				</div>
				<div>
					​<el-row>
						<el-col>
							<div id="header4_0"></div>
					​	</el-col>
					</el-row>
				</div>
				<div>
					<router-view></router-view>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
		export default {
			name: 'app',
			components: {
				
			},
			data() {
				return {
					roomName: 'Mary&Allen',
				};
			},
			methods: {
				changeActive(event, arg) {
					console.log("点击了....")
					var el = event.currentTarget;
					console.log(el)
					var eles = document.getElementsByClassName("billings");
					console.log(eles);
					if(arg == 1)
					{
						eles[1].className="billings";
						eles[2].className="billings";
					}
					else if(arg == 2)
					{
						eles[0].className="billings";
						eles[2].className="billings";
					}
					else
					{
						eles[0].className="billings";
						eles[1].className="billings";
					}
					event.currentTarget.className = "actived billings";
				},
				messageNotify() 
				{
					this.$notify.info({
						title: '通知',
						message: '您有一条新消息!',
						showClose: false
					});
				},
			},
			mounted() {
// 				let that = this;
// 				this.socket=io('ws://192.168.0.23:5000/test_conn');
// 				this.socket.on('server_response', function(res) {
// 					
// 					console.log(res.data);
// 				});
// 				
// 				this.socket.on('message', function(msg) {
// 				
// 				console.log("新消息:")
// 				console.log(that)
// 				that.$notify.info({
// 					title: '通知',
// 					message: '您有一条新消息!',
// 					showClose: false
// 				});
// 				});
// 				this.socket.emit('joinRoom',{roomName:this.roomName});
// 				this.socket.on('reply', function(res) {
// 					console.log(res);
// 				});
			},
		}
</script>

<style>
	h1 {
    font-size: 25px;
    line-height: 34px;
    margin: 0px 0px 25px 0px;
    color: #363B40;
    font-weight: 500;
	}
	#header4_0 {

    top: -40px;
    width: 100%;
    height: 1px;
    overflow: hidden;
    background-color: #7A8A9A;
	}
	.table_billing{
		margin-bottom: -11px;
	}
	.table_billing p{
		font-family: "Raleway", Helvetica, Arial, sans-serif;
    font-size: 20px;
    font-weight: 300;
		line-height: 20px;
		color: #616366;
	}
	.billings :after{
			content: "";
			width: 0;
			height: 3px;
			background: #1e88e5;
			position: absolute;
			top: 120%;
			left: 50%;
			transition: all .2s;
	}
	.actived :after{
		left: 0%;
		width: 100%;
	}
</style>
