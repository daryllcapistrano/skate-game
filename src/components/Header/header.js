import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import { Container } from '@material-ui/core';

const Header = ({ siteTitle }) => (
	<header
		style={{
			background: `black`,
			marginBottom: `1.45rem`
		}}
	>
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
						color: `white`,
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
	</header>
);

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ``
};

export default Header;
