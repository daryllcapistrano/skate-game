import React from 'react';
import { Container, Paper, Grid, Divider, List, ListItem, ListItemText } from '@material-ui/core';

export default function playerstats() {
	return (
		<Container>
			<Paper elevation={2}>
				<Container>
					<Grid container>
						<Grid item xs={12} sm={6}>
							<List>
								<ListItem>
									<ListItemText primary="Player Name: " />
								</ListItem>
								<Divider />
								<ListItem>
									<ListItemText primary="Stance: " />
								</ListItem>
								<Divider />
								<ListItem>
									<ListItemText primary="Tricks Made: " />
								</ListItem>
								<Divider />
								<ListItem>
									<ListItemText primary="Tricks Bailed:" />
								</ListItem>
							</List>
						</Grid>
						<Divider />
						<Grid item xs={12} sm={6}>
							<List>
								<ListItem>
									<ListItemText primary="Player Name: " />
								</ListItem>
								<Divider />
								<ListItem>
									<ListItemText primary="Stance: " />
								</ListItem>
								<Divider />
								<ListItem>
									<ListItemText primary="Tricks Made: " />
								</ListItem>
								<Divider />
								<ListItem>
									<ListItemText primary="Tricks Bailed:" />
								</ListItem>
							</List>
						</Grid>
					</Grid>
				</Container>
			</Paper>
		</Container>
	);
}
