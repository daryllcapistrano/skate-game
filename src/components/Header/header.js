import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import { Container } from '@material-ui/core';

const Header = ({ siteTitle }) => (
	<header
		style={{
			background: `#fafafa`,
			marginBottom: `1.45rem`
		}}
	>
		<Container>
			<Container
				style={{
					margin: `0 auto`,
					maxWidth: `960`,
					padding: `1rem`
				}}
			>
				<h2 style={{ margin: 0 }}>
					<Link
						to="/"
						style={{
							color: `black`,
							textDecoration: `none`
						}}
					>
						{siteTitle}
					</Link>
					<Container>
						<p style={{ color: `gray` }}> - game tracker</p>
					</Container>
				</h2>
			</Container>
			<Container>
				<Link to="/trick-generator">trick generator</Link>
				<Link to="/add-on">add on</Link>
				<Link to="/spot-bible">spot bible</Link>
			</Container>
		</Container>
	</header>
);

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ``
};

export default Header;
