import DeviceItem from './DeviceItem';
import classes from './DeviceList.module.css';

function DeviceList(props) {
  return (
    <div className={classes.list}>
      {props.devices.map((device) => (
        <DeviceItem key={device.name} name={device.name} />
      ))}
    </div>
  );
}

export default DeviceList;
