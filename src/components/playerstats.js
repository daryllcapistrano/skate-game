import React from 'react';
import { Container, Paper, Grid } from '@material-ui/core';

export default function playerstats() {
	return (
		<Container>
			<Paper elevation={2}>
				<Container>
					<Grid container>
						<Grid item xs={12} sm={6}>
							<Grid container>
								<Grid item xs={12}>
									Player Name:{' '}
								</Grid>
								<Grid item xs={12}>
									Stance:{' '}
								</Grid>
								<Grid item xs={12}>
									Tricks Landed:{' '}
								</Grid>
								<Grid item xs={12}>
									Tricks Missed:{' '}
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Grid container>
								<Grid item xs={12}>
									Player Name:{' '}
								</Grid>
								<Grid item xs={12}>
									Stance:{' '}
								</Grid>
								<Grid item xs={12}>
									Tricks Landed:{' '}
								</Grid>
								<Grid item xs={12}>
									Tricks Missed:{' '}
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</Paper>
		</Container>
	);
}
