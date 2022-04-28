import { Link } from 'react-router-dom';

import panel from '../../assets/panel.png';
import computadoras from '../../assets/computadoras.png';
import rentas from '../../assets/rentas.png'
import MainMenuOption from './MainMenuOption';
import classes from './MainMenu.module.css';

function MainMenu(props) {
  return (
    <nav className={classes.menu}>
      <h3>Menú</h3>
      {props.showBack && (
        <h4>
          <Link to={'/principal'}>Regresar al menú</Link>
        </h4>
      )}
      <MainMenuOption
        title='PANEL'
        path='/panel'
        imagePath={panel}
      />
      <MainMenuOption
        title='EQUIPOS'
        path='/computadoras'
        imagePath={computadoras}
      />
      <MainMenuOption
        title='RENTAS'
        path='/rentas'
        imagePath={rentas}
      />
    </nav>
  );
}

export default MainMenu;
