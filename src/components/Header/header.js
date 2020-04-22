import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link } from 'gatsby';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	}
}));

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ``
};

export default function Header({ siteTitle }) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static" color="transparent">
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
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
						</h2>
					</Typography>
					<Container>
						<p>a skateboard game tracker</p>
					</Container>
					<Link to="/add-on">Add On</Link>
					<Link to="/trick-generator">Trick Generator</Link>
					<Link to="/spot-bible">Spot Bible</Link>
				</Toolbar>
			</AppBar>
		</div>
	);
}
