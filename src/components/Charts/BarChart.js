import React, { PureComponent } from 'react';
import ReactEcharts from 'echarts-for-react';

export default class BarChart extends PureComponent {
	getOption = () => ({
		// color: ['#F83437', '#193AD5'],
		color: ['#1890FF', '#00C3FF'],
		// F20C00
		grid: {
			top: 80,
			left: '9%',
			right: '10%',
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				crossStyle: {
					color: '#999',
				},
			},
		},
		toolbox: {
			show: true,
			feature: {
				mark: { show: true },
				magicType: {
					show: true,
					type: ['line', 'bar'],
					title: {
						line: 'Line',
						bar: 'Bar',
					},
				},
				restore: { show: true, title: 'Restore' },
				saveAsImage: { show: true, title: 'Save as Image' },
			},
		},
		legend: {
			data: ['Booking Activity', 'Revenue'],
			show: 'true',
			fontSize: 14,
		},
		xAxis: {
			show: true,
			name: 'Days',
			nameTextStyle: {
				fontSize: 14,
			},
			nameLocation: 'center',
			data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
			nameGap: 40,
		},
		yAxis: [
			{
				type: 'value',
				name: 'Booking Activity',
				nameTextStyle: {
					fontSize: 14,
				},
				min: 0,
				max: 100,
				interval: 20,
				axisLabel: {
					formatter: '{value} People',
				},
			},
			{
				type: 'value',
				name: 'Revenue',
				nameTextStyle: {
					fontSize: 14,
				},
				min: 0,
				max: 25000,
				interval: 5000,
				axisLabel: {
					formatter: 'KSH. {value}',
				},
			},
		],
		series: [
			{
				name: 'Booking Activity',
				type: 'bar',
				data: [50, 50, 20, 36, 10, 10, 20],
			},
			{
				name: 'Revenue',
				type: 'line',
				yAxisIndex: 1,
				data: [20000, 20000, 8000, 14400, 4000, 4000, 8000],
			},
		],
	});

	render() {
		return (
			<div className='examples'>
				<div className='parent'>
					{/* <label> SVG renderer chart </label> */}
					<ReactEcharts
						option={this.getOption()}
						style={{ height: '380px', width: '100%' }}
						opts={{ renderer: 'svg' }}
						className='react_for_echarts'
					/>
				</div>
			</div>
		);
	}
}
