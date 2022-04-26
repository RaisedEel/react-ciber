import MainHeader from './MainHeader';
import classes from './Layout.module.css'
import MainMenu from './MainMenu';

function Layout(props) {
  return (
    <div className={classes.layout}>
      <MainHeader />
      <div className={classes.content}>
        <MainMenu />
        <main>{props.children}</main>
      </div>
    </div>
  );
}

export default Layout;
