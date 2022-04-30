import Card from '../wrappers/Card';
import classes from './RentalItem.module.css';

function RentalItem(props) {
  return (
    <li>
      <Card className={classes.rental}>
        <p className={classes.name}>{props.name}</p>
        <p className={classes.data}>{props.startTime}</p>
        <p className={classes.data}>{props.endTime}</p>
        <p className={classes.data}>{props.duration} Hrs</p>
        <p className={classes.data}>$ {props.price}</p>
        <p className={classes.result}>$ {props.total}</p>
        <div className={classes.actions}>
          <button className='red-button'>&#128465;</button>
        </div>
      </Card>
    </li>
  );
}

export default RentalItem;
