import Card from '../wrappers/Card';
import classes from './RentalItem.module.css';

function RentalItem(props) {
  return (
    <li>
      <Card className={classes.rental}>
        <p className={classes.name}>{props.name}</p>
        <div className={classes.data}>
          <p>{props.startTime}</p>
          <p>{props.endTime}</p>
          <p>{props.duration} Hrs</p>
          <p>$ {props.price}</p>
          <p className={classes.result}>$ {props.total}</p>
        </div>
        <div className={classes.actions}>
          <button className='red-button'>&#128465;</button>
        </div>
      </Card>
    </li>
  );
}

export default RentalItem;
