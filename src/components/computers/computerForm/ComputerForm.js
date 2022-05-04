import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { computersActions } from '../../../store/computers-slice';
import { panelActions } from '../../../store/panel-slice';
import InputBox from './InputBox';
import classes from './ComputerForm.module.css';

function ComputerForm(props) {
  const { computers } = useSelector((state) => state.computers);
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const { initValues } = props;
  const [enteredValues, setEnteredValues] = useState(initValues);

  const updateValue = (field, value) => {
    setEnteredValues((currValues) => {
      return { ...currValues, [field]: value };
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const newDevice = {
      name: enteredValues.name,
      price: enteredValues.price,
    };

    if (
      computers.some((computer) => computer.name === enteredValues.name) &&
      !initValues.name
    ) {
      setError(true);
      return;
    }

    if (initValues.name) {
      dispatch(
        computersActions.updateComputer({
          identification: initValues.name,
          updatedValues: enteredValues,
        })
      );
      dispatch(
        panelActions.updateDevice({
          identification: initValues.name,
          updatedValues: newDevice,
        })
      );
    } else {
      dispatch(computersActions.addComputer(enteredValues));
      dispatch(panelActions.addDevice(newDevice));
    }

    props.onClose();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      {error && (
        <p className='error'>
          Se encontró un elemento con este nombre. Ingrese un nombre único.
        </p>
      )}

      <InputBox
        id='name'
        label='Nombre Identificador: '
        configuration={{
          type: 'text',
          maxLength: '40',
          value: enteredValues.name,
          onChange: (event) => updateValue('name', event.target.value),
        }}
      />

      <InputBox
        id='price'
        label='Precio por Hr: $ '
        configuration={{
          type: 'number',
          min: '1',
          max: '100',
          value: enteredValues.price,
          onChange: (event) => updateValue('price', event.target.value),
        }}
      />

      <InputBox
        id='brand'
        label='Marca: '
        configuration={{
          type: 'text',
          maxLength: '20',
          value: enteredValues.brand,
          onChange: (event) => updateValue('brand', event.target.value),
        }}
      />

      <InputBox
        id='antiquity'
        label='Antigüedad: '
        configuration={{
          type: 'number',
          min: '0',
          max: '99',
          value: enteredValues.antiquity,
          onChange: (event) => updateValue('antiquity', event.target.value),
        }}
      />

      <InputBox
        id='revision'
        label='Fecha del Último Chequeo: '
        configuration={{
          type: 'date',
          max: new Date().toISOString().slice(0, 10),
          value: enteredValues.revision,
          onChange: (event) => updateValue('revision', event.target.value),
        }}
      />

      <InputBox
        id='serial'
        label='Serial de la Computadora: '
        configuration={{
          type: 'text',
          maxLength: '20',
          value: enteredValues.serial,
          onChange: (event) => updateValue('serial', event.target.value),
        }}
      />

      <InputBox
        id='description'
        label='Descripción General: '
        configuration={{
          maxLength: '150',
          rows: '3',
          value: enteredValues.description,
          onChange: (event) => updateValue('description', event.target.value),
        }}
        textarea
      />

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
