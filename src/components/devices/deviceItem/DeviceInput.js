import { useDispatch } from 'react-redux';

import { panelActions } from '../../../store/panel-slice';
import classes from './DeviceInput.module.css';

function DeviceInput(props) {
  const {rentedHours, rentTime} = props;
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
    }
  };

  return (
    <div className={classes.input}>
      Horas a Rentar:<span>{rentedHours}</span>
      <div className={classes['input-actions']}>
        <button onClick={addHoursHandler}>+0.5</button>
        <button onClick={removeHoursHandler}>-0.5</button>
      </div>
    </div>
  );
}

export default DeviceInput;
