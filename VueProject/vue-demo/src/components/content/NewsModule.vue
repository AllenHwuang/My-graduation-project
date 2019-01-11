<template>
<div id="newsModuleDiv">
  <el-table
    :data="tableData2"
    style="width: 100%"
		:size="small"
		:show-header="false"
    :row-class-name="tableRowClassName">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
</div>
</template>

<script>
  export default {
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
			tableRowStyle ({row, rowIndex})
			{
				
			}
    },
    data() {
      return {
        tableData2: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
			  /* tableRowStyle:{
					'background-color': '#E3E3E3',
					'height': '5px'
			} */
      }
    }
  }
</script>

<style>
	#newsModuleDiv{
		margin: 50px auto 20px auto;
		width: 80%;
	}
	.el-table .warning-row {
		background: oldlace;
	}
	.el-table .success-row {
		background: #f0f9eb;
	}
</style>