import MainContentWrapper from '../components/wrappers/MainContentWrapper';
import RentalItem from '../components/rentals/RentalItem';

function RentalsPage() {
  return (
    <MainContentWrapper title='RENTAS ANTERIORES'>
      <ul style={{ listStyle: 'none' }}>
        <RentalItem />
        <RentalItem />
        <RentalItem />
      </ul>
    </MainContentWrapper>
  );
}

export default RentalsPage;
