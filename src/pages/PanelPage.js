import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import DeviceList from '../components/devices/DevicesList';
import MainContentWrapper from '../components/wrappers/MainContentWrapper';

function PanelPage() {
  const { devices: loadedDevices } = useSelector((state) => state.panel);

  return (
    <Fragment>
      <MainContentWrapper title='PANEL DE CONTROL'>
        <DeviceList devices={loadedDevices} />
      </MainContentWrapper>
    </Fragment>
  );
}

export default PanelPage;
