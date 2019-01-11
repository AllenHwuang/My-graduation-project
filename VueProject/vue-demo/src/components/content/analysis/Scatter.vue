<template>
	<view>
		<div style="height: 200px; width: 680px;">
		  <div id='myChart' ref="myChart"></div>
		</div>
	</view>
</template>

<script>
	import echarts from 'echarts'
	export default {
		data() {
			return {
				symbolSize : 2.5,
				option = {
        grid3D: {},
        xAxis3D: {
            type: 'category'
        },
        yAxis3D: {},
        zAxis3D: {},
        dataset: {
            dimensions: [
                'Income',
                'Life Expectancy',
                'Population',
                'Country',
                {name: 'Year', type: 'ordinal'}
            ],
            source: data
        },
        series: [
            {
                type: 'scatter3D',
                symbolSize: symbolSize,
                encode: {
                    x: 'Country',
                    y: 'Life Expectancy',
                    z: 'Income',
                    tooltip: [0, 1, 2, 3, 4]
                }
            }
        ]
				};
			};
		}
	}
</script>

<style>

</style>
