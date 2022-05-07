import { Link } from 'react-router-dom';

import classes from './MainMenuOption.module.css';

function MainMenuOption(props) {
  return (
    <Link to={props.path} className={classes['opt-menu']}>
      <img src={props.imagePath} alt={props.title} />
      <h5>{props.title}</h5>
    </Link>
  );
}

export default MainMenuOption;
