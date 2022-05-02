import { Fragment} from 'react';
import { createPortal } from 'react-dom';

import classes from './Modal.module.css';

function Modal(props) {
  const onCloseHandler = (event) => {
    if (event.currentTarget === event.target) {
      props.onClose();
    }
  };

  return createPortal(
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
  , document.getElementById('modal-overlay'));
}

export default Modal;
