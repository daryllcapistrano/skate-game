import React, { Component } from 'react';
import { Container, Paper } from '@material-ui/core';

import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

export default class Scoreboard extends Component {
	render() {
		return (
			<Paper elevation={2} style={{ textAlign: 'center', margin: 'auto' }}>
				<Container style={{ padding: '1rem' }}>
					<AwesomeButton type="primary" size="icon">
						S
					</AwesomeButton>
					<AwesomeButton type="primary" size="icon">
						K
					</AwesomeButton>
					<AwesomeButton type="primary" size="icon">
						A
					</AwesomeButton>
					<AwesomeButton type="primary" size="icon">
						T
					</AwesomeButton>
					<AwesomeButton type="primary" size="icon">
						E
					</AwesomeButton>
				</Container>
			</Paper>
		);
	}
}
