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
            <p className={hideMenu ? '' : classes.rotate}>&#11166;</p>
          </button>
        </div>
        {!hideMenu && <MainMenu />}
        <main className={classes.main}>{props.children}</main>
      </div>
    </div>
  );
}

export default Layout;
