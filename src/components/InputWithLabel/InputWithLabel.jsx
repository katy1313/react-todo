import  { Fragment } from "react";
import styles from './InputWithLabel.module.css';
import PropTypes from 'prop-types';

function InputWithLabel({value, onChange, children}) {
    // const inputRef = React.useRef();
    // React.useEffect(() => {
    //     inputRef.current.focus();
    //   });

    return(
        <Fragment>
            <label htmlFor="todoTitle">{children}</label>
             <input className={styles['newTodo']} id='todoTitle' name='title' value={value} onChange={onChange} 
            //  ref={inputRef}
            >
                
             </input>
        </Fragment>
        
    )
}
InputWithLabel.propTypes = {
    value: PropTypes.func,
    onChange: PropTypes.func,
    children: PropTypes.func
  }

export default InputWithLabel;