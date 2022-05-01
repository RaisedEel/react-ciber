import classes from './ComputerForm.module.css';

function ComputerForm() {
  return (
    <form className={classes.form}>
      <div className={classes.inputBox}>
        <label htmlFor='name'>Nombre Identificador: </label>
        <input id='name' type='text' maxLength='50' required />
      </div>

      <div className={classes.inputBox}>
        <label htmlFor='price'>Precio por Hr: $</label>
        <input
          id='price'
          type='number'
          min='1'
          max='100'
          placeholder='1'
          required
        />
      </div>

      <div className={classes.inputBox}>
        <label htmlFor='brand'>Marca: </label>
        <input id='brand' type='text' maxLength='30' required />
      </div>

      <div className={classes.inputBox}>
        <label htmlFor='antiquity'>Antigüedad: </label>
        <input
          id='antiquity'
          type='number'
          min='0'
          max='99'
          placeholder='0'
          required
        />
      </div>

      <div className={classes.inputBox}>
        <label htmlFor='lastCheck'>Fecha del Último Chequeo: </label>
        <input id='lastCheck' type='date' required />
      </div>

      <div className={classes.inputBox}>
        <label htmlFor='serial'>Serial de la Computadora: </label>
        <input id='serial' type='text' maxLength='20' required />
      </div>

      <div className={classes.inputBox}>
        <label htmlFor='description'>Descripción General: </label>
        <textarea id='description' maxLength='150' rows='3' required />
      </div>

      <div className={classes.actions}>
        <button type='button'>Cancelar</button>
        <button type='button'>Subir Datos</button>
      </div>
    </form>
  );
}

export default ComputerForm;
