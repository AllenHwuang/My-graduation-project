<template>
	<div>
		<div class="mainDiv">
			<div style="height: 100px;">
				<el-row>
					<!-- <el-col :span="6">&nbsp;</el-col>
						<el-col :span="10">
							<div style="margin-top: 50px;">
								<el-progress :text-inside="true" :stroke-width="18" :percentage="65"></el-progress>
							</div>
						</el-col>
						<el-col :span="6"></el-col> -->
						<el-col :span="22">&nbsp;</el-col>
						<el-col :span="2">
							<div style="margin-top: 20px;">
								<!-- <el-button icon="el-icon-setting" circle @click="open5()"></el-button> -->
								<!-- Table -->
								<el-row>
									<el-col>
										<el-button icon="el-icon-setting" circle @click="dialogTableVisible = true"></el-button>
									</el-col>
								</el-row>
								<el-row>
									<el-col>
										<div style="height : 50px">
											<transition name="el-zoom-in-center">
												<div style="margin-top : 20px">
													<el-button v-show="button2show" icon="el-icon-setting" circle @click="resultDiaglogShow = true"></el-button>
													<el-dialog
															title="结果记录"
															:visible.sync="resultDiaglogShow"
															:close="closeDialog">
														<el-collapse accordion>
															<el-collapse-item>
																<template slot="title">
																	一致性 Consistency <i class="header-icon el-icon-star-on" style="margin-left: 10px;"></i>
																</template>
																<div style="margin-top: 10px;">
																	<el-row>
																		<el-col style="height: 50px;" :span="2">
																			<el-row>
																				<el-col :span="24">
																					<div style="">&nbsp;</div>
																				</el-col>
																			</el-row>
																			<el-row>
																				<el-col :span="24">
																					<div style="">&nbsp;</div>
																				</el-col>
																			</el-row>
																		</el-col>
																		<el-col :span="5">
																			<el-row>
																				<el-col :span="24">
																					<div>增长率: 48%</div>
																				</el-col>
																			</el-row>
																			<el-row>
																				<el-col :span="24">
																					<div>增长率: 48%</div>
																				</el-col>
																			</el-row>
																		</el-col>
																		<el-col :span="5">
																			<el-row>
																				<el-col :span="24">
																					<div>下跌率: 35%</div>
																				</el-col>
																			</el-row>
																			<el-row>
																				<el-col :span="24">
																					<div>下跌率: 35%</div>
																				</el-col>
																			</el-row>
																		</el-col>
																		<el-col :span="5">
																			<el-row>
																				<el-col :span="24">
																					<div>持平率: 17%</div>
																				</el-col>
																			</el-row>
																			<el-row>
																				<el-col :span="24">
																					<div>持平率: 17%</div>
																				</el-col>
																			</el-row>
																		</el-col>
																		<el-col :span="5">
																			<el-row>
																				<el-col :span="24">
																					<div>其他: 待定...</div>
																				</el-col>
																			</el-row>
																			<el-row>
																				<el-col :span="24">
																					<div>其他: 待定...</div>
																				</el-col>
																			</el-row>
																		</el-col>
																		<el-col :span="2">
																			<el-row>
																				<el-col :span="24">
																					<div style="margin-right: 40px;">
																						<el-button v-show="button2show" icon="el-icon-view" circle @click="showMatplotlib"></el-button>
																					</div>
																				</el-col>
																			</el-row>
																		</el-col>
																	</el-row>
																</div>
																<!-- <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div> -->
															</el-collapse-item>
															<el-collapse-item title="反馈 Feedback">
																<div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
																<div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
															</el-collapse-item>
															<el-collapse-item title="效率 Efficiency">
																<div>简化流程：设计简洁直观的操作流程；</div>
																<div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
																<div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
															</el-collapse-item>
															<el-collapse-item title="可控 Controllability">
																<div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
																<div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
															</el-collapse-item>
														</el-collapse>
													</el-dialog>
												</div>
											</transition>
										</div>
									</el-col>
								</el-row>
								<el-dialog
										title="收货地址" 
										:visible.sync="dialogTableVisible"
										:close="closeDialog">
									<el-table
											ref="multipleTable"
											:data="tableData"
											tooltip-effect="dark"
											style="width: 100%"
											@selection-change="handleSelectionChange">
											<el-table-column
												type="selection"
												width="55"
												:selectable="checkSelectable">
											</el-table-column>
											<el-table-column
												label="日期"
												width="120">
												<template slot-scope="scope">{{ scope.row.date }}</template>
											</el-table-column>
											<el-table-column
												prop="name"
												label="姓名"
												width="120">
											</el-table-column>
											<el-table-column
												prop="address"
												label="地址"
												show-overflow-tooltip>
											</el-table-column>
										</el-table>
										<div style="margin-top: 20px">
											<el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
											<el-button @click="toggleSelection()">取消选择</el-button>
												<el-button type="primary" style="margin: 0 40px 0 210px;" @click="handleSubmit()">提交</el-button>
										</div>
								</el-dialog>
								<!-- <el-button type="text" @click="dialog2Visible = true">打开嵌套表单的 Dialog</el-button> -->
								<el-dialog title="收货地址" 
									:visible.sync="dialog2Visible"
									:close-on-click-modal="false">
									<div>
										<el-row>
											<el-col :span="10">
												<div class="block" style="margin-left: 15px;">
													<span class="demonstration">请选择日期与时间</span>
													<el-date-picker
														v-model="dateValue"
														align="right"
														type="date"
														placeholder="选择日期"
														@change="dateChangetest()"
														:picker-options="datePickerOptions">
													</el-date-picker>
												</div>
											</el-col>
											<el-col :span="1">
												<div style="margin-top: 25px;"><i class="el-icon-arrow-right"></i>
												</div>
											</el-col>
											<el-col :span="8">
												<div>
													<span class="demonstration" style="visibility: hidden;">选日期</span>
													<el-time-picker
														v-model="timeValue"
														:picker-options="{
															selectableRange: '9:45:00 - 10:45:00'
														}"
														placeholder="任意时间点">
													</el-time-picker>
												</div>
											</el-col>
										</el-row>
										<el-row>
											<el-col :span="24">
												<el-collapse-transition>
												<div v-show="dialog2Show" style="margin-top: 40px;">
													<div style="margin-left: 20px;">
														<el-row>
															<el-col :span="6">
																<div style="margin-top: 10px;">
																	<el-switch
																		style="display: block"
																		v-model="stateSwitch"
																		active-color="#13ce66"
																		inactive-color="#ff4949"
																		active-text="上涨"
																		inactive-text="下跌">
																	</el-switch>
																</div>
															</el-col>
															<el-col :span="18">
																<div class="block" style="margin-right: 60px;">
																	<!-- <span class="demonstration">格式化 Tooltip</span> -->
																	<el-slider v-model="sliderValue" :format-tooltip="formatTooltip"></el-slider>
																</div>
															</el-col>
														</el-row>
													</div>
													<el-row>
														<el-col :span="24">
															<div style="text-align: center;">
																<el-button type="text" @click="advanveDialog = !advanveDialog"><font size="2">高&nbsp;级&nbsp;<i class="el-icon-caret-bottom"></i></font></el-button>
																<el-collapse-transition>
																	<div v-show="advanveDialog">
																		<el-row>
																			<el-col :span="24">
																				<div style="height: 20px;">&nbsp;</div>
																			</el-col>
																		</el-row>
																		<el-radio v-model="radio" label="1">Logistic回归</el-radio>
																		<el-radio v-model="radio" label="2">支持向量机(SVM)</el-radio>
																		<el-radio v-model="radio" label="3">贝叶斯网络 (推荐)</el-radio>
																		<el-radio v-model="radio" label="4">神经网络</el-radio>
																	</div>	
																</el-collapse-transition>
															</div>
														</el-col>
													</el-row>
												</div>
											</el-collapse-transition>
											</el-col>
										</el-row>
									</div>
									<div slot="footer" class="dialog-footer">
										<el-button @click="dialog2Visible = false">取 消</el-button>
										<el-button type="primary" 
											@click="toAnalysis()"
											v-loading.fullscreen.lock="fullscreenLoading">确 定</el-button>
									</div>
								</el-dialog>
							</div>
						</el-col>
				</el-row>
			</div>
			<el-row>
				<el-col :span="12">
					<Chart1/>
				</el-col>
				<el-col :span="12">
					<div style="margin: 130px 70px 100px 70px;">
					<p style="line-height: 28px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
					 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					 Ut enim ad minim veniam, quis nostrud exercitation ullamco 
					 laboris nisi ut aliquip ex ea commodo consequat. 
					 Duis aute irure dolor in reprehenderit in voluptate velit
						esse cillum dolore eu fugiat nulla pariatur. 
						Excepteur sint occaecat cupidatat non proident, 
						sunt in culpa qui officia deserunt mollit anim id</p>
					</div>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<div style="margin: 220px 40px 100px 100px;"><!-- margin: 220px 30px 80px 70px; -->
					<p style="line-height: 28px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
					 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					 Ut enim ad minim veniam, quis nostrud exercitation ullamco 
					 laboris nisi ut aliquip ex ea commodo consequat. 
					 Duis aute irure dolor in reprehenderit in voluptate velit
						esse cillum dolore eu fugiat nulla pariatur. 
						Excepteur sint occaecat cupidatat non proident, 
						sunt in culpa qui officia deserunt mollit anim id</p>
					</div>
				</el-col>
				<el-col :span="12">
					<div style="margin: 10px 30px 30px 5px;">
						<Chart2/>
						<!-- <Chart21/> -->
					</div>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	import Chart1 from '../components/content/analysis/Chart1.vue'
	import Chart2 from '../components/content/analysis/Chart2.vue'
	//import Chart3 from '../components/content/analysis/Chart3.vue'
	export default {
		data() {
			return {
				"viewPicture":[
					{"src":require('../assets/analysis/graph1.png')}
				],
				
				dialog2Show: false,
				
				stateSwitch: true,
				
				sliderValue: 50,
				
				advanveDialog: false,
				
				radio: '3',
				
				fullscreenLoading: false,
				
				button2show: false,
				
				resultDiaglogShow: false,
				
					/* tableData */
				tableData: [{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: [],
        dialogTableVisible: false,
				dialog2Visible: false,
				
				/* DatePicker */
				datePickerOptions: {
				  disabledDate(time) {
				    return time.getTime() > Date.now();
				  },
				  shortcuts: [{
				    text: '今天',
				    onClick(picker) {
				      picker.$emit('pick', new Date());
				    }
				  }, {
				    text: '昨天',
				    onClick(picker) {
				      const date = new Date();
				      date.setTime(date.getTime() - 3600 * 1000 * 24);
				      picker.$emit('pick', date);
				    }
				  }, {
				    text: '一周前',
				    onClick(picker) {
				      const date = new Date();
				      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
				      picker.$emit('pick', date);
				    }
				  }]
				},
				dateValue: '',
				
				/* TimePicker */
				timeValue: new Date(2019, 1, 2, 9, 46),
			};
		},
		components:{
			Chart1, Chart2
		},
		methods: {
      toggleSelection(rows) 
			{
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
			formatTooltip(val) 
			{
        return val / 100;
      },
      handleSelectionChange(val) 
			{
        this.multipleSelection = val;
				console.log(this.multipleSelection)
      },
			closeDialog(){
				console.log("调用了close方法....")
			},
			checkSelectable () 
			{
        if(arguments[1]===3){
          return false;
        }else{
          return true;
        }
      },
			showDialog2() 
			{
				this.dialog2Visible = "true";
			},
			handleSubmit() 
			{
				var checkedNum = this.multipleSelection.length;
				this.multipleSelection.forEach((item, index) => {
					console.log(item.name + ',' + item.address);
				})
				this.dialogTableVisible = !this.dialogTableVisible;
				setTimeout(() =>{
				this.dialog2Visible = !this.dialog2Visible
				},600);
			},
			dateChangetest()
			{
				console.log(this.dateValue);
				this.checkPickerState()
			},
			checkPickerState()
			{
				if(this.dateValue && this.timeValue)
				{
					console.log("checked...");
					this.dialog2Show = true;
				} else
				{
					this.dialog2Show = false;
				}
			},
			toAnalysis() 
			{
				this.dialog2Visible = false;
				setTimeout(() => {
				  this.fullscreenLoading = true;
				}, 600);
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 1500);
				setTimeout(() => {
				  this.resultNotify();
				}, 1700);
			},
			resultNotify() 
			{
        this.$notify({
          title: '分析完毕',
          message: '点进下方按钮查看您的全部分析结果。',
          type: 'success'
        });
				this.button2show = true;
      },
			showMatplotlib()
			{
				this.resultDiaglogShow = false;
				this.$router.push({path:'/Analysis/showgraph'});
			}
    }
	}
</script>

<style>
/* 	.viewPic1{
		margin: 20px auto 20px 40px;
		position: relative; z-index: 1;
	}
	.viewPic2{
		position: relative; z-index: 2;
	}
	.viewPic3{
		margin: 40px auto 40px 40px;
	} */
	.mainDiv{
		background: #EAE4E8;
	}
</style>
