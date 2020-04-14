import React, { Component } from 'react';
import { Container, Paper } from '@material-ui/core';

import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

export default class Scoreboard extends Component {
	render() {
		return (
			<Paper elevation={2} style={{ textAlign: 'center', margin: 'auto' }}>
				<Container>
					<AwesomeButton type="primary">S</AwesomeButton>
					<AwesomeButton type="primary">K</AwesomeButton>
					<AwesomeButton type="primary">A</AwesomeButton>
					<AwesomeButton type="primary">T</AwesomeButton>
					<AwesomeButton type="primary">E</AwesomeButton>
				</Container>
			</Paper>
		);
	}
}
