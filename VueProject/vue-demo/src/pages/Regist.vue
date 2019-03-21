<template>
  <div>
    <div>
      <el-form :model="registData" status-icon :rules="formRules" ref="registData" label-width="100px" class="demo-ruleForm">
        <el-form-item label="昵称" prop="nickname">
          <el-input type="text" v-model="registData.nickname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="telephone">
          <el-input type="text" v-model="registData.telephone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input type="text" v-model="registData.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="registData.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="registData.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('registData')">提交</el-button>
          <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      var emailrule = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      var that = this;
      var validateEmail = (rule, value, callback) => {
        if (value === '')
        {
          callback(new Error('请输入邮箱'));
        }
        else if (!emailrule.test(value))
        {
          callback(new Error('邮箱格式有误'));
        }
        else
        {
          this.$ajax.post(
            'http://192.168.0.23:5000/registValidate',{
              email: value
            }).then((res) => {
            if(res.data!=='success')
            {
              callback(new Error('该邮箱已经被注册了'))
            }
            else
            {
              callback();
            }
          })
            .catch((error) => {
              // eslint-disable-next-line
              console.error(error);
            });
        }
      };
      var validateTelephone = (rule, value, callback) => {
        if (value === '')
        {
          callback(new Error('请输入联系电话'));
        }
        else
        {
          this.$ajax.post(
            'http://192.168.0.23:5000/registValidate',{
              telephone: value
            }).then((res) => {
            if(res.data!=='success')
            {
              callback(new Error('该号码已经被注册了'))
            }
            else
            {
              callback()
            }
          })
            .catch((error) => {
              // eslint-disable-next-line
              console.error(error);
            });
        }
      };
      var validateNickname = (rule, value, callback) => {
        if (value === '')
        {
          callback(new Error('请输入昵称'));
        }
        else
        {
          this.$ajax.post(
            'http://192.168.0.23:5000/registValidate',{
              nickname: value
            }).then((res) => {
            if(res.data!=='success')
            {
              callback(new Error('该昵称已经被注册了'))
            }
            else
            {
              callback()
            }
          })
            .catch((error) => {
              // eslint-disable-next-line
              console.error(error);
            });
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '')
        {
          callback(new Error('请输入密码'));
        }
        else if(value.length<6)
        {
          callback(new Error('您的密码长度不能少于6位'));
        }
        else
        {
          if (this.registData.checkPass !== '')
          {
            this.$refs.registData.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        }
        else if (value !== this.registData.pass)
        {
          callback(new Error('两次输入密码不一致!'));
        }
        else
        {
          callback();
        }
      };
      return {
        registData: {
          telephone: '',
          email: '',
          nickname: '',
          pass: '',
          checkPass: '',

        },
        formRules: {
          email: [
            { validator: validateEmail, trigger: 'blur' }
          ],
          telephone: [
            { validator: validateTelephone, trigger: 'blur' }
          ],
          nickname: [
            { validator: validateNickname, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],

        },

      };
    },
    methods: {
      submitForm(formName) {
        var pass = this.registData.pass
        var spass = this.$md5(pass)
        console.log("spass:")
        console.log(spass)
        this.$refs[formName].validate((valid) => {
          if (valid)
          {
            this.$ajax.post(
              'http://192.168.0.23:5000/regist',{
                nickname: this.registData.nickname,
                telephone: this.registData.telephone,
                email: this.registData.email,
                password: spass,
              }).then((res) => {
              if(res.data === 'success')
              {
                this.$router.push('/login')
              }
              else
              {
                console.log("fjepfjej")
              }
            })
              .catch((error) => {
                // eslint-disable-next-line
                console.error(error);
              });
          }
          else
          {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>

</style>

