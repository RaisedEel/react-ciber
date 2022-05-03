import DeviceItem from './DeviceItem';
import classes from './DevicesList.module.css';

function DeviceList(props) {
  return (
    <div className={classes.list}>
      {props.devices.map((device) => (
        <DeviceItem key={device.name} name={device.name} />
      ))}
      {props.devices.length === 0 && <p className='error'>No se encontraron registros. Agregue una nueva computadora en <strong>EQUIPOS</strong>.</p>}
    </div>
  );
}

export default DeviceList;
