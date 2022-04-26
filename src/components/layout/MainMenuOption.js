import { Link } from 'react-router-dom';

import classes from './MainMenuOption.module.css';

function MainMenuOption(props) {
  return (
    <div className={classes['opt-menu']}>
      <Link to={props.path}>
        <img src={props.imagePath} alt={props.title} />
        <h5>{props.title}</h5>
      </Link>
    </div>
  );
}

export default MainMenuOption;
