<template>
	<div style="margin-left: 50px;">
		<div style="margin-top: 120px;">
			<el-row>
				<el-col :span="12">
					<div style="">
						<el-button round="true" size="medium" type="primary" @click="dialogForm1Visible = true" icon="el-icon-edit"></el-button>
						<el-dialog title="收货地址" :visible.sync="dialogForm1Visible">
							<el-form :model="form">
								<el-form-item label="原始密码" :label-width="formLabelWidth">
									<el-input type="password" v-model="form.name" autocomplete="off"></el-input>
								</el-form-item>
							</el-form>
							<div slot="footer" class="dialog-footer">
								<el-button @click="dialogForm1Visible = false">取 消</el-button>
								<el-button type="primary" @click="
													dialogForm1Visible = false; 
													successNotify(); 
													dialogForm2Visible = true;">确
									定
								</el-button>
							</div>
						</el-dialog>
						<el-dialog title="收货地址" :visible.sync="dialogForm2Visible">
							<el-form :model="form">
								<el-form-item label="新 密 码:" :label-width="formLabelWidth">
									<div style="width: 300px; margin-bottom: 20px;">
										<el-input type="password" v-model="form.npassword" autocomplete="off"></el-input>
									</div>
								</el-form-item>
								<el-form-item label="确认密码:" :label-width="formLabelWidth">
									<div style="width: 300px;">
										<el-input type="password" v-model="form.renpassword" autocomplete="off"></el-input>
									</div>
								</el-form-item>
							</el-form>
							<div slot="footer" class="dialog-footer">
								<el-button @click="dialogForm2Visible = false">取 消</el-button>
								<el-button type="primary" @click="dialogForm2Visible = false">确 定</el-button>
							</div>
						</el-dialog>
					</div>
				</el-col>
				<el-col :span="8">
					<!--<div>-->
						<!--<el-row>-->
							<!--<el-col :span="12">-->
								<!--<div class="custume" style="">-->
									<!--$0.64-->
								<!--</div>-->
							<!--</el-col>-->
							<!--<el-col :span="12">-->
								<!--<div class="balance" style=""> -->
									<!--$0.03-->
								<!--</div>-->
							<!--</el-col>-->
						<!--</el-row>-->
						<!--<el-row>-->
							<!--<el-col class="smtext" :span="12">-->
								<!--Charges This Month-->
							<!--</el-col>-->
							<!--<el-col class="smtext" :span="12">-->
								<!--Remaining Credit-->
							<!--</el-col>-->
						<!--</el-row>-->
					<!--</div>-->
				</el-col>
			</el-row>
		</div>
		<div class="demo-input-suffix" style="">
			<div style="margin-top: 40px;">
				<el-row>
					<el-col :span="3">
						<div style="text-align: center; line-height: 40px; height: 40px;">
							<p style="font-size: 18px;">用户名 :</p>
						</div>
					</el-col>
					<el-col :span="4">
						<div>
							<el-tooltip class="item" effect="dark" content="不可修改!" placement="right">
								<el-input placeholder="Allen" :disabled="true" v-model="username" size="large">
								</el-input>
							</el-tooltip>
						</div>
					</el-col>
				</el-row>
			</div>
	
			<div style="margin-top: 40px;">
				<el-row>
					<el-col :span="3">
						<div style="text-align: center; line-height: 40px; height: 40px;">
							<p style="font-size: 18px;">真实姓名 :</p>
						</div>
					</el-col>
					<el-col :span="5">
						<div>
							<el-tooltip class="item" effect="dark" content="First name" placement="top-start">
								<el-input placeholder="Huang" v-model="fname" size="large">
								</el-input>
							</el-tooltip>
						</div>
					</el-col>
					<el-col :span="5" offset="1">
						<div>
							<el-tooltip class="item" effect="dark" content="Last name" placement="top-start">
								<el-input placeholder="名 字" v-model="lname" size="large" value="Allen">
								</el-input>
							</el-tooltip>
						</div>
					</el-col>
				</el-row>
			</div>
	
			<div style="margin-top: 40px;">
				<el-row>
					<el-col :span="3">
						<div style="text-align: center; line-height: 40px; height: 40px;">
							<p style="font-size: 18px;">邮箱 :</p>
						</div>
					</el-col>
					<el-col :span="12">
						<div>
							<el-input placeholder="请选择日期" v-model="email" size="large">
							</el-input>
						</div>
					</el-col>
				</el-row>
			</div>
	
			<div style="margin-top: 40px;">
				<el-row>
					<el-col :span="3">
						<div style="text-align: center; line-height: 40px; height: 40px;">
							<p style="font-size: 18px;">手机号码 :</p>
						</div>
					</el-col>
					<el-col :span="12">
						<div>
							<el-input placeholder="请选择日期" v-model="tel" size="large">
							</el-input>
						</div>
					</el-col>
				</el-row>
			</div>
		</div>
	</div>
