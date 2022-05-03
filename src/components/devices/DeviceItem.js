import { Fragment, useEffect, useState } from 'react';

import Card from '../wrappers/Card';
import device from '../../assets/device.png';
import classes from './DeviceItem.module.css';

function DeviceItem(props) {
  const [rentHours, setRentHours] = useState(0);
  const [initialTime, setInitialTime] = useState({
    isSet: false,
    hours: 0,
    minutes: 0,
  });
  const [rentTime, setRentTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (initialTime.isSet) {
        setRentTime((previousTime) => previousTime + 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [initialTime.isSet]);

  const addHoursHandler = () => {
    setRentHours((prevHrs) => {
      if (prevHrs < 99) {
        return prevHrs + 0.5;
      } else {
        return prevHrs;
      }
    });
  };

  const removeHoursHandler = () => {
    setRentHours((prevHrs) => {
      if (prevHrs === 0) {
        return 0;
      }

      if (prevHrs <= Math.floor(rentTime / 60)) {
        alert(
          'Las horas a rentar no pueden ser menor a las horas de la renta actual.'
        );
        return prevHrs;
      }

      return prevHrs - 0.5;
    });
  };

  const startRentHandler = () => {
    const timezoneDiff = new Date().getTimezoneOffset() * 60000;
    const todayDate = new Date().getTime() - timezoneDiff;
    setRentTime(0);
    setInitialTime({
      isSet: true,
      hours: Math.floor((todayDate / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((todayDate / (1000 * 60)) % 60),
    });
  };

  const stopRentHandler = () => {
    setRentTime(0);
    setInitialTime({ isSet: false, hours: 0, minutes: 0 });
    setRentHours(0);
  };

  return (
    <Card className={classes.device}>
      <div className={classes.badge}>
        <img src={device} alt={props.name} />
        {!initialTime.isSet && <p className={classes.green}>LIBRE</p>}
        {initialTime.isSet && <p className={classes.red}>EN USO</p>}
      </div>
      <div className={classes.content}>
        <h4>{props.name}</h4>

        <div className={classes.input}>
          Horas a Rentar:<span>{rentHours}</span>
          <div className={classes['input-actions']}>
            <button onClick={addHoursHandler}>+0.5</button>
            <button onClick={removeHoursHandler}>-0.5</button>
          </div>
        </div>

        <div className={classes.actions}>
          {!initialTime.isSet && (
            <button onClick={startRentHandler}>Comenzar Tiempo</button>
          )}
          {initialTime.isSet && (
            <Fragment>
              <button onClick={stopRentHandler}>Detener Tiempo</button>
              <button className='red-button' onClick={stopRentHandler}>
                Cancelar
              </button>
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
          <p
            className={`${classes.timer} ${
              initialTime.isSet
                ? rentHours === 0
                  ? classes.blue
                  : rentHours < rentTime / 60
                  ? classes.red
                  : rentHours - 0.2 < rentTime / 60
                  ? classes.yellow
                  : classes.green
                : classes.gray
            }`}
          >
            {Math.floor(rentTime / 60)}:
            {Math.floor(rentTime % 60) < 10
              ? '0' + Math.floor(rentTime % 60)
              : Math.floor(rentTime % 60)}{' '}
            Hrs.
          </p>
        </div>
      </div>
    </Card>
  );
}

export default DeviceItem;
