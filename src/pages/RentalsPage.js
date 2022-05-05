import { useState } from 'react';
import { useSelector } from 'react-redux';

import MainContentWrapper from '../components/wrappers/MainContentWrapper';
import RentalsList from '../components/rentals/RentalsList';
import SearchRental from '../components/rentals/SearchRental';
import getDate from '../helpers/getDate';

function RentalsPage() {
  const { rentals } = useSelector((state) => state.rentals);
  const [dateToSearch, setDateToSearch] = useState(getDate(new Date()));

  const searchRentalsHandler = (date) => {
    setDateToSearch(date);
  };

  return (
    <MainContentWrapper title='RENTAS ANTERIORES'>
      <SearchRental onSubmit={searchRentalsHandler} />
      <RentalsList
        rentals={rentals.filter((rental) => rental.date === dateToSearch)}
      />
    </MainContentWrapper>
  );
}

export default RentalsPage;
