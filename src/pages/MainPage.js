import MainContentWrapper from '../components/wrappers/MainContentWrapper';
import Card from '../components/wrappers/Card';
import Paragraph from '../components/wrappers/Paragraph';

function MainPage() {
	return (
		<MainContentWrapper title='PÁGINA PRINCIPAL'>
			<Card style={{ lineHeight: '1.6' }}>
				<h2
					className='heading'
					style={{ textAlign: 'center', padding: '1.2rem' }}
				>
					Sobre el Panel de Control
				</h2>
				<Paragraph header='¿En que consiste el Panel de Control?'>
					En el panel encontrarás un <strong>'Device'</strong> por cada
					computadora que exista en la aplicación. Estos devices son simples
					controles que te permiten iniciar un temporizador para medir el tiempo
					que ese equipo lleve ocupado desde el inicio de la renta.
				</Paragraph>

				<Paragraph header='¿Como manejar una Renta?'>
					Simplemente inicia la renta apretando el botón{' '}
					<strong>'Comenzar Tiempo'</strong> esto iniciara el temporizador de
					minutos. Una vez quieras terminar la renta simplemente aprieta{' '}
					<strong>'Detener Tiempo'</strong> y confirma tu decisión en la ventana
					de dialogo que aparezca. Finalmente aparecerá una ventana con los
					resultados de la renta incluyendo un total ya calculado para ti en
					base al precio de la hora indicado en la computadora. Una vez cierres
					la ventana puedes ir a <strong>'RENTAS'</strong> para ver un breve
					registro de la renta si lo necesitas. Cualquier Renta iniciada puede
					ser cancelada sin repercusión alguna.
				</Paragraph>

				<Paragraph header='¿Que significan los colores?'>
					Dependiendo el numero de horas a rentar que coloques aparecerán
					distintos colores a medida se desarrolle la renta, un buen resumen es
					el siguiente:
					<ul style={{ listStylePosition: 'inside', marginTop: '1vh' }}>
						<li>
							Gris: El temporizador esta desactivado o en otras palabras no hay
							renta en curso.
						</li>
						<li>
							Azul: Significa tiempo libre y aparece en una renta sin horas a
							rentar especificadas. No te preocupes no ocurrirá ningún error si
							no las especificas.
						</li>
						<li>
							Verde: Si se especificaron horas, el temporizador tendrá un color
							verde siempre y cuando el tiempo contado no supere a las horas
							rentadas.
						</li>
						<li>
							Naranja: Naranja aparece cuando quedan 12 minutos para que se
							cumplan las horas de la renta indicadas.
						</li>
						<li>
							Rojo: El tiempo ha superado a las horas especificadas, se seguirá
							contando el tiempo sin embargo. Esto solo es una señal visual de
							que se ha pasado el tiempo nada mas.
						</li>
					</ul>
				</Paragraph>
			</Card>
			<Card>
				<h2
					className='heading'
					style={{ textAlign: 'center', padding: '1.2rem' }}
				>
					Sobre los Equipos
				</h2>
				<Paragraph header='¿En que consiste Equipos?'>
					En la ventana de equipos o computadoras podrás ver la información de
					cada computadora que hayas agregado. Contiene información importante
					como el precio de la hora de cada equipo, serial, marca, etc. Esta
					información puede ser modificada o eliminada en cualquier momento sin
					problema alguno, solo hay que tener en cuenta que cualquier cambio
					hecho aquí se vera reflejado en nuestro panel de control como por
					ejemplo cambios en el precio.
				</Paragraph>

				<Paragraph header='¿Como puedo insertar, eliminar o modificar un Equipo?'>
					Para insertar un nuevo Equipo solo aprieta el botón necesario y llena
					todos los datos que la ventana pide, solo hay que evitar repetir
					nombres de Equipos pues estos deben ser únicos. Se puede modificar los
					datos del Equipo al apretar el botón con el icono del lápiz del
					elemento que quieras modificar, esto abrirá una ventana donde
					aparecerán automáticamente los datos del elemento seleccionado. Se
					pueden modificar todos los campos, inclusive el nombre del Equipo
					mientras no sea repetido, también se pueden dejar tal y como están sin
					ningún problema. Por ultimo para eliminar solo presiona el botón con
					el icono de un bote de basura que pertenezca al elemento que deseas
					eliminar, tendrás que confirmar esta decisión.
				</Paragraph>

				<Paragraph header='¿Como afectan exactamente los cambios al Panel?'>
					Al crear una Computadora se creara un Device que le corresponda y
					eliminarla también borrará a ese mismo Device. Solo cambios en el
					nombre y precio modificarán directamente al Device.
				</Paragraph>
			</Card>
			<Card>
				<h2
					className='heading'
					style={{ textAlign: 'center', padding: '1.2rem' }}
				>
					Sobre las Rentas
				</h2>
				<Paragraph header='¿En que consiste Rentas?'>
					Finalmente cada renta realizada sera registrada en este apartado. Las
					rentas están separadas por el día en que fueron realizadas y por lo
					tanto se agrego un buscador de fechas para seleccionar el día del cual
					quieres revisar las rentas. Por defecto siempre aparecerá el día
					actual marcado al principio.
				</Paragraph>

				<Paragraph header='¿Como funciona el buscador de días?'>
					El buscador de días te permite seleccionar cualquier día y checar las
					rentas que sucedieron en ese exacto día. Para ello solo tienes que dar
					click en el pequeño icono de calendario, después en el calendario que
					aparezca buscar la fecha deseada o también puedes escribir
					directamente la fecha en el cuadro de texto. Finalmente presiona el
					botón <strong>Buscar</strong> para que tu selección pueda ser
					procesada.
				</Paragraph>

				<Paragraph header='¿Porque no puedo modificar las rentas?'>
					Debido a que las rentas son información más delicada que los datos de
					la computadora no se permite su modificación, adicionalmente el tiempo
					de duración de la renta y el precio total se crea automáticamente por
					la computadora y no por el usuario, por lo tanto la probabilidad de un
					error es más baja. Las rentas aun puede ser eliminadas sin mayor
					problema.
				</Paragraph>
			</Card>
		</MainContentWrapper>
	);
}

export default MainPage;
