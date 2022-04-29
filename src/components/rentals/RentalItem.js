import Card from '../wrappers/Card';
import classes from './RentalItem.module.css';

function RentalItem() {
  return (
    <li>
      <Card className={classes.rental}>
        <p className={classes.name}>DEVICE NUMBER X</p>
        <div className={classes.data}>
          <p>13:10</p>
          <p>15:10</p>
          <p>2.00 Hrs</p>
          <p>$10.00</p>
          <p>$ 20.00</p>
        </div>
        <div className={classes.actions}>
          <button className='red-button'>&#128465;</button>
        </div>
      </Card>
    </li>
  );
}

export default RentalItem;
