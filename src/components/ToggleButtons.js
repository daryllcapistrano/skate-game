import React from 'react';
import Button from '@material-ui/core/Button';

const gameLetters = [ 's', 'k', 'a', 't', 'e' ];

// const initialScore = { score: [] };

// if user score is equal to 5, user loses
// user can click each button on and off

function handleClick() {
	console.log(this);
}

function ToggleButtons() {
	return <div>{gameLetters.map((letter) => <Button onClick={handleClick}>{letter}</Button>)}</div>;
}

export default ToggleButtons;
