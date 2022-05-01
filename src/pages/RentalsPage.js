import MainContentWrapper from '../components/wrappers/MainContentWrapper';
import RentalsList from '../components/rentals/RentalsList';
import SearchRental from '../components/rentals/SearchRental';

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
  return (
    <MainContentWrapper title='RENTAS ANTERIORES'>
      <SearchRental />
      <RentalsList rentals={DUMMY_RENTALS} />
    </MainContentWrapper>
  );
}

export default RentalsPage;
