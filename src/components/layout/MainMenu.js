import { NavLink } from 'react-router-dom';

import panel from '../../assets/panel.png';
import computadoras from '../../assets/computadoras.png';
import rentas from '../../assets/rentas.png';
import MainMenuOption from './MainMenuOption';
import classes from './MainMenu.module.css';

function MainMenu(props) {
  return (
    <nav className={classes.menu}>
      <h3 className={classes.title}>Menú</h3>
      <NavLink
        className={({ isActive }) => (isActive ? classes.hide : classes.back)}
        to={'/principal'}
      >
        Regresar al menú
      </NavLink>
      <MainMenuOption title='PANEL' path='/panel' imagePath={panel} />
      <MainMenuOption
        title='EQUIPOS'
        path='/computadoras'
        imagePath={computadoras}
      />
      <MainMenuOption title='RENTAS' path='/rentas' imagePath={rentas} />
    </nav>
  );
}

export default MainMenu;
