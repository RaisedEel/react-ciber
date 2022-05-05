import classes from './DeviceRentResult.module.css';

import getTimeInMinutes from '../../helpers/getTimeInMinutes';
import getTotal from '../../helpers/getTotal';

function DeviceRentResult(props) {
  const { initialTime } = props.results;
  const timeNow = getTimeInMinutes();
  const duration = Math.floor(timeNow - initialTime);

  const startTime = {
    hours: Math.floor((initialTime / 60) % 24),
    minutes: Math.floor(initialTime % 60),
  };

  const endTime = {
    hours: Math.floor((timeNow / 60) % 24),
    minutes: Math.floor(timeNow % 60),
  };

  return (
    <div className={classes.results}>
      <p>
        <strong>Nombre del Equipo</strong> {props.results.name}
      </p>
      <p>
        <strong>Horas Rentadas</strong>
        {props.results.rentedHours ? props.results.rentedHours : 'Tiempo Libre'}
      </p>
      <p>
        <strong>Precio de la Hora</strong> $ {props.results.price}
      </p>
      <p>
        <strong>Hora Inicial</strong> {startTime.hours}:
        {startTime.minutes < 10 ? '0' + startTime.minutes : startTime.minutes}
      </p>
      <p>
        <strong>Hora Final</strong> {endTime.hours}:
        {endTime.minutes < 10 ? '0' + endTime.minutes : endTime.minutes}{' '}
      </p>
      <p>
        <strong>Duración en Minutos</strong> {duration}
      </p>
      <hr />
      <p className={classes.total}>
        <strong>TOTAL</strong> $ {getTotal(props.results.price, duration)}
      </p>
      <div className={classes.action}>
        <button onClick={props.onClose}>ACEPTAR</button>
      </div>
    </div>
  );
}

export default DeviceRentResult;
