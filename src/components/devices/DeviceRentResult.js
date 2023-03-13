import classes from './DeviceRentResult.module.css';

function DeviceRentResult(props) {
	const { results } = props;

	return (
		<div className={classes.results}>
			<p>
				<strong>Nombre del Equipo</strong> {results.name}
			</p>
			<p>
				<strong>Horas Rentadas</strong>
				{results.rentedHours ? results.rentedHours : 'Tiempo Libre'}
			</p>
			<p>
				<strong>Precio de la Hora</strong> $ {results.price}
			</p>
			<p>
				<strong>Hora Inicial</strong> {results.startTime}
			</p>
			<p>
				<strong>Hora Final</strong> {results.endTime}
			</p>
			<p>
				<strong>Duración en Minutos</strong> {results.duration}
			</p>
			<hr />
			<p className={classes.total}>
				<strong>TOTAL</strong> $ {results.total}
			</p>
			<div className={classes.action}>
				<button title='Aceptar' onClick={props.onStore}>
					ACEPTAR
				</button>
			</div>
		</div>
	);
}

export default DeviceRentResult;
