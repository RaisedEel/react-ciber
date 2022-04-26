import { Link } from 'react-router-dom';

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
        title='CLIENTES'
        path='/clientes'
        imagePath='/assets/clientes.png'
      />
      <MainMenuOption
        title='RENTAS'
        path='/rentas'
        imagePath='/assets/rentas.png'
      />
      <MainMenuOption
        title='EQUIPOS'
        path='/computadoras'
        imagePath='/assets/computadoras.png'
      />
    </nav>
  );
}

export default MainMenu;
