import { Fragment, useEffect, useState } from 'react';

import Card from '../wrappers/Card';
import device from '../../assets/device.png';
import classes from './DeviceItem.module.css';

function DeviceItem(props) {
  const [rentHours, setRentHours] = useState(0);
  const [initialTime, setInitialTime] = useState({ isSet: false, hours: 0, minutes: 0 });
  const [rentTime, setRentTime] = useState();

  // useEffect(() => {
  //   const interval = setInterval(() => {
      
  //   }, 60000);

  //   return () => {
  //     clearInterval(interval);
  //   }
  // },[]);

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

  const startRentHandler = () => {
    const timezoneDiff = new Date().getTimezoneOffset() * 60000;
    const todayDate = new Date().getTime() - timezoneDiff;
    setRentTime();
    setInitialTime({
      isSet: true,
      hours: Math.floor((todayDate / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((todayDate / (1000 * 60)) % 60),
    });
  };

  const stopRentHandler = () => {
    setInitialTime({isSet: false, hours: 0, minutes: 0 });
  };

  return (
    <Card className={classes.device}>
      <div className={classes.badge}>
        <img src={device} alt={props.name} />
        {!initialTime.isSet && <p className={classes.free}>LIBRE</p>}
        {initialTime.isSet && <p className={classes.occupied}>EN USO</p>}
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
          {!initialTime.isSet && (
            <button onClick={startRentHandler}>Comenzar Tiempo</button>
          )}
          {initialTime.isSet && (
            <Fragment>
              <button onClick={stopRentHandler}>Detener Tiempo</button>
              <button className='red-button'>Cancelar</button>
            </Fragment>
          )}
        </div>
        <hr />
        <div className={classes['rent-info']}>
          <strong>
            Hora Inicial: {initialTime.hours}:
            {initialTime.minutes < 10
              ? '0' + initialTime.minutes
              : initialTime.minutes}
          </strong>
          <p className={classes.timer}>1:50 Hrs.</p>
        </div>
      </div>
    </Card>
  );
}

export default DeviceItem;
