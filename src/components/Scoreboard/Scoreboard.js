import React, { Component } from 'react';
import { Container, Paper, Grid } from '@material-ui/core';
// import { AwesomeButton } from 'react-awesome-button';
// import 'react-awesome-button/dist/styles.css';

export default class Scoreboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			initialScore: 0
		};
	}

	IncrementScore = () => {
		this.setState({ initialScore: this.state.initialScore + 1 });
	};

	DecrementScore = () => {
		this.setState({ initialScore: this.state.initialScore - 1 });
	};

	render() {
		return (
			<Container>
				<Paper elevation={2}>
					<Grid container spacing={1}>
						<Grid item xs={12}>
							<h1>player 1</h1>
						</Grid>
						<Grid item xs={12}>
							<h3>{this.state.initialScore}</h3>
						</Grid>
						<Grid item xs={12}>
							<button onClick={this.IncrementScore}>make</button>
						</Grid>
						<Grid item xs={12}>
							<button onClick={this.DecrementScore}>miss</button>
						</Grid>
					</Grid>
				</Paper>
			</Container>
		);
	}
}
