import React, { Component } from 'react';

export default class Footer extends Component {
	render() {
		return <footer>© {new Date().getFullYear()} something here</footer>;
	}
}
