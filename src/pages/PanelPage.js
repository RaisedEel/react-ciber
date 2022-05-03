import { useSelector } from 'react-redux';

import DeviceList from '../components/devices/DevicesList';
import MainContentWrapper from '../components/wrappers/MainContentWrapper';

function PanelPage() {
  const { devices: loadedDevices } = useSelector((state) => state.panel);

  return (
    <MainContentWrapper title='PANEL DE CONTROL'>
      <DeviceList devices={loadedDevices} />
    </MainContentWrapper>
  );
}

export default PanelPage;
