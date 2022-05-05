import { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { panelActions } from '../../../store/panel-slice';
import Card from '../../wrappers/Card';
import device from '../../../assets/device.png';
import DeviceTimer from './DeviceTimer';
import DeviceInput from './DeviceInput';
import Confirm from '../../ui/Confirm';
import useModal from '../../../hooks/useModal';
import getTimeInMinutes from '../../../helpers/getTimeInMinutes';
import classes from './DeviceItem.module.css';

function DeviceItem(props) {
  const dispatch = useDispatch();
  const { devices } = useSelector((state) => state.panel);
  const { initialTime, rentedHours } = devices.find(
    (device) => device.name === props.name
  );

  const [rentTime, setRentTime] = useState(
    initialTime ? Math.floor(getTimeInMinutes() - initialTime) : 0
  );
  const [confirmEnding, setConfirmEnding] = useState(false);
  const {
    state: confirmAction,
    show: showConfirmAction,
    hide: hideConfirmAction,
  } = useModal();

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

  const confirmActionHandler = () => {
    dispatch(
      panelActions.updateDevice({
        identification: props.name,
        updatedValues: { initialTime: 0, rentedHours: 0 },
      })
    );
    hideConfirmAction();
    if (confirmEnding) {
      props.onRentalEnd();
    }
  };

  return (
    <Fragment>
      {confirmAction && (
        <Confirm
          title={`${confirmEnding ? 'Ver Resultados' : 'Cancelar Renta'}`}
          message='Esta acción detendrá la renta. ¿Desea continuar?'
          onCancel={hideConfirmAction}
          onConfirm={confirmActionHandler}
        />
      )}
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
                <button
                  onClick={() => {
                    showConfirmAction();
                    setConfirmEnding(true);
                  }}
                >
                  Detener Tiempo
                </button>
                <button
                  className='red-button'
                  onClick={() => {
                    showConfirmAction();
                    setConfirmEnding(false);
                  }}
                >
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
    </Fragment>
  );
}

export default DeviceItem;
