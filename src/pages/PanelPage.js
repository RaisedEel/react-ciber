import DeviceList from '../components/devices/DevicesList';
import MainContentWrapper from '../components/wrappers/MainContentWrapper';

const DUMMY_DEVICES = [{name: 'DEVICE 1'}, {name: 'DEVICE 2'}, {name: 'DEVICE 3'}]

function PanelPage() {
  return (
    <MainContentWrapper title='PANEL DE CONTROL'>
      <DeviceList devices = {DUMMY_DEVICES} />
    </MainContentWrapper>
  );
}

export default PanelPage;
