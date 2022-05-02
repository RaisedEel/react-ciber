import { Fragment } from 'react';
import classes from './Modal.module.css';

function Modal(props) {
  const onCloseHandler = (event) => {
    if (event.currentTarget === event.target) {
      props.onClose();
    }
  };

  return (
    <Fragment>
      <div className={classes.backdrop} onClick={onCloseHandler}>
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
