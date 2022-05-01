import classes from './SearchRental.module.css';

function SearchRental() {
  return (
    <form className={classes.search}>
      <div className={classes.inputBox}>
        <label htmlFor='search'>Día de la Renta: </label>
        <input id='search' type='date' />
        <button type='button'>Buscar</button>
      </div>
    </form>
  );
}

export default SearchRental;
