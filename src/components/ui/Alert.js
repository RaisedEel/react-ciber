import { useSelector } from 'react-redux';

import Modal from './Modal';
import classes from './Alert.module.css';

function Alert(props) {
  const { title, message, okMessage } = useSelector((state) => state.alert);

  return (
    <Modal title={title} onClose={props.onClose}>
      <p>{message}</p>
      <div className={classes.actions}>
        <button onClick={props.onClose}>{okMessage}</button>
      </div>
    </Modal>
  );
}

export default Alert;
