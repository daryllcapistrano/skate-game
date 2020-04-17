import React from 'react';

import Layout from '../components/Layout/layout';
import SEO from '../components/seo';
// My components
// import Scoreboard from '../components/Scoreboard/Scoreboard';
// import PlayerStats from '../components/playerstats';

const TrickGenerator = () => (
	<Layout>
		<SEO title="Home" />
		{/* <Scoreboard />
		<PlayerStats /> */}
		<h1>trick generator page</h1>
	</Layout>
);

export default TrickGenerator;
