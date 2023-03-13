import { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useModal from '../../../hooks/useModal';
import { panelActions } from '../../../store/panel-slice';
import { panelSummaryActions } from '../../../store/panelSummary-slice';

import Card from '../../wrappers/Card';
import DeviceTimer from './DeviceTimer';
import DeviceInput from './DeviceInput';
import Confirm from '../../ui/Confirm';

import getTimeInMinutes from '../../../helpers/getTimeInMinutes';
import classes from './DeviceItem.module.css';
import device from '../../../assets/device.png';

function DeviceItem(props) {
	const dispatch = useDispatch();
	const { devices } = useSelector((state) => state.panel);
	const { initialTime, rentedHours } = devices.find(
		(device) => device.name === props.name
	);

	// If a initialTime has been set on the store, subtract it from the current time
	const [rentTime, setRentTime] = useState(
		initialTime ? Math.floor(getTimeInMinutes() - initialTime) : 0
	);

	// Just used to confirm that the rent should be stored
	const [confirmEnding, setConfirmEnding] = useState(false);
	const {
		state: confirmAction,
		show: showConfirmAction,
		hide: hideConfirmAction,
	} = useModal();

	// Adds 1 minute to the timer if a rent has been started
	useEffect(() => {
		const interval = setInterval(() => {
			if (initialTime > 0) {
				setRentTime((previousTime) => previousTime + 1);
			}
		}, 60000);

		return () => {
			clearInterval(interval);
		};
	}, [initialTime]);

	// Adds an alert for expired time to the header
	useEffect(() => {
		if (rentedHours > 0 && rentedHours - 0.01 < rentTime / 60) {
			dispatch(panelSummaryActions.addAlert(props.name));
		}
	}, [rentedHours, rentTime, dispatch, props.name]);

	const startRentHandler = () => {
		// Add to active devices in the header
		dispatch(panelSummaryActions.updateActive(1));
		setRentTime(0);
		dispatch(
			panelActions.updateDevice({
				identification: props.name,
				updatedValues: { initialTime: getTimeInMinutes() },
			})
		);
	};

	// End the rent
	const endRentHandler = () => {
		dispatch(
			panelActions.updateDevice({
				identification: props.name,
				updatedValues: { initialTime: 0, rentedHours: 0 },
			})
		);
		dispatch(panelSummaryActions.updateActive(-1));
		dispatch(panelSummaryActions.removeAlert(props.name));

		hideConfirmAction();
		if (confirmEnding) {
			// Send the result
			props.onRentalEnd();
		}
	};

	return (
		<Fragment>
			{confirmAction && (
				<Confirm
					title={`${confirmEnding ? 'Ver Resultados' : 'Cancelar Renta'}`}
					message='Esta acción detendrá la renta. ¿Desea continuar?'
					onCancel={hideConfirmAction}
					onConfirm={endRentHandler}
				/>
			)}
			<Card className={classes.device}>
				<div className={classes.badge}>
					<img src={device} alt={props.name} />
					{!initialTime && <p className={classes.green}>LIBRE</p>}
					{!!initialTime && <p className={classes.red}>EN USO</p>}
				</div>
				<div className={classes.content}>
					<h3 className={`${classes.title} heading`}>{props.name}</h3>

					<DeviceInput
						name={props.name}
						rentedHours={rentedHours}
						rentTime={rentTime}
					/>

					<div className={classes.actions}>
						{!initialTime && (
							<button title='Comenzar tiempo' onClick={startRentHandler}>
								Comenzar Tiempo
							</button>
						)}
						{!!initialTime && (
							<Fragment>
								<button
									title='Cobrar renta'
									onClick={() => {
										showConfirmAction();
										setConfirmEnding(true);
									}}
								>
									Cobrar
								</button>
								<button
									title='Cancelar renta'
									className='red-button'
									onClick={() => {
										showConfirmAction();
										setConfirmEnding(false);
									}}
								>
									Cancelar
								</button>
							</Fragment>
						)}
					</div>
					<hr />
					<div className={classes['rent-info']}>
						<p className={classes.info}>
							<strong>
								Hora Inicial: <DeviceTimer time={initialTime} />
							</strong>
							<span className={classes.price}>$ {props.price}</span>
						</p>
						<p
							className={`${classes.timer} ${
								initialTime
									? rentedHours === 0
										? classes.blue
										: rentedHours < rentTime / 60
										? classes.red
										: rentedHours - 0.1 < rentTime / 60
										? classes.yellow
										: classes.green
									: classes.gray
							}`}
						>
							<DeviceTimer time={rentTime} counting={!!initialTime} /> Hrs
						</p>
					</div>
				</div>
			</Card>
		</Fragment>
	);
}

export default DeviceItem;
