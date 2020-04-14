import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Container, Grid } from '@material-ui/core';
// My components
import Scoreboard from '../components/Scoreboard';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Container>
			<Grid container spacing={3}>
				<Grid container item xs={6}>
					<Scoreboard />
				</Grid>
				<Grid container item xs={6}>
					<Scoreboard />
				</Grid>
			</Grid>
		</Container>
	</Layout>
);

export default IndexPage;
