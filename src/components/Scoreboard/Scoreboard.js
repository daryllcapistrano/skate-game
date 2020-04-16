import React, { Component } from 'react';
import { Container, Paper, Grid } from '@material-ui/core';

import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

export default class Scoreboard extends Component {
	render() {
		return (
			<Container style={{ margin: `auto`, paddingBottom: '1rem' }}>
				<Paper elevation={2} style={{ margin: 'auto', justifyContent: `space-between` }}>
					<Grid container spacing={3} style={{ padding: '1rem' }}>
						<Grid item xs={6}>
							<AwesomeButton type="primary" size="large">
								player 1 scoreboard
							</AwesomeButton>
						</Grid>
						<Grid item xs={6}>
							<AwesomeButton type="primary" size="large">
								player 2 scoreboard
							</AwesomeButton>
						</Grid>
					</Grid>
				</Paper>
			</Container>
		);
	}
}
