import { useDispatch, useSelector } from 'react-redux';

import { alertActions } from '../../store/alert-slice';
import Modal from './Modal';
import classes from './Alert.module.css';

// Component to be used in case of an alert, linked to alert-slice
// Use only once on your application in the app.js for example
function Alert() {
	const dispatch = useDispatch();
	const { alert } = useSelector((state) => state.alert);

	return (
		<Modal
			title={alert.title}
			onClose={() => dispatch(alertActions.hideAlert())}
		>
			<p className={classes.description}>{alert.message}</p>
			<div className={classes.actions}>
				<button onClick={() => dispatch(alertActions.hideAlert())}>
					{alert.okMessage}
				</button>
			</div>
		</Modal>
	);
}

export default Alert;
