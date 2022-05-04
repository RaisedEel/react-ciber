import Modal from './Modal';
import classes from './Alert.module.css';

function Confirm(props) {
  return (
    <Modal title={props.title} onClose={props.onCancel}>
      <p>{props.message}</p>
      <div className={classes.actions}>
        <button onClick={props.onCancel} className='red-button'>
          Cancelar
        </button>
        <button onClick={props.onConfirm}>Aceptar</button>
      </div>
    </Modal>
  );
}

export default Confirm;
