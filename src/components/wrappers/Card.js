import classes from './Card.module.css';

// Give a card style to the component
function Card(props) {
	return (
		<div
			className={`${classes.card} ${props.className ? props.className : ''}`}
			style={props.style}
		>
			{props.children}
		</div>
	);
}

export default Card;
