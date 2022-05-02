import ComputerItem from './ComputerItem';
import classes from './ComputersList.module.css';

function ComputersList(props) {
  return (
    <ul className={classes.list}>
      <li>
        <button className={classes.button} onClick={props.onShowForm}>
          Agregar Nueva Computadora
        </button>
      </li>
      {props.computers.map((computer) => (
        <ComputerItem
          key={computer.name}
          {...computer}
          onUpdate={props.onShowForm.bind(null, computer)}
          onDelete={props.onDelete}
        />
      ))}
    </ul>
  );
}

export default ComputersList;
