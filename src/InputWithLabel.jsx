import React, { Fragment } from "react";

function InputWithLabel({value, onChange, children}) {
    const inputRef = React.useRef();
    React.useEffect(() => {
        inputRef.current.focus();
      });

    return(
        <Fragment>
            <label htmlFor="todoTitle">{children}</label>
             <input id='todoTitle' name='title' value={value} onChange={onChange} ref={inputRef}></input>
        </Fragment>
        
    )
}

export default InputWithLabel;