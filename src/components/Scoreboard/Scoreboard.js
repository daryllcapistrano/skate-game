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
						<Grid item xs={12}>
							<Container>Player 1 score: SKATE</Container>
							<Container>Player 2 score: SKATE</Container>
						</Grid>
						<Grid
							item
							xs={12}
							sm={6}
							style={{
								display: `flex`,
								alignItems: `center`,
								justifyContent: `center`
							}}
						>
							<AwesomeButton type="primary" size="large">
								Make
							</AwesomeButton>
						</Grid>
						<Grid
							item
							xs={12}
							sm={6}
							style={{
								display: `flex`,
								alignItems: `center`,
								justifyContent: `center`
							}}
						>
							<AwesomeButton type="secondary" size="large">
								Bail
							</AwesomeButton>
						</Grid>
					</Grid>
				</Paper>
			</Container>
		);
	}
}
