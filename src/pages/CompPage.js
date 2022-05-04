import { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import useModal from '../hooks/useModal';

import ComputerForm from '../components/computers/computerForm/ComputerForm';
import ComputersList from '../components/computers/ComputersList';
import Modal from '../components/ui/Modal';
import MainContentWrapper from '../components/wrappers/MainContentWrapper';

function CompPage() {
  const { state: showForm, show: openForm, hide: closeForm } = useModal();
  const [initialFormValues, setInitialFormValues] = useState({});
  const { computers: loadedComputers } = useSelector(
    (state) => state.computers
  );

  const showFormHandler = (formValues) => {
    if (formValues) {
      setInitialFormValues(formValues);
    } else {
      setInitialFormValues({
        name: '',
        price: '',
        brand: '',
        antiquity: '',
        revision: '',
        serial: '',
        description: '',
      });
    }

    openForm();
  };

  return (
    <Fragment>
      {showForm && (
        <Modal
          title={initialFormValues ? 'ACTUALIZAR DATOS' : 'INSERTAR DATOS'}
          onClose={closeForm}
        >
          <ComputerForm onClose={closeForm} initValues={initialFormValues} />
        </Modal>
      )}
      <MainContentWrapper title='LISTA DE COMPUTADORAS'>
        <ComputersList
          computers={loadedComputers}
          onShowForm={showFormHandler}
        />
      </MainContentWrapper>
    </Fragment>
  );
}

export default CompPage;
