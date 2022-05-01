import { Fragment } from 'react';

import ComputerForm from '../components/computers/ComputerForm';
import ComputersList from '../components/computers/ComputersList';
import Modal from '../components/ui/Modal';
import MainContentWrapper from '../components/wrappers/MainContentWrapper';

const DUMMY_COMPUTERS = [
  {
    name: 'DEVICE NUMBER 1',
    price: 10,
    brand: 'Dell',
    antiquity: 10,
    revision: new Date().toDateString(),
    serial: '123456789',
    description:
      'La computadora tiene Windows instalado. Algunos juegos también. Tristemente ha estado fallando los últimos días.',
  },
  {
    name: 'DEVICE NUMBER 2',
    price: 10,
    brand: 'Mac',
    antiquity: 5,
    revision: new Date().toDateString(),
    serial: '123456789',
    description:
      'La computadora tiene Windows instalado. Algunos juegos también. Tristemente ha estado fallando los últimos días.',
  },
  {
    name: 'DEVICE NUMBER 3',
    price: 10,
    brand: 'HP',
    antiquity: 10,
    revision: new Date().toDateString(),
    serial: '123456789',
    description:
      'La computadora tiene Windows instalado. Algunos juegos también. Funciona correctamente.',
  },
];

function CompPage() {
  return (
    <Fragment>
      <Modal title='INSERTAR DATOS'>
        <ComputerForm />
      </Modal>
      <MainContentWrapper title='LISTA DE COMPUTADORAS'>
        <ComputersList computers={DUMMY_COMPUTERS} />
      </MainContentWrapper>
    </Fragment>
  );
}

export default CompPage;
