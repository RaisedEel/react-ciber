import { Fragment } from 'react';
import classes from './Modal.module.css';

function Modal(props) {
  return (
    <Fragment>
      <div className={classes.backdrop}>
        <div className={classes.modal}>
          <header>
            <h2>{props.title}</h2>
          </header>
          <hr className={classes.line} />
          {props.children}
        </div>
      </div>
    </Fragment>
  );
}

export default Modal;
