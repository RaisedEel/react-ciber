import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { computersActions } from '../../../store/computers-slice';
import { panelActions } from '../../../store/panel-slice';
import InputBox from './InputBox';
import getDate from '../../../helpers/getDate';
import classes from './ComputerForm.module.css';

function ComputerForm(props) {
	const { initValues } = props;
	const dispatch = useDispatch();
	const { computers } = useSelector((state) => state.computers);
	const [error, setError] = useState(false);
	const [enteredValues, setEnteredValues] = useState(initValues);

	const updateValueHandler = (field, value) => {
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

		// Check if the name is already in the store
		if (
			computers.some(
				(computer) =>
					computer.name === enteredValues.name &&
					initValues.name !== enteredValues.name
			)
		) {
			setError(true);
			return;
		}

		if (initValues.name) {
			// Update the values
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
			// Add new entry
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
				label='Identificador: '
				configuration={{
					type: 'text',
					maxLength: '60',
					value: enteredValues.name,
					onChange: (event) => updateValueHandler('name', event.target.value),
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
					onChange: (event) => updateValueHandler('price', event.target.value),
				}}
			/>

			<InputBox
				id='brand'
				label='Marca: '
				configuration={{
					type: 'text',
					maxLength: '60',
					value: enteredValues.brand,
					onChange: (event) => updateValueHandler('brand', event.target.value),
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
					onChange: (event) =>
						updateValueHandler('antiquity', event.target.value),
				}}
			/>

			<InputBox
				id='revision'
				label='Fecha del Último Chequeo: '
				configuration={{
					type: 'date',
					max: getDate(new Date()),
					value: enteredValues.revision,
					onChange: (event) =>
						updateValueHandler('revision', event.target.value),
				}}
			/>

			<InputBox
				id='serial'
				label='Serial de la Computadora: '
				configuration={{
					type: 'text',
					maxLength: '60',
					value: enteredValues.serial,
					onChange: (event) => updateValueHandler('serial', event.target.value),
				}}
			/>

			<InputBox
				id='description'
				label='Descripción General: '
				configuration={{
					maxLength: '200',
					rows: '3',
					value: enteredValues.description,
					onChange: (event) =>
						updateValueHandler('description', event.target.value),
				}}
				textarea
			/>

			<div className={classes.actions}>
				<button
					title='Cancelar'
					type='button'
					className='red-button'
					onClick={props.onClose}
				>
					Cancelar
				</button>
				<button title='Confirmar'>Subir Datos</button>
			</div>
		</form>
	);
}

export default ComputerForm;
