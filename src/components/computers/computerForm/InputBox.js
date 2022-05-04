import classes from './InputBox.module.css';

function InputBox(props) {
  return (
    <div className={classes.inputBox}>
      <label htmlFor={props.id}>{props.label}</label>
      {!props.textarea && (
        <input id={props.id} {...props.configuration} required />
      )}
      {props.textarea && (
        <textarea id={props.id} {...props.configuration} required />
      )}
    </div>
  );
}

export default InputBox;
