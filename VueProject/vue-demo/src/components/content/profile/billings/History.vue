<template>
	<div>
		<div>
			<el-table
			  :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
			  style="width: 100%">
				<el-table-column
				  prop="description"
				  label="Description"
				  width="200">
				</el-table-column>
				<el-table-column
				  prop="date"
				  label="Date"
				  width="200">
				</el-table-column>
			  <el-table-column
			    prop="amount"
			    label="Amount"
			    width="150">
			  </el-table-column>
			  <el-table-column
			    prop="balance"
			    label="Balance"
			    width="150">
			  </el-table-column>
				<el-table-column
				  prop="status"
				  label="Status"
				  width="100">
				</el-table-column>
				<el-table-column
				  label=""
				  width="100">
					<template slot-scope="scope">
						<FontAwesomeIcon :icon="['fas', 'file']" size="lg"></FontAwesomeIcon>
					</template>
				</el-table-column>
			</el-table>
			<el-pagination
				background
				layout="prev, pager, next"
				page-size="2"
				:total="tableData.length"
				@current-change="handleCurrentChange">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	import {FontAwesomeIcon, FontAwesomeLayers} from '@fortawesome/vue-fontawesome';
	export default {
      data() {
        return {
          tableData: [{
            description: 'Invoice #8244424',
            date: '2019-03-01',
						amount: '$5.00',
						balance: '$-0.67',
						status: 'completed',
          }, {
            description: 'Invoice #7939637',
            date: '2019-02-01',
            amount: '$5.07',
            balance: '$-0.67',
            status: 'completed',
          }, {
            description: 'Alipay',
            date: '2019-01-31',
            amount: '$-10.00',
            balance: '$-5.67',
            status: 'completed',
          }, {
            description: 'Invoice #7642438',
            date: '2018-01-01',
            amount: '$-10.74',
            balance: '$-0.74',
            status: 'completed',
          }],
					currentPage: '1',
					pagesize: '2',
        }
      },
			components:{
				FontAwesomeIcon,
			},
			methods: {
				handleCurrentChange(currentPage) {
					this.currentPage = currentPage;
					console.log(this.currentPage)  //点击第几页
				}
			}
    }
</script>

<style>
</style>
