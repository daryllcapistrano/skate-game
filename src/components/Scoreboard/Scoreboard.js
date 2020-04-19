import React, { Component } from 'react';
import { Container, Paper, Grid } from '@material-ui/core';

import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

export default class Scoreboard extends Component {
	constructor(props) {
		super(props);
		this.state = { score: 0 };
	}

	IncrementScore = () => {
		this.setState({ score: this.state.score + 1 });
	};

	DecrementScore = () => {
		this.setState({ score: this.state.score - 1 });
	};

	render() {
		return (
			<Container style={{ margin: `auto`, paddingBottom: '1rem' }}>
				<Paper elevation={2} style={{ margin: 'auto', justifyContent: `space-between` }}>
					<Grid container spacing={1} style={{ padding: '1rem' }}>
						<Grid item xs={12}>
							<Grid container>
								<Grid item sm={6}>
									<h1>Player 1: </h1>
									<p>{this.state.score}</p>
								</Grid>
								<Grid item sm={6}>
									<h1>Player 2: </h1>
									<p>{this.state.score}</p>
								</Grid>
							</Grid>
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
							<AwesomeButton type="primary" size="large" onPress={this.IncrementScore}>
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
							<AwesomeButton type="secondary" size="large" onPress={this.DecrementScore}>
								Bail
							</AwesomeButton>
						</Grid>
					</Grid>
				</Paper>
			</Container>
		);
	}
}
