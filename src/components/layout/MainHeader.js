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
			<div className={classes.summary}>
				<div className={classes['summary-item']}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className={classes.icon}
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25'
						/>
					</svg>
					{inactive}
				</div>
				<div className={classes['summary-item']}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className={classes.icon}
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z'
						/>
					</svg>
					{active}
				</div>
				<div
					className={classes['summary-item']}
					style={{ color: alerts.length > 0 ? '#e03131' : '' }}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className={classes.icon}
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z'
						/>
					</svg>
					{alerts.length}
				</div>
			</div>
		</header>
	);
}

export default MainHeader;
