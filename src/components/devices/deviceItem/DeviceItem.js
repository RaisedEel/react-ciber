import { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { panelActions } from '../../../store/panel-slice';
import Card from '../../wrappers/Card';
import device from '../../../assets/device.png';
import DeviceTimer from './DeviceTimer';
import classes from './DeviceItem.module.css';
import DeviceInput from './DeviceInput';

const getTimeInMinutes = () => {
  const timezoneDiff = new Date().getTimezoneOffset() * 60000;
  const todayDate = new Date().getTime() - timezoneDiff;

  return todayDate / (1000 * 60);
};

function DeviceItem(props) {
  const dispatch = useDispatch();
  const { devices } = useSelector((state) => state.panel);
  const { initialTime, rentedHours } = devices.find(
    (device) => device.name === props.name
  );
  const [rentTime, setRentTime] = useState(
    initialTime ? Math.floor(getTimeInMinutes() - initialTime) : 0
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (initialTime > 0) {
        setRentTime((previousTime) => previousTime + 1);
      }
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, [initialTime]);

  const startRentHandler = () => {
    setRentTime(0);
    dispatch(
      panelActions.updateDevice({
        identification: props.name,
        updatedValues: { initialTime: getTimeInMinutes() },
      })
    );
  };

  const stopRentHandler = () => {
    dispatch(
      panelActions.updateDevice({
        identification: props.name,
        updatedValues: { initialTime: 0, rentedHours: 0 },
      })
    );
  };

  return (
    <Card className={classes.device}>
      <div className={classes.badge}>
        <img src={device} alt={props.name} />
        {!initialTime && <p className={classes.green}>LIBRE</p>}
        {!!initialTime && <p className={classes.red}>EN USO</p>}
      </div>
      <div className={classes.content}>
        <h4>{props.name}</h4>
        <DeviceInput
          name={props.name}
          rentedHours={rentedHours}
          rentTime={rentTime}
        />
        <div className={classes.actions}>
          {!initialTime && (
            <button onClick={startRentHandler}>Comenzar Tiempo</button>
          )}
          {!!initialTime && (
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
            Hora Inicial: <DeviceTimer time={initialTime} />
          </strong>
          <span className={classes.price}>$ {props.price}</span>
          <p
            className={`${classes.timer} ${
              initialTime
                ? rentedHours === 0
                  ? classes.blue
                  : rentedHours < rentTime / 60
                  ? classes.red
                  : rentedHours - 0.2 < rentTime / 60
                  ? classes.yellow
                  : classes.green
                : classes.gray
            }`}
          >
            <DeviceTimer time={rentTime} counter />
          </p>
        </div>
      </div>
    </Card>
  );
}

export default DeviceItem;
