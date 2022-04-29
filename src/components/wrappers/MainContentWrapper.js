import classes from './MainContentWrapper.module.css';

function MainContentWrapper(props) {
  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>{props.title}</h2>
      <hr />
      {props.children}
    </div>
  );
}

export default MainContentWrapper;
