import { Fragment } from 'react';
import RentalItem from './RentalItem';
import classes from './RentalsList.module.css';

function RentalsList(props) {
  return (
    <Fragment>
      <h4 className={classes.header}>
        <span className={classes.name}>Nombre del Equipo</span>
        <span>Hora Inicial</span>
        <span>Hora Final</span>
        <span>Precio 1 Hr</span>
        <span>Precio Total</span>
        <span className={classes.last} />
      </h4>
      <ul className={classes.list}>
        {props.rentals.map((rental) => (
          <RentalItem key={rental.id} {...rental} />
        ))}
        {props.rentals.length === 0 && (
          <p className='error'>
            No se encontraron rentas registradas en este día.
          </p>
        )}
      </ul>
    </Fragment>
  );
}

export default RentalsList;