</template>

<script>
	import LeftMenu from './LeftMenu.vue'
	export default {
		name: 'app',
		components: {
			LeftMenu
		},
		data() {
			return {
				showText: false,
				uploadImageDialog: false,
				dialogVisible: false,
				dialogImageUrl: '../../static/tx.jpg',
				username: 'Allen',
				fname: 'Huang',
				lname: 'Allen',
				email: '295463925@qq.com',
				tel: '13821545257',
				dialogForm1Visible: false,
				dialogForm2Visible: false,
// 				fileList: [{
// 						name: 'food.jpeg', 
// 						url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42\a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
// 					}, {
// 						name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
// 					},
// 				],
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				formLabelWidth: '120px',
			};
		},
		methods: {
			changeActive($event) {
				$event.currentTarget.className = "ydh";
				this.showText = true;
			},
			removeActive($event) {
				$event.currentTarget.className = "mydh";
				this.showText = false;
			},
			successNotify() {
				this.$notify({
					title: '成功',
					message: '原始密码验证成功!',
					type: 'success',
					duration: 600,
				});
			},
			failNotify() {
				this.$notify.error({
					title: '错误',
					message: '原始密码输入错误, 请重新输入!'
				});
			},
			submitUpload() {
				this.$refs.upload.submit();
			},
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handlePreview(file) {
				console.log(file);
			},
			changeUpload: function(file, fileList) {
        this.fileList = fileList;
        this.$nextTick(
          () => {
            let upload_list_li = document.getElementsByClassName('el-upload-list')[0].children;
            for (let i = 0; i < upload_list_li.length; i++) {
              let li_a = upload_list_li[i];
              let imgElement = document.createElement("img");
              imgElement.setAttribute('src', fileList[i].url);
              imgElement.setAttribute('style', "max-width:50%;padding-left:25%");
              if (li_a.lastElementChild.nodeName !== 'IMG') {  
                li_a.appendChild(imgElement);
              }  
            }
          });
      }
		},
	}
</script>

<style>
	@keyframes myfirst {
		from {
			filter: brightness(100%);
		}

		to {
			filter: brightness(40%);
		}
	}

	@keyframes mysecond {
		from {
			filter: brightness(40%);
		}

		to {
			filter: brightness(100%);
		}
	}

	/*.tx {}*/

	/*.mydh {*/
		/*border-radius: 500px;*/
		/*height: 150px;*/
		/*width: 150px;*/
		/*margin-top: 20px;*/
		/*!* animation:mysecond 0.8s; *!*/
		/*filter: brightness(100%);*/
	/*}*/

	/*.ydh {*/
		/*border-radius: 500px;*/
		/*height: 150px;*/
		/*width: 150px;*/
		/*margin-top: 20px;*/
		/*!* animation:myfirst 0.8s; *!*/
		/*filter: brightness(40%);*/
	/*}*/
	.previewImageClsss1 img{
		height: 150px; 
		width: 150px; 
		display: block; 
		position: absolute;
		filter: brightness(40%);
		
		/* opacity: 0.5; */
	}
	.previewImageClsss2 img{
		border-radius: 50%;
		z-index: -1;
	}
	
	.custume{
		font-family: "Raleway", Helvetica, Arial, sans-serif;
		font-size: 25px;
    font-weight: 500;
    line-height: 32px;
    color: #616366;
	}
	
	.balance{
		font-family: "Raleway", Helvetica, Arial, sans-serif;
		font-size: 25px;
	  font-weight: 500;
	  line-height: 32px;
	  color: #7cb342;
	}
	.smtext
	{
		color: #9DA2A6;
		font-size: 13px;
		font-weight: 300;
		line-height: 16px;
	}
	
	.box{position: relative; width: 200px; height: 200px;}
	.box img{width: 100%; display: block;}
	.box .middle{position: absolute;width: 100%; height: 100%; top: 0; left: 0; 
								background: radial-gradient(circle, transparent 70%, rgba(0, 0, 0, 0.5) 0%);}
	.box .white-border{position: absolute; top: 58%; left: 58%; width: 200px; height: 200px; 
											border-radius: 115px; border: 2px solid #fff; margin: -115px 0 0 -115px; box-sizing: border-box;}
/* 
	<div class="box">
		<div class="bottom">
			<img width="100%" :src="dialogImageUrl" alt="">
		</div>
		<div class="middle"></div>
		<div class="white-border"></div>
	</div>
*/
		
</style>
