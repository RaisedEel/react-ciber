import classes from './MainContentWrapper.module.css';

// Give a title and margin to the main section
function MainContentWrapper(props) {
	return (
		<div className={classes.wrapper}>
			<h2 className={`${classes.title} header`}>{props.title}</h2>
			<hr />
			{props.children}
		</div>
	);
}

export default MainContentWrapper;
