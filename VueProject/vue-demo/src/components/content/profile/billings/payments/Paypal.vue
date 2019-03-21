<template>
	<div>
		<div>
			<h3>Make a PayPal Payment</h3>
			<div style="width: 100%; height: 30px;"></div>
			<div>
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0" class="demo-ruleForm">
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
					<div style="width: 100%; height: 30px;"></div>
					<el-form-item>
						<el-button size="large" type="primary" style="width: 470px;">Pay with PayPal</el-button>
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
</style>
