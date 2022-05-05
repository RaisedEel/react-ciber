import { useRef } from 'react';

import getDate from '../../helpers/getDate';
import classes from './SearchRental.module.css';

function SearchRental(props) {
  const dateInput = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmit(dateInput.current.value);
  };

  return (
    <form onSubmit={submitHandler} className={classes.search}>
      <div className={classes.inputBox}>
        <label htmlFor='search'>Día de la Renta: </label>
        <input
          ref={dateInput}
          id='search'
          type='date'
          defaultValue={getDate(new Date())}
        />
        <button>Buscar</button>
      </div>
    </form>
  );
}

export default SearchRental;
