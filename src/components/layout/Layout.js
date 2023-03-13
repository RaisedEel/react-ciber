import { useRef, useState } from 'react';

import MainHeader from './MainHeader';
import MainMenu from './MainMenu';
import classes from './Layout.module.css';
import useOutsideAlerter from '../../hooks/useOutsideAlerter';

// Each page has the same exact layout and menu
function Layout(props) {
	const [hideMenu, setHideMenu] = useState(true);
	const menuRef = useRef(null);

	const controlMenuHandler = () => {
		setHideMenu((prevState) => !prevState);
	};

	useOutsideAlerter(menuRef, controlMenuHandler);

	return (
		<div className={classes.layout}>
			<MainHeader />
			<div className={classes.container}>
				<button
					title={hideMenu ? 'Abrir menú' : 'Cerrar menú'}
					className={classes['btn-menu']}
					onMouseDown={(e) => {
						e.stopPropagation();
						controlMenuHandler();
					}}
				>
					<p className={hideMenu ? '' : classes.rotate}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className={classes['arrow-icon']}
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5'
							/>
						</svg>
					</p>
				</button>
				{!hideMenu && <MainMenu ref={menuRef} />}
				<main className={classes.main}>{props.children}</main>
			</div>
		</div>
	);
}

export default Layout;
