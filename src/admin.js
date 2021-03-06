import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Navleft from './components/NavLeft/Navleft'

import './style/common.less'

export default class Admin extends Component {
	render() {
		return (
			<Row className="container-admin">
				<Col span="3" className="nav-left">
					<Navleft />
				</Col>
				<Col span="21" className="main">
					<Header>Header</Header>
					<Row className="content">{this.props.children}</Row>
					<Footer>footer</Footer>
				</Col>
			</Row>
		)
	}
}
