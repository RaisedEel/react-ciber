import classes from './SearchRental.module.css';

function SearchRental() {
  return (
    <form className={classes.search}>
      <div className={classes.inputBox}>
        <label htmlFor='search'>Día de la Renta: </label>
        <input id='search' type='date' defaultValue={new Date().toISOString().slice(0,10)} />
        <button type='button'>Buscar</button>
      </div>
    </form>
  );
}

export default SearchRental;
