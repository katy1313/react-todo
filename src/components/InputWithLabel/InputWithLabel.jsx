import React, { Fragment } from "react";
import styles from './InputWithLabel.module.css';

function InputWithLabel({value, onChange, children}) {
    const inputRef = React.useRef();
    React.useEffect(() => {
        inputRef.current.focus();
      });

    return(
        <Fragment>
            <label htmlFor="todoTitle">{children}</label>
             <input className={styles['newTodo']} id='todoTitle' name='title' value={value} onChange={onChange} ref={inputRef}></input>
        </Fragment>
        
    )
}

export default InputWithLabel;