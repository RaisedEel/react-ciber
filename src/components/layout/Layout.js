import MainHeader from './MainHeader';
import classes from './Layout.module.css'

function Layout(props) {
  return (
    <div className={classes.layout}>
      <MainHeader />
      <div className={classes.content}>
        <main>{props.children}</main>
      </div>
    </div>
  );
}

export default Layout;
