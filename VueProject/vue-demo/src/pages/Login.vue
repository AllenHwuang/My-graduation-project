<template>
	<div style="width: 800px; height: 800px;">
		<div>
			<el-form :model="formData" status-icon :rules="formRules" ref="formRef" label-width="100px" class="demo-ruleForm">
				<el-form-item label="用户名" prop="user">
					<el-input type="text" v-model="formData.user" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="pass">
					<el-input type="password" v-model="formData.pass" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="确认密码" prop="checkPass">
					<el-input type="password" v-model="formData.checkPass" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm('formRef')">提交</el-button>
					<el-button @click="resetForm('formRef')">重置</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
	export default {
    data() {
      var validateUser = (rule, value, callback) => {
        if (value === '')
        {
          callback(new Error('请输入用户名'));
        }
        else
        {
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.formRules.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.formRules.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        beginClientX:0,           /*距离屏幕左端距离*/
        mouseMoveStata:false,     /*触发拖动状态  判断*/
        maxwidth:'',               /*拖动最大宽度，依据滑块宽度算出来的*/
        confirmWords:'拖动滑块验证',   /*滑块文字*/
        confirmSuccess:false,           /*验证成功判断*/
        formData: {
					user:'',
          pass: '',
          checkPass: '',
        },
        formRules: {
          user: [
            { validator: validateUser, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        var that = this;
        var pass = this.registData.pass
        var spass = this.$md5(pass)
        console.log("spass:")
        console.log(spass)
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$ajax.post(
              'http://192.168.0.23:5000/login',
              {
                user: this.ruleForm2.user,
                password: spass,
              }).then((res) => {
              console.log(res);
              sessionStorage.setItem("user",this.ruleForm2.user);
              router.push('/root/home')
            })
              .catch((error) => {
                // eslint-disable-next-line
                console.error(error);
              });
          } else {
            console.log('error submit!!');
            return false;
          }
        });

      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
		beforeUpdate() {
			
		},
  }
</script>

<style>
</style>
