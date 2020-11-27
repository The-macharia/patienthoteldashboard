import React, { PureComponent } from 'react';
import ReactEcharts from 'echarts-for-react';

export default class Pie extends PureComponent {
	getOption = () => ({
		color: ['#00D6FF', '#F83437', '#2CDA7A'],
		grid: {
			top: 10,
			left: '0%',
			right: '0%',
		},
		title: {
			text: 'Bookings Chart',
			left: 'center',
			top: 20,
		},

		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b} : {c} ({d}%)',
		},

		visualMap: {
			show: false,
			min: 80,
			max: 600,
			inRange: {
				colorLightness: [0, 1],
			},
		},
		series: [
			{
				name: 'Bookings',
				type: 'pie',
				radius: '80%',
				center: ['50%', '50%'],
				data: [
					{ value: 180, name: 'Booked' },
					{ value: 200, name: 'Empty' },
					{ value: 120, name: 'Canceled' },
				].sort(function (a, b) {
					return a.value - b.value;
				}),
				roseType: 'radius',
				label: {
					color: 'rgba(255, 255, 255, 0.3)',
				},
				labelLine: {
					lineStyle: {
						color: 'rgba(255, 255, 255, 0.3)',
					},
					smooth: 0.2,
					length: 10,
					length2: 20,
				},
				itemStyle: {
					shadowBlur: 200,
					shadowColor: 'rgba(0, 0, 0, 0.5)',
				},
				animationType: 'scale',
				animationEasing: 'elasticOut',
				animationDelay: function (idx) {
					return Math.random() * 200;
				},
			},
		],
	});

	render() {
		return (
			<div className='examples'>
				<div className='parent'>
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
