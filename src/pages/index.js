import React from 'react';

import Layout from '../components/Layout/layout';
import SEO from '../components/seo';
// My components
import Scoreboard from '../components/Scoreboard/Scoreboard';
// import PlayerStats from '../components/playerstats';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Scoreboard />
		{/* <PlayerStats /> */}
	</Layout>
);

export default IndexPage;
