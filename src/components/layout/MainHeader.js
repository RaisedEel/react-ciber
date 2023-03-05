import classes from './MainHeader.module.css';

function MainHeader() {
	return (
		<header className={classes.header}>
			<h1 className={classes.title}>Cyber Manager</h1>
			<div className={classes.image} />
		</header>
	);
}

export default MainHeader;
