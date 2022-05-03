import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { computersActions } from '../../store/computers-slice';
import { panelActions } from '../../store/panel-slice';
import classes from './ComputerForm.module.css';

function ComputerForm(props) {
  const { computers } = useSelector((state) => state.computers);
  const dispatch = useDispatch();

  const [error, setError] = useState(false);
  const [enteredName, setEnteredName] = useState(props.initValues.name || '');
  const [enteredPrice, setEnteredPrice] = useState(
    props.initValues.price || ''
  );
  const [enteredBrand, setEnteredBrand] = useState(
    props.initValues.brand || ''
  );
  const [enteredAntiquity, setEnteredAntiquity] = useState(
    props.initValues.antiquity || ''
  );
  const [enteredRevision, setEnteredRevision] = useState(
    props.initValues.revision || ''
  );
  const [enteredSerial, setEnteredSerial] = useState(
    props.initValues.serial || ''
  );
  const [enteredDescription, setEnteredDescription] = useState(
    props.initValues.description || ''
  );

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const newComputer = {
      name: enteredName,
      price: enteredPrice,
      brand: enteredBrand,
      antiquity: enteredAntiquity,
      revision: enteredRevision,
      serial: enteredSerial,
      description: enteredDescription,
    };

    if (
      computers.some((computer) => computer.name === enteredName) &&
      !props.initValues.name
    ) {
      setError(true);
      return;
    }
    dispatch(computersActions.addComputer(newComputer));
    dispatch(
      panelActions.addDevice({ name: enteredName, price: enteredPrice })
    );
    props.onClose();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      {error && (
        <p className={classes.error}>
          Se encontró un elemento con este nombre. Ingrese un nombre único.
        </p>
      )}
      <div className={classes.inputBox}>
        <label htmlFor='name'>Nombre Identificador: </label>
        <input
          id='name'
          type='text'
          maxLength='40'
          value={enteredName}
          onChange={(event) => setEnteredName(event.target.value)}
          required
        />
      </div>

      <div className={classes.inputBox}>
        <label htmlFor='price'>Precio por Hr: $</label>
        <input
          id='price'
          type='number'
          min='1'
          max='100'
          value={enteredPrice}
          onChange={(event) => setEnteredPrice(event.target.value)}
          required
        />
      </div>

      <div className={classes.inputBox}>
        <label htmlFor='brand'>Marca: </label>
        <input
          id='brand'
          type='text'
          maxLength='20'
          value={enteredBrand}
          onChange={(event) => setEnteredBrand(event.target.value)}
          required
        />
      </div>

      <div className={classes.inputBox}>
        <label htmlFor='antiquity'>Antigüedad: </label>
        <input
          id='antiquity'
          type='number'
          min='0'
          max='99'
          value={enteredAntiquity}
          onChange={(event) => setEnteredAntiquity(event.target.value)}
          required
        />
      </div>

      <div className={classes.inputBox}>
        <label htmlFor='revision'>Fecha del Último Chequeo: </label>
        <input
          id='revision'
          type='date'
          max={new Date().toISOString().slice(0, 10)}
          value={enteredRevision}
          onChange={(event) => setEnteredRevision(event.target.value)}
          required
        />
      </div>

      <div className={classes.inputBox}>
        <label htmlFor='serial'>Serial de la Computadora: </label>
        <input
          id='serial'
          type='text'
          maxLength='20'
          value={enteredSerial}
          onChange={(event) => setEnteredSerial(event.target.value)}
          required
        />
      </div>

      <div className={classes.inputBox}>
        <label htmlFor='description'>Descripción General: </label>
        <textarea
          id='description'
          maxLength='150'
          rows='3'
          value={enteredDescription}
          onChange={(event) => setEnteredDescription(event.target.value)}
          required
        />
      </div>

      <div className={classes.actions}>
        <button type='button' className='red-button' onClick={props.onClose}>
          Cancelar
        </button>
        <button>Subir Datos</button>
      </div>
    </form>
  );
}

export default ComputerForm;
