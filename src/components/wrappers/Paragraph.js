import classes from './Paragraph.module.css';

// Created to combine a header and paragraph
function Paragraph(props) {
  return (
    <div className={classes.paragraph}>
      <h3>{props.header}</h3>
      <div className={classes.p}>{props.children}</div>
    </div>
  );
}

export default Paragraph;
