import { Fragment } from 'react';
import classes from './DeviceTimer.module.css';

// Created to handle the logic of the conversion from just minutes to hours and minutes
function DeviceTimer(props) {
	let hours = props.time / 60;
	let minutes = Math.floor(props.time % 60);

	if (props.counter) {
		hours = Math.floor(hours);
	} else {
		hours = Math.floor(hours % 24);
	}

	return (
		<Fragment>
			{hours} <span className={props.counting ? classes.animation : ''}>:</span>{' '}
			{minutes < 10 ? '0' + minutes : minutes}
			{props.counter ? ' Hrs' : ''}
		</Fragment>
	);
}

export default DeviceTimer;
