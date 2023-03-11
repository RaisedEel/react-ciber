import classes from './MainHeader.module.css';
import logo from '../../assets/manager-logo.png';
import { useSelector } from 'react-redux';

function MainHeader() {
	const active = useSelector((state) => state.panelSummary.active);
	const inactive = useSelector((state) => state.panelSummary.inactive);
	const alerts = useSelector((state) => state.panelSummary.alerts);

	return (
		<header className={classes.header}>
			<img className={classes.logo} src={logo} alt='Logo de Cyber Manager' />
			<h1 className={classes.title}>Cyber Manager</h1>
			<div>
				FREE: {inactive} OCCUPIED: {active} FINISHED: {alerts.length}
			</div>
			<div className={classes.image} />
		</header>
	);
}

export default MainHeader;
