import ComputerItem from './ComputerItem';
import classes from './ComputersList.module.css';

function ComputersList(props) {
  return (
    <ul className={classes.list}>
      <li>
        <button className={classes.button}>Agregar Nueva Computadora</button>
      </li>
      {props.computers.map((computer) => (
        <ComputerItem key={computer.name} {...computer} />
      ))}
    </ul>
  );
}

export default ComputersList;
