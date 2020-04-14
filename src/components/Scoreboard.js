import React, { Component } from 'react';
import { Container, Divider, Paper } from '@material-ui/core';
import MakeBailButton from './MakeBailButton';

export default class Scoreboard extends Component {
	render() {
		return (
			<Paper elevation={2} style={{ textAlign: 'center', margin: 'auto' }}>
				<Container>
					<h5>S.K.A.T.E.</h5>
				</Container>
				<Divider light />
				<Container>
					<MakeBailButton />
				</Container>
			</Paper>
		);
	}
}
