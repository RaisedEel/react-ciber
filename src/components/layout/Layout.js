import { useState } from 'react';

import MainHeader from './MainHeader';
import classes from './Layout.module.css';
import MainMenu from './MainMenu';

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
            &#11166;
          </button>
        </div>
        {!hideMenu && <MainMenu />}
        <main className={classes.main}>{props.children}</main>
      </div>
    </div>
  );
}

export default Layout;
