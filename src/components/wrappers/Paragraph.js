import classes from './Paragraph.module.css';

function Paragraph(props) {
  return (
    <div className={classes.paragraph}>
      <h3>{props.header}</h3>
      <div className={classes.p}>
        {props.children}
      </div>
    </div>
  );
}

export default Paragraph;