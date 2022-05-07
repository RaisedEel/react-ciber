import Modal from './Modal';
import classes from './Alert.module.css';

// Component used when you need a confirm alert, can pass a confirm function using props
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
