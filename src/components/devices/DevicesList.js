import DeviceItem from './deviceItem/DeviceItem';
import classes from './DevicesList.module.css';

function DeviceList(props) {
  return (
    <section className={classes.list}>
      {props.devices.map((device) => (
        <DeviceItem
          key={device.name}
          name={device.name}
          price={device.price}
          onRentalEnd={props.onRentalEnd.bind(null, device)}
        />
      ))}
      {props.devices.length === 0 && (
        <p className='error'>
          No se encontraron registros. Agregue una nueva computadora en{' '}
          <strong>EQUIPOS</strong>.
        </p>
      )}
    </section>
  );
}

export default DeviceList;
