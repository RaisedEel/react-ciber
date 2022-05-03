import Modal from './Modal';
import classes from './Alert.module.css';

function Alert(props) {
  return (
    <Modal title={props.title} onClose={props.close.onClick}>
      <p>{props.message}</p>
      <div className={classes.actions}>
        <button
          onClick={props.close.onClick}
          className={props.confirm && 'red-button'}
        >
          {props.close.message}
        </button>
        {props.confirm.message && (
          <button onClick={props.confirm.onClick}>
            {props.confirm.message}
          </button>
        )}
      </div>
    </Modal>
  );
}

export default Alert;
