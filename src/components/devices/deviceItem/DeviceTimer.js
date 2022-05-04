import { Fragment } from 'react';

function DeviceTimer(props) {
  let hours = props.time / 60;
  let minutes = Math.floor(props.time % 60);
  if (props.counter) {
    hours = Math.floor(hours);
  } else {
    hours = Math.floor(hours % 24);
  }

  return (
    <Fragment>
      {hours}:{minutes < 10 ? '0' + minutes : minutes}
      {props.counter ? ' Hrs' : ''}
    </Fragment>
  );
}

export default DeviceTimer;
