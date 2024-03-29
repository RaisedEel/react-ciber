import { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useModal from '../hooks/useModal';

import DevicesList from '../components/devices/DevicesList';
import MainContentWrapper from '../components/wrappers/MainContentWrapper';
import Modal from '../components/ui/Modal';
import DeviceRentResult from '../components/devices/DeviceRentResult';
import { rentalsActions } from '../store/rentals-slice';
import getFinalResults from '../helpers/getFinalResults';

function PanelPage() {
	const dispatch = useDispatch();
	const { devices: loadedDevices } = useSelector((state) => state.panel);
	const { state: showResult, show: openResult, hide: closeResult } = useModal();
	const [rentResult, setRentResult] = useState({});

	// Give the results to the form, each DeviceItem has a copy with their values bound
	// (The bind can be find on DevicesList)
	const showResultHandler = (results) => {
		setRentResult(getFinalResults(results));
		openResult();
	};

	const storeRental = () => {
		dispatch(rentalsActions.addRental(rentResult));
		closeResult();
	};

	return (
		<Fragment>
			{showResult && (
				<Modal title='Resultado de la Renta' onClose={storeRental}>
					<DeviceRentResult results={rentResult} onStore={storeRental} />
				</Modal>
			)}
			<MainContentWrapper title='PANEL DE CONTROL'>
				<DevicesList devices={loadedDevices} onRentalEnd={showResultHandler} />
			</MainContentWrapper>
		</Fragment>
	);
}

export default PanelPage;
