import { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import useModal from '../hooks/useModal';

import DeviceList from '../components/devices/DevicesList';
import MainContentWrapper from '../components/wrappers/MainContentWrapper';
import Modal from '../components/ui/Modal';
import DeviceRentResult from '../components/devices/DeviceRentResult';

function PanelPage() {
  const { devices: loadedDevices } = useSelector((state) => state.panel);
  const { state: showResult, show: openResult, hide: closeResult } = useModal();
  const [rentResult, setRentResult] = useState({});

  const showResultHandler = (results) => {
    setRentResult(results);
    openResult();
  };

  return (
    <Fragment>
      {showResult && (
        <Modal title='Resultado de la Renta' onClose={closeResult}>
          <DeviceRentResult results={rentResult} onClose={closeResult} />
        </Modal>
      )}
      <MainContentWrapper title='PANEL DE CONTROL'>
        <DeviceList devices={loadedDevices} onRentalEnd={showResultHandler} />
      </MainContentWrapper>
    </Fragment>
  );
}

export default PanelPage;
