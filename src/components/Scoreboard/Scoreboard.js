import React, { Component } from 'react';
import { Container, Divider, Paper, Chip } from '@material-ui/core';
import MakeBailButton from '../Buttons/MakeBailButton';

export default class Scoreboard extends Component {
	render() {
		return (
			<Paper elevation={2} style={{ textAlign: 'center', margin: 'auto' }}>
				<Container>
					<Chip />
				</Container>
				<Divider light />
				<Container>
					<MakeBailButton />
				</Container>
			</Paper>
		);
	}
}
