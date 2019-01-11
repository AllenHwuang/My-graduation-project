<template>
	<div>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				sizeValue : '57%',
				symbolSize : 2.5,
				data : [
						["Income", "Life Expectancy", "Population", "Country", "Year"],
						[815, 34.05, 351014, "Australia", 1800],
						[1314, 39, 645526, "Canada", 1800],
						[985, 32, 321675013, "China", 1800],
						[864, 32.2, 345043, "Cuba", 1800],
						[1244, 36.5731262, 977662, "Finland", 1800]
				],
				option : {
				  legend: {},
				  tooltip: {},
				  toolbox: {
				      left: 'center',
				      feature: {
				          dataZoom: {}
				      }
				  },
				  grid: [
				      {right: '', bottom: ''},
				      {left: '', bottom: ''},
				      {right: '', top: ''},
				      {left: '', top: ''}
				  ],
				  xAxis: [
				      {type: 'value', gridIndex: 0, name: 'Income', axisLabel: {rotate: 50, interval: 0}},
				      {type: 'category', gridIndex: 1, name: 'Country', boundaryGap: false, axisLabel: {rotate: 50, interval: 0}},
				      {type: 'value', gridIndex: 2, name: 'Income', axisLabel: {rotate: 50, interval: 0}},
				      {type: 'value', gridIndex: 3, name: 'Life Expectancy', axisLabel: {rotate: 50, interval: 0}}
				  ],
				  yAxis: [
				      {type: 'value', gridIndex: 0, name: 'Life Expectancy'},
				      {type: 'value', gridIndex: 1, name: 'Income'},
				      {type: 'value', gridIndex: 2, name: 'Population'},
				      {type: 'value', gridIndex: 3, name: 'Population'}
				  ],
				  dataset: {
				      dimensions: [
				          'Income',
				          'Life Expectancy',
				          'Population',
				          'Country',
				          {name: 'Year', type: 'ordinal'}
				      ],
				      source: []
				  },
				  series: [
				      {
				          type: 'scatter',
				          symbolSize: [],
				          xAxisIndex: 0,
				          yAxisIndex: 0,
				          encode: {
				              x: 'Income',
				              y: 'Life Expectancy',
				              tooltip: [0, 1, 2, 3, 4]
				          }
				      },
				      {
				          type: 'scatter',
				          symbolSize: [],
				          xAxisIndex: 1,
				          yAxisIndex: 1,
				          encode: {
				              x: 'Country',
				              y: 'Income',
				              tooltip: [0, 1, 2, 3, 4]
				          }
				      },
				      {
				          type: 'scatter',
				          symbolSize: [],
				          xAxisIndex: 2,
				          yAxisIndex: 2,
				          encode: {
				              x: 'Income',
				              y: 'Population',
				              tooltip: [0, 1, 2, 3, 4]
				          }
				      },
				      {
				          type: 'scatter',
				          symbolSize: [],
				          xAxisIndex: 3,
				          yAxisIndex: 3,
				          encode: {
				              x: 'Life Expectancy',
				              y: 'Population',
				              tooltip: [0, 1, 2, 3, 4]
				          }
				      }
				  ]
				},
			}
		},
		created () {
		  // this.test()
		},
		mounted() {
			this.test()
		},
		methods: {
			test() {
				var testv = this.sizeValue;
				var testsize = this.symbolSize;
				console.log("testv:" + testv);
				this.option.grid[0].right = testv;
				this.option.series[0].symbolSize = testsize
				console.log("grid0--right: " + this.option.grid[0].right);
				console.log("serier0--symbolSize: " + this.option.series[0].symbolSize);
		}
	}
}
</script>

<style>

</style>
