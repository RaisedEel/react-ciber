import { useDispatch } from 'react-redux';

import { alertActions } from '../../../store/alert-slice';
import { panelActions } from '../../../store/panel-slice';
import { panelSummaryActions } from '../../../store/panelSummary-slice';

import classes from './DeviceInput.module.css';

// Created to separate the logic of the DeviceItem
function DeviceInput(props) {
	const { rentedHours, rentTime } = props;
	const dispatch = useDispatch();

	const addHoursHandler = () => {
		if (rentedHours < 99) {
			dispatch(
				panelActions.updateDevice({
					identification: props.name,
					updatedValues: { rentedHours: rentedHours + 0.5 },
				})
			);
			dispatch(panelSummaryActions.removeAlert(props.name));
		}
	};

	const removeHoursHandler = () => {
		if (rentedHours > Math.floor(rentTime / 60) && rentedHours) {
			dispatch(
				panelActions.updateDevice({
					identification: props.name,
					updatedValues: { rentedHours: rentedHours - 0.5 },
				})
			);
		} else {
			// In case of an invalid value shows an alert, check alert-slice
			dispatch(
				alertActions.setAlert({
					title: 'Aviso',
					message:
						'No se puede reducir el numero de horas rentadas a menor que 0 o el numero de horas de la renta actual.',
					okMessage: 'Entendido',
				})
			);
		}

		if (rentedHours === 0.5)
			dispatch(panelSummaryActions.removeAlert(props.name));
	};

	return (
		<div className={classes.input}>
			<span className={classes.label}>Horas a Rentar:</span>
			<span className={classes.value}>{rentedHours}</span>
			<span className={classes['input-actions']}>
				<button onClick={addHoursHandler}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-6 h-6'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M12 6v12m6-6H6'
						/>
					</svg>
				</button>
				<button onClick={removeHoursHandler}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-6 h-6'
					>
						<path strokeLinecap='round' strokeLinejoin='round' d='M18 12H6' />
					</svg>
				</button>
			</span>
		</div>
	);
}

export default DeviceInput;
