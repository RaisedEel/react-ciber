import classes from './MainHeader.module.css';

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.title}>MANEJA TU CIBER CON REACT!</div>
      <div className={classes.image} />
    </header>
  );
}

export default MainHeader;
