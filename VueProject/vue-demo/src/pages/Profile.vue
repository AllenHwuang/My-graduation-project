<template>
	<div style=" width: 100%; background-color: #EAE4E8;" class="profileMain1">
    <el-row>
      <el-col :span="2">
        <div class="leftDiv" style="background-color: rgb(84, 92, 100); height: 716px">
          <div class="tx" style="">
            <img src="../../static/tx.jpg" alt="正方形的原始图片" @click="uploadImageDialog = true;" v-on:mouseover="changeActive($event)"
                 v-on:mouseout="removeActive($event)" style="width: 100px; height: 100px; border-radius: 100px; margin-top: 20px; margin-left: 10px"/>
          </div>
          <div>
            <el-dialog title="收货地址" :visible.sync="uploadImageDialog">
              <el-row>
                <el-col :span="16">
                  <div>
                    <!-- <el-button slot="trigger" size="small" type="primary">选取文件</el-button> -->
                    <!-- <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button> -->
                    <el-upload
                      class="upload-demo"
                      drag="true" ref="upload"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :show-file-list="false"
                      auto-upload=false
                      :on-preview="handlePreview"
                      :on-change='changeUpload'
                      :on-remove="handleRemove"
                      :auto-upload="true">
                      <i class="el-icon-upload"></i>
                      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="box">
                    <div class="bottom">
                      <img :src="dialogImageUrl" alt="">
                    </div>
                    <div class="middle"></div>
                    <div class="white-border"></div>
                  </div>
                </el-col>
              </el-row>
            </el-dialog>
          </div>
          <div style="margin-top: 50px; text-align: center">
            <div style="">
              <el-button circle @click="pushRouter('basicinfo')">
                <FontAwesomeIcon :icon="['far', 'user']" size="4x" ></FontAwesomeIcon>
              </el-button>
            </div>
            <p>Info</p>
          </div>
          <div>
            <div style="margin-top: 30px; text-align: center">
              <div style="">
                <el-button circle @click="pushRouter('billing')">
                  <FontAwesomeIcon :icon="['fas', 'wallet']" size="4x" ></FontAwesomeIcon>
                </el-button>
              </div>
              <p>Billing</p>
            </div>
          </div>
          <div>
            <div style="margin-top: 30px; text-align: center">
              <div style="">
                <el-button circle @click="pushRouter('service')">
                  <FontAwesomeIcon :icon="['fas', 'envelope']" size="4x" ></FontAwesomeIcon>
                </el-button>
              </div>
              <p>Service</p>
            </div>
          </div>
          <div>
            <div style="margin-top: 30px; text-align: center">
              <div style="">
                <el-button circle @click="dialogTableVisible = true">
                  <FontAwesomeIcon :icon="['fas', 'envelope']" size="4x" ></FontAwesomeIcon>
                </el-button>
              </div>
              <p>Mail</p>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="22">
        <div>
          <el-row>
            <el-col :offset="20" :span="4">
              <div style="font-size: 15px; line-height: 25px; margin-top: 10px" v-show="welcomeNote">
                <p>Welcome back, Huang Allen!</p>
              </div>
              <div class="smallMenu">
                <div style="margin-top: 15px;">
                  <p>Profile</p>
                </div>
                <div style="margin-top: 10px;">
                  <p>Billing</p>
                </div>
                <div style="margin-top: 10px;">
                  <p>Service</p>
                </div>
                <div>
                  <p>Mail</p>
                </div>
                <div>
                  <p>Logout</p>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div>
          <el-row>
            <el-col :span="24">
              <div style="background-color: #EAE4E8;">
                <router-view></router-view>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>

	</div>
</template>

<script>
	import LeftMenu from '../components/content/profile/LeftMenu.vue'
  import {FontAwesomeIcon, FontAwesomeLayers} from '@fortawesome/vue-fontawesome'
	export default {
		name: 'app',
		components: {
			LeftMenu, FontAwesomeIcon,
		},
		data() {
			return {
				showText: false,
        welcomeNote: true,
				uploadImageDialog: false,
				dialogVisible: false,
				dialogImageUrl: '../../static/tx.jpg',
				username: 'Albert',
				fname: 'Huang',
				lname: 'Allen',
				email: '295463925@qq.com',
				tel: '13821545257',
				dialogForm1Visible: false,
				dialogForm2Visible: false,
        roomName: 'Marry&Allen',
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
      pushRouter(name) {
        this.$router.push({name: name});
      },
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
      },
      // setConnect(){
      //   console.log("11111111111")
      //   this.socket=io('ws://192.168.0.23:5000/test_conn');
      //   this.socket.on('server_response', function(res) {
      //     console.log(res.data);
      //   });
      //   this.socket.on('message', function(msg) {
      //     console.log("新消息:")
      //     console.log(msg)
      //   });
      //   this.socket.emit('joinRoom',{roomName:this.roomName});
      //   this.socket.on('reply', function(res) {
      //     console.log("Profile的reply...")
      //     console.log(res);
      //   });
      // },
		},
		beforeMount() {
			this.username = sessionStorage.getItem('user');
		},
		mounted() {
			console.log(this.username);
			// this.setConnect();
		},
    watch: {
      '$route'(val, old) {
        console.log(val.path)
        var valMatch = val.path.match('/service')[0]
        if(valMatch == '/service')
        {
          this.welcomeNote = false;
        }
        else
        {
          this.welcomeNote = true;
        }
      }
    }
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
  .smallMenu {
    position: absolute;
    margin-top: 5px;
    z-index: 2;
    width: 200px;
    height: 250px;
    background: white;
    opacity: 0;
  }
  .smallMenu p{
    font-size: 20px;
    line-height: 25px;

  }
  .leftDiv p{
    color: #fff;
    font-size: 20px;
    text-align: center;
  }

	.tx {
    width: 100px;
    height: 100px;
  }

	.mydh {
		border-radius: 500px;
		height: 100px;
		width: 100px;
		margin-top: 20px;
		/* animation:mysecond 0.8s; */
		filter: brightness(100%);
	}

	.ydh {
		border-radius: 500px;
		height: 100px;
		width: 100px;
		margin-top: 20px;
		/* animation:myfirst 0.8s; */
		filter: brightness(40%);
	}
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
  p{
    font-family: "Raleway", Helvetica, Arial, sans-serif;
  }
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

