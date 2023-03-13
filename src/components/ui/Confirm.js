import Modal from './Modal';
import classes from './Alert.module.css';

// Component used when you need a confirm alert, can pass a confirm function using props
function Confirm(props) {
	return (
		<Modal title={props.title} onClose={props.onCancel}>
			<p className={classes.description}>{props.message}</p>
			<div className={classes.actions}>
				<button
					title='Cancelar'
					onClick={props.onCancel}
					className='red-button'
				>
					Cancelar
				</button>
				<button title='Confirmar' onClick={props.onConfirm}>
					Aceptar
				</button>
			</div>
		</Modal>
	);
}

export default Confirm;
