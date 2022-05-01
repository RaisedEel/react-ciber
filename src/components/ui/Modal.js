import { Fragment } from 'react';
import classes from './Modal.module.css';

function Modal(props) {
  return (
    <Fragment>
      <div className={classes.backdrop}>
        <div className={classes.modal}>
          {props.children}
        </div>
      </div>
    </Fragment>
  );
}

export default Modal;
