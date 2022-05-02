import { Fragment, useState } from 'react';

import MainContentWrapper from '../components/wrappers/MainContentWrapper';
import RentalsList from '../components/rentals/RentalsList';
import SearchRental from '../components/rentals/SearchRental';
import Alert from '../components/ui/Alert';

const DUMMY_RENTALS = [
  {
    name: 'DEVICE NUMBER 1',
    startTime: '10:10',
    endTime: '12:10',
    duration: '2.00',
    price: 10.0,
    total: 20.0,
  },
  {
    name: 'DEVICE NUMBER 2',
    startTime: '11:10',
    endTime: '13:10',
    duration: '2.00',
    price: 10.0,
    total: 20.0,
  },
  {
    name: 'DEVICE NUMBER 3',
    startTime: '18:00',
    endTime: '20:00',
    duration: '2.00',
    price: 10.0,
    total: 20.0,
  },
  {
    name: 'DEVICE NUMBER 4',
    startTime: '18:00',
    endTime: '19:00',
    duration: '1.00',
    price: 10.0,
    total: 10.0,
  },
];

function RentalsPage() {
  const [showAlert, setShowAlert] = useState(false);

  const closeAlertHandler = () => {
    setShowAlert(false);
  };

  const showAlertHandler = () => {
    setShowAlert(true);
  };

  return (
    <Fragment>
      {showAlert && (
        <Alert
          title='ELIMINAR REGISTRO'
          message='¿Esta seguro que desea eliminar este registro?'
          close={{ message: 'Cancelar', onClick: closeAlertHandler }}
          confirm={{ message: 'Eliminarlo', onClick: () => {} }}
        />
      )}
      <MainContentWrapper title='RENTAS ANTERIORES'>
        <SearchRental />
        <RentalsList rentals={DUMMY_RENTALS} onDelete={showAlertHandler} />
      </MainContentWrapper>
    </Fragment>
  );
}

export default RentalsPage;
