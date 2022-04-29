import { useState } from 'react';

import Card from '../wrappers/Card';
import device from '../../assets/device.png';
import classes from './DeviceItem.module.css';

function DeviceItem(props) {
  const [rentHours, setRentHours] = useState(0);

  const addHoursHandler = () => {
    setRentHours((prevHrs) => prevHrs + 1);
  };

  const removeHoursHandler = () => {
    setRentHours((prevHrs) => {
      if (prevHrs === 0) {
        return 0;
      }
      return prevHrs - 1;
    });
  };

  return (
    <Card className={classes.device}>
      <div className={classes.badge}>
        <img src={device} alt={props.name} />
        <p>EN USO</p>
      </div>
      <div className={classes.content}>
        <h4>{props.name}</h4>

        <div className={classes.input}>
          Horas Rentadas:<span>{rentHours}</span>
          <div className={classes['input-actions']}>
            <button onClick={addHoursHandler}>+1</button>
            <button onClick={removeHoursHandler}>-1</button>
          </div>
        </div>

        <div className={classes.actions}>
          <button>Detener Tiempo</button>
          <button className='red-button'>Cancelar</button>
        </div>
        <hr />
        <div className={classes['rent-info']}>
          <strong>Hora Inicial: 3:30 PM</strong>
          <p className={classes.timer}>1:50 Hrs.</p>
        </div>
      </div>
    </Card>
  );
}

export default DeviceItem;
