import { useState } from 'react';

import MainHeader from './MainHeader';
import MainMenu from './MainMenu';
import classes from './Layout.module.css';

// Each page has exactly the same layout and menu
function Layout(props) {
	const [hideMenu, setHideMenu] = useState(true);

	const controlMenuHandler = () => {
		setHideMenu((prevState) => !prevState);
	};

	return (
		<div className={classes.layout}>
			<MainHeader />
			<div className={classes.content}>
				<div className={classes['ctn-btn']}>
					<button className={classes['btn-menu']} onClick={controlMenuHandler}>
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
				</div>
				{!hideMenu && <MainMenu />}
				<main className={classes.main}>{props.children}</main>
			</div>
		</div>
	);
}

export default Layout;
