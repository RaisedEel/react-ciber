import { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { alertActions } from '../store/alert-slice';
import ComputerForm from '../components/computers/ComputerForm';
import ComputersList from '../components/computers/ComputersList';
import Alert from '../components/ui/Alert';
import Modal from '../components/ui/Modal';
import MainContentWrapper from '../components/wrappers/MainContentWrapper';

function CompPage() {
  const [showForm, setShowForm] = useState(false);
  const [initialFormValues, setInitialFormValues] = useState({});
  const { computers: loadedComputers } = useSelector(
    (state) => state.computers
  );
  const { showAlert, title, message, close, confirm } = useSelector(
    (state) => state.alert
  );
  const dispatch = useDispatch();

  const closeFormHandler = () => {
    setShowForm(false);
  };

  const showFormHandler = (formValues) => {
    if (formValues) {
      setInitialFormValues(formValues);
    } else {
      setInitialFormValues({});
    }

    setShowForm(true);
  };

  const closeAlertHandler = () => {
    dispatch(alertActions.hideAlert());
  };

  const showAlertHandler = () => {
    dispatch(
      alertActions.setAlert({
        title: 'ELIMINAR REGISTRO',
        message: '¿Esta seguro que desea eliminar este registro?',
        close: 'Cancelar',
        confirm: 'Eliminarlo',
      })
    );
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
          title={title}
          message={message}
          close={{ message: close, onClick: closeAlertHandler }}
          confirm={{ message: confirm, onClick: () => {} }}
        />
      )}
      <MainContentWrapper title='LISTA DE COMPUTADORAS'>
        <ComputersList
          computers={loadedComputers}
          onShowForm={showFormHandler}
          onDelete={showAlertHandler}
        />
      </MainContentWrapper>
    </Fragment>
  );
}

export default CompPage;
