import { useDispatch } from 'react-redux';

import { alertActions } from '../../../store/alert-slice';
import { panelActions } from '../../../store/panel-slice';
import classes from './DeviceInput.module.css';

function DeviceInput(props) {
  const { rentedHours, rentTime } = props;
  const dispatch = useDispatch();

  const addHoursHandler = () => {
    if (rentedHours < 99) {
      dispatch(
        panelActions.updateDevice({
          identification: props.name,
          updatedValues: { rentedHours: rentedHours + 0.5 },
        })
      );
    }
  };

  const removeHoursHandler = () => {
    if (rentedHours > Math.floor(rentTime / 60) && rentedHours) {
      dispatch(
        panelActions.updateDevice({
          identification: props.name,
          updatedValues: { rentedHours: rentedHours - 0.5 },
        })
      );
    } else {
      dispatch(
        alertActions.setAlert({
          title: 'Aviso',
          message:
            'No se puede reducir el numero de horas rentadas a menor que 0 o el numero de horas de la renta actual.',
          okMessage: 'Entendido',
        })
      );
    }
  };

  return (
    <div className={classes.input}>
      <span className={classes.label}>Horas a Rentar:</span><span className={classes.value}>{rentedHours}</span>
      <span className={classes['input-actions']}>
        <button onClick={addHoursHandler}>+0.5</button>
        <button onClick={removeHoursHandler}>-0.5</button>
      </span>
    </div>
  );
}

export default DeviceInput;
