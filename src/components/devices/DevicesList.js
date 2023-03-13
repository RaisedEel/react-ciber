import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { panelSummaryActions } from '../../store/panelSummary-slice';
import DeviceItem from './deviceItem/DeviceItem';
import classes from './DevicesList.module.css';

function DevicesList(props) {
	// Add devices.length - activeDevices
	const dispatch = useDispatch();
	const numberOfDevices = useSelector((state) => state.panel.devices.length);
	const active = useSelector((state) => state.panelSummary.active);

	// Check for unoccupied computers
	useEffect(() => {
		dispatch(panelSummaryActions.updateInactive(numberOfDevices - active));
	}, [dispatch, numberOfDevices, active]);

	return (
		<section className={classes.list}>
			{props.devices.map((device) => (
				<DeviceItem
					key={device.name}
					name={device.name}
					price={device.price}
					onRentalEnd={props.onRentalEnd.bind(null, device)}
				/>
			))}
			{props.devices.length === 0 && (
				<p className='error'>
					No se encontraron registros. Agregue una nueva computadora en{' '}
					<strong>EQUIPOS</strong>.
				</p>
			)}
		</section>
	);
}

export default DevicesList;
