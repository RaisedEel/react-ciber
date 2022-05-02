import { Fragment, useState } from 'react';

import ComputerForm from '../components/computers/ComputerForm';
import ComputersList from '../components/computers/ComputersList';
import Alert from '../components/ui/Alert';
import Modal from '../components/ui/Modal';
import MainContentWrapper from '../components/wrappers/MainContentWrapper';

const DUMMY_COMPUTERS = [
  {
    name: 'DEVICE NUMBER 1',
    price: 10,
    brand: 'Dell',
    antiquity: 10,
    revision: new Date().toISOString().slice(0, 10),
    serial: '123456789',
    description:
      'La computadora tiene Windows instalado. Algunos juegos también. Tristemente ha estado fallando los últimos días.',
  },
  {
    name: 'DEVICE NUMBER 2',
    price: 10,
    brand: 'Mac',
    antiquity: 5,
    revision: new Date().toISOString().slice(0, 10),
    serial: '123456789',
    description:
      'La computadora tiene Windows instalado. Algunos juegos también. Tristemente ha estado fallando los últimos días.',
  },
  {
    name: 'DEVICE NUMBER 3',
    price: 10,
    brand: 'HP',
    antiquity: 10,
    revision: new Date().toISOString().slice(0, 10),
    serial: '123456789',
    description:
      'La computadora tiene Windows instalado. Algunos juegos también. Funciona correctamente.',
  },
];

function CompPage() {
  const [showForm, setShowForm] = useState(false);
  const [initialFormValues, setInitialFormValues] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const closeFormHandler = () => {
    setShowForm(false);
  };

  const showFormHandler = (formValues) => {
    if (formValues) {
      setInitialFormValues(formValues);
    } else {
      setInitialFormValues(null);
    }

    setShowForm(true);
  };

  const closeAlertHandler = () => {
    setShowAlert(false);
  };

  const showAlertHandler = () => {
    setShowAlert(true);
  };

  return (
    <Fragment>
      {showForm && (
        <Modal
          title={initialFormValues ? 'ACTUALIZAR DATOS' : 'INSERTAR DATOS'}
          onClose={closeFormHandler}
        >
          <ComputerForm
            onClose={closeFormHandler}
            initValues={initialFormValues}
          />
        </Modal>
      )}
      {showAlert && (
        <Alert
          title='ELIMINAR REGISTRO'
          message='¿Esta seguro que desea eliminar este registro?'
          close={{ message: 'Cancelar', onClick: closeAlertHandler }}
          confirm={{ message: 'Eliminarlo', onClick: () => {} }}
        />
      )}
      <MainContentWrapper title='LISTA DE COMPUTADORAS'>
        <ComputersList
          computers={DUMMY_COMPUTERS}
          onShowForm={showFormHandler}
          onDelete={showAlertHandler}
        />
      </MainContentWrapper>
    </Fragment>
  );
}

export default CompPage;
