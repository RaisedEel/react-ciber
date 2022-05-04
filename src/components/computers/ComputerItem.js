import Card from '../wrappers/Card';
import classes from './ComputerItem.module.css';

function ComputerItem(props) {
  return (
    <li>
      <Card className={classes.computer}>
        <div className={classes.content}>
          <h3>{props.name}</h3>
          <hr />
          <div className={classes.info}>
            <p>
              <strong>Precio por Hora: </strong>${props.price}
            </p>
            <p>
              <strong>Marca: </strong>
              {props.brand}
            </p>
            <p>
              <strong>Años de Antigüedad: </strong>
              {props.antiquity} años
            </p>
            <p>
              <strong>Ultima Revisión: </strong>
              {props.revision}
            </p>
            <p>
              <strong>Serial: </strong>
              {props.serial}
            </p>
          </div>
          <div className={classes.extras}>
            <strong>Descripción del Equipo: </strong>
            <p>{props.description}</p>
          </div>
        </div>
        <div className={classes.actions}>
          <button onClick={props.onUpdate}>&#128393;</button>
          <button className='red-button' onClick={props.onDelete.bind(null, props.name)}>
            &#128465;
          </button>
        </div>
      </Card>
    </li>
  );
}

export default ComputerItem;
