import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import useModal from '../../hooks/useModal';

import { rentalsActions } from '../../store/rentals-slice';
import Confirm from '../ui/Confirm';
import Card from '../wrappers/Card';
import classes from './RentalItem.module.css';

function RentalItem(props) {
  const dispatch = useDispatch();
  const {
    state: confirmDelete,
    show: showConfirmDelete,
    hide: hideConfirmDelete,
  } = useModal();

  const deleteRentalHandler = () => {
    dispatch(
      rentalsActions.removeRental(props.id)
    );
  };

  return (
    <Fragment>
      {confirmDelete && (
        <Confirm
          title='Eliminar Renta'
          message='¿Esta seguro que desea eliminar la información de esta Renta?'
          onCancel={hideConfirmDelete}
          onConfirm={deleteRentalHandler}
        />
      )}
      <li>
        <Card className={classes.rental}>
          <p className={classes.name}>{props.name}</p>
          <p className={classes.data}>{props.startTime}</p>
          <p className={classes.data}>{props.endTime}</p>
          <p className={classes.data}>$ {props.price}</p>
          <p className={classes.result}>$ {props.total}</p>
          <div className={classes.actions}>
            <button className='red-button' onClick={showConfirmDelete}>
              &#128465;
            </button>
          </div>
        </Card>
      </li>
    </Fragment>
  );
}

export default RentalItem;
