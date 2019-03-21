<template>
	<div>
		<div style="">
			<el-row>
				<el-col :span="6">
					<div style="" class="payments">
						<div @click="changeActive($event ,1)" class="payment" style="margin-bottom: 20px; margin-top: 20px;">
							<span style="position: relative; display: block; width: 104px;">
								<router-link :to="{ name: 'creditcard' }">
									<p>Credit Card</p>
								</router-link>
							</span>
						</div>
						<div @click="changeActive($event ,2)" class="payment" style="margin-bottom: 20px;">
							<span style="position: relative; display: block; width: 63px;">
								<router-link :to="{ name: 'paypal' }">
									<p>Paypal</p>
								</router-link>
							</span>
						</div>
						<div @click="changeActive($event ,3)" class="payment" style="margin-bottom: 20px;">
							<span style="position: relative; display: block; width: 62px;">
								<router-link :to="{ name: 'bitcoin' }">
									<p>Bitcoin</p>
								</router-link>
							</span>
						</div>
						<div @click="changeActive($event ,4)" class="payment" style="margin-bottom: 20px;">
							<span style="position: relative; display: block; width: 55px;">
								<router-link :to="{ name: 'alipay' }">
									<p>Alipay</p>
								</router-link>
							</span>
						</div>
						<div @click="changeActive($event ,5)" class="payment" style="margin-bottom: 20px;">
							<span style="position: relative; display: block; width: 114px;">
								<router-link :to="{ name: 'wechatpay' }">
									<p>WeChat Pay</p>
								</router-link>
							</span>
						</div>
						<div @click="changeActive($event ,6)" class="payment" style="margin-bottom: 20px;">
							<span style="position: relative; display: block; width: 87px;">
								<router-link :to="{ name: 'giftcode' }">
									<p>Gift Code</p>
								</router-link>
							</span>
						</div>
					</div>
				</el-col>
				<el-col :span="10">
					<div style="">
						<router-view></router-view>
					</div>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				
			};
		},
		methods: {
			changeActive(event, arg) {
				console.log("点击了....")
				var el = event.currentTarget;
				console.log(el)
				var eles = document.getElementsByClassName("payment");
				console.log(eles);
				if(arg == 1)
				{
					eles[1].className="payment";
					eles[2].className="payment";
					eles[3].className="payment";
					eles[4].className="payment";
					eles[5].className="payment";
				}
				else if(arg == 2)
				{
					eles[0].className="payment";
					eles[2].className="payment";
					eles[3].className="payment";
					eles[4].className="payment";
					eles[5].className="payment";
				}
				else if(arg == 3)
				{
					eles[0].className="payment";
					eles[1].className="payment";
					eles[3].className="payment";
					eles[4].className="payment";
					eles[5].className="payment";
				}
				else if(arg == 4)
				{
					eles[0].className="payment";
					eles[1].className="payment";
					eles[2].className="payment";
					eles[4].className="payment";
					eles[5].className="payment";
				}
				else if(arg == 5)
				{
					eles[0].className="payment";
					eles[1].className="payment";
					eles[2].className="payment";
					eles[3].className="payment";
					eles[5].className="payment";
				}
				else
				{
					eles[0].className="payment";
					eles[1].className="payment";
					eles[2].className="payment";
					eles[3].className="payment";
					eles[4].className="payment";
				}
				event.currentTarget.className = "actived payment";
			},
		},
	}
</script>

<style>
	.payments p{
		font-family: "Raleway", Helvetica, Arial, sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 25px;
		color: #616366;
	}
	.payment :after{
			content: "";
			width: 0;
			height: 3px;
			background: #1e88e5;
			position: absolute;
			top: 120%;
			left: 0%;
			transition: all .2s;
	}
	.actived :after{
		
		width: 100%;
	}
</style>
