<template>
	<div>
		<div>
			<h3>Make Payment With Credit Card</h3>
			<div>
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0" class="demo-ruleForm">
					<el-form-item label="" prop="name">
						<el-input size="large" v-model="ruleForm.name" placeholder="Your Name" style=""></el-input>
					</el-form-item>
					<el-form-item label="" prop="adress">
						<el-input size="large" v-model="ruleForm.adress" placeholder="Billing Adress" style=""></el-input>
					</el-form-item>
					<el-form-item>
						<el-col :span="7">
							<div>
								<el-form-item prop="city">
									<el-input size="large" v-model="ruleForm.city" placeholder="Billing City" style=""></el-input>
								</el-form-item>
							</div>
						</el-col>
						<el-col :span="1">
							&nbsp;
						</el-col>
						<el-col class="line" :span="7">
							<div>
								<el-form-item prop="postalCode">
									<el-input size="large" v-model="ruleForm.postalCode" placeholder="Billing Postal Code" style=""></el-input>
								</el-form-item>
							</div>
						</el-col>
						<el-col :span="1">
							&nbsp;
						</el-col>
						<el-col :span="8">
							<div>
								<el-form-item prop="country">
									<el-select size="large" v-model="ruleForm.country" filterable placeholder="Billing Country">
										<el-option
											v-for="item in options"
											:key="item.value"
											:label="item.label"
											:value="item.value">
										</el-option>
									</el-select>
								</el-form-item>
							</div>
						</el-col>
					</el-form-item>
					<h3>Credit Card Details</h3>
					<el-form-item label="" required>
						<el-col :span="10">
							<el-form-item prop="number">
								<el-input size="large" v-model="ruleForm.number" placeholder="Card Number" style=""></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="1">
							&nbsp;
						</el-col>
						<el-col :span="6">
							<el-form-item prop="MM">
								<el-input size="large" v-model="ruleForm.MM" placeholder="MM/YY" style=""></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="1">
							&nbsp;
						</el-col>
						<el-col :span="6">
							<el-form-item prop="CVV">
								<el-input size="large" v-model="ruleForm.CVV" placeholder="CVV" style=""></el-input>
							</el-form-item>
						</el-col>
					</el-form-item>
					<h3>Choose Payment Amount</h3>
					<div @click="checkfunction()">
						<el-form-item>
							<el-checkbox v-model="checked">I just want to link my credit card - $0.00 deposit</el-checkbox>
						</el-form-item>
					</div>
					<div class="labelDiv labelVisible">
						<label @click="changeblockbg($event, 1)" for="paypal25" class="labelClass flexwidth1">
												$10
						</label>
						<label @click="changeblockbg($event, 1)" for="paypal25" class="labelClass flexwidth2">
												$25
						</label>
						<label @click="changeblockbg($event, 2)" for="paypal25" class="labelClass flexwidth2">
												$50
						</label>
						<label @click="changeblockbg($event, 3)" for="paypal25" class="labelClass flexwidth2">
												$100
						</label>
						<label @click="changeblockbg($event, 4)" for="paypal25" class="labelClass other">
												Other
						</label>
					</div>
					<el-form-item>
						<el-button size="large" type="primary" style="width: 520px;">Pay with Credit Card</el-button>
					</el-form-item>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    data() {
      return {
				checked: false,
        ruleForm: {
          name: '',
					adress: '',
					city: '',
					postalCode: '',
					country: '',
					number: '',
					MM: '',
					CVV: '',
        },
				options: [{
          value: 'US',
          label: 'United States'
        }, {
          value: 'Afghanistan',
          label: 'Afghanistan'
        }, {
          value: 'AlandIslands',
          label: 'Aland Islands'
        }, {
          value: 'Albania',
          label: 'Albania'
        }, {
          value: 'Algeria',
          label: 'Algeria'
        }],
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
			changeblockbg(event, arg) {
				var el = event.currentTarget;
				var eles = document.getElementsByClassName("labelClass");
				if(arg == 0)
				{
					eles[0].className="labelClass flexwidth2";
					eles[1].className="labelClass flexwidth2";
					eles[2].className="labelClass flexwidth2";
					eles[3].className="labelClass flexwidth2";
					eles[4].className="labelClass flexwidth2";
				}
				else if(arg == 1)
				{
					eles[0].className="labelClass flexwidth2";
					eles[1].className="labelClass flexwidth2";
					eles[2].className="labelClass flexwidth2";
					eles[3].className="labelClass flexwidth2";
					eles[4].className="labelClass flexwidth2";
				}
				else if(arg == 2)
				{
					eles[0].className="labelClass flexwidth2";
					eles[1].className="labelClass flexwidth2";
					eles[2].className="labelClass flexwidth2";
					eles[3].className="labelClass flexwidth2";
					eles[4].className="labelClass flexwidth2";
				}
				else if(arg == 3)
				{
					eles[0].className="labelClass flexwidth2";
					eles[1].className="labelClass flexwidth2";
					eles[2].className="labelClass flexwidth2";
					eles[3].className="labelClass flexwidth2";
					eles[4].className="labelClass flexwidth2";
				}
				else
				{
					eles[0].className="labelClass flexwidth2";
					eles[1].className="labelClass flexwidth2";
					eles[2].className="labelClass flexwidth2";
					eles[3].className="labelClass flexwidth2";
					eles[4].className="labelClass flexwidth2";
				}
				el.className = "labelClass flexwidth1";
			},
			checkfunction() {
				console.log("jifenfono");
				var el = document.getElementsByClassName("labelDiv");
				console.log(el[0]);
				if(this.checked == false)
				{
					el[0].className = "labelDivNone labelDiv";
				} else
				{
					el[0].className = "labelVisible labelDiv";
				}
			}
    }
  }
</script>

<style>
	h3{
		font-size: 20px;
    line-height: 28px;
    color: #363B40;
    font-weight: 500;
	}
	.flexwidth1{
		font-size: 15px;
		color: #ffffff;
    border: none;
    background: linear-gradient(45deg, #135FAC 1%, #1e88e5 64%, #1E87E3 97%);
		box-shadow: 0 5px 30px -5px rgba(37, 45, 51, .5);
		width: 15%;
		font-weight: 500;
		line-height: 54px;
		height: 54px;
		margin-bottom: 5px;
		margin-right: 15px;
		display: inline-block;
		border-radius: 3px;
		text-align: center;
		cursor: pointer;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: clip;
		transition: all ease-in .15s;
	}
	.flexwidth2{
		font-size: 15px;
    color: #616366;
    font-weight: 500;
    line-height: 54px;
    height: 54px;
    margin-bottom: 5px;
		margin-right: 15px;
    display: inline-block;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;
		width: 15%;
		transition: all ease-in .15s;
	}
	.other{
		font-size: 15px;
		color: #616366;
		font-weight: 500;
		line-height: 54px;
		height: 54px;
		margin-bottom: 5px;
		display: inline-block;
		border-radius: 3px;
		text-align: center;
		cursor: pointer;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: clip;
		width: 15%;
	}
	.labelDivNone{
		display: none;
	}
	.labelVisible{
		visibility: visible;
	}
</style>
