import React from 'react';

import {
	Layout,
	Menu,
	Typography,
	Row,
	Col,
	Avatar,
	Image,
	Statistic,
} from 'antd';
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	HomeOutlined,
	CalendarOutlined,
	SettingOutlined,
	BookOutlined,
	LineChartOutlined,
	UnorderedListOutlined,
	MoneyCollectOutlined,
} from '@ant-design/icons';

// components
import BarChart from 'components/Charts/BarChart';
import Pie from 'components/Charts/Pie';

// Img
import Logo from 'assets/img/logo-16.svg';

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

export default class SiderDemo extends React.Component {
	state = {
		collapsed: false,
	};

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	};

	render() {
		return (
			<Layout>
				<Sider trigger={null} collapsible collapsed={this.state.collapsed}>
					{/* <div className='logo' /> */}
					<Image src={Logo} />
					<Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
						<Menu.Item key='1' icon={<HomeOutlined />}>
							Home
						</Menu.Item>
						<Menu.Item key='2' icon={<UnorderedListOutlined />}>
							Rooms
						</Menu.Item>
						<Menu.Item key='3' icon={<BookOutlined />}>
							Bookings
						</Menu.Item>
						<Menu.Item key='4' icon={<LineChartOutlined />}>
							Reports
						</Menu.Item>
						<Menu.Item key='5' icon={<CalendarOutlined />}>
							Calendar
						</Menu.Item>
						<Menu.Item key='6' icon={<SettingOutlined />}>
							Settings
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout>
					<Header
						style={{
							backgroundColor: '#fff',
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							padding: '20px',
						}}>
						{React.createElement(
							this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
							{ style: { fontSize: '20px' }, onClick: this.toggle }
						)}
						<Avatar
							style={{ float: 'right' }}
							src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
						/>
					</Header>
					<Content
						style={{
							margin: '20px 15px',
							padding: '20px 20px',
							minHeight: 280,
							backgroundColor: '#fff',
						}}>
						<Title level={4}>Welcome to your Dashboard</Title>
						<Row justify='space-between' width='100%'>
							<Col
								style={{
									padding: '20px 10px',
									backgroundColor: 'rgba(234, 235, 241, .5)',
									borderRadius: '10px',
								}}
								flex='0 0 75%'>
								<BarChart />
							</Col>
							<Col
								style={{
									padding: '20px 20px',
									backgroundColor: 'rgba(234, 235, 241, .5)',
									borderRadius: '10px',
								}}
								flex='0 0 24%'>
								<Row gutter={16}>
									<Col span={24}>
										<Statistic
											title='Room Reservations'
											value={200}
											prefix={<HomeOutlined />}
										/>
									</Col>
									<Col span={24} style={{ marginTop: '15px' }}>
										<Statistic
											title='Income Balance (KSH)'
											value={50000}
											precision={2}
											prefix={<MoneyCollectOutlined />}
										/>
									</Col>
								</Row>
								<Pie />
							</Col>
						</Row>
					</Content>
				</Layout>
			</Layout>
		);
	}
}

// ReactDOM.render(<SiderDemo />, mountNode);
