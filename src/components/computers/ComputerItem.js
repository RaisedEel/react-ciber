import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import useModal from '../../hooks/useModal';

import { computersActions } from '../../store/computers-slice';
import { panelActions } from '../../store/panel-slice';
import Confirm from '../ui/Confirm';
import Card from '../wrappers/Card';
import classes from './ComputerItem.module.css';

function ComputerItem(props) {
  const dispatch = useDispatch();
  const {
    state: confirmDelete,
    show: showConfirmDelete,
    hide: hideConfirmDelete,
  } = useModal();

  const deleteComputerHandler = () => {
    dispatch(computersActions.removeComputer(props.name));
    dispatch(panelActions.removeDevice(props.name));
    hideConfirmDelete();
  };

  return (
    <Fragment>
      {confirmDelete && (
        <Confirm
          title='Eliminar Registro'
          message='¿Esta seguro que desea eliminar este registro?'
          onCancel={hideConfirmDelete}
          onConfirm={deleteComputerHandler}
        />
      )}
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
            <button className='red-button' onClick={showConfirmDelete}>
              &#128465;
            </button>
          </div>
        </Card>
      </li>
    </Fragment>
  );
}

export default ComputerItem;
