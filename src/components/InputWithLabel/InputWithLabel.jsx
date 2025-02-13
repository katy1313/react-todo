import  { Fragment } from "react";
import styles from './InputWithLabel.module.css';
import PropTypes from 'prop-types';

function InputWithLabel({value, onChange, children, placeholder}) {
    // const inputRef = React.useRef();
    // React.useEffect(() => {
    //     inputRef.current.focus();
    //   });

    return(
        <Fragment>
            <label htmlFor="todoTitle">{children}</label>
             <input className={styles['newTodo']} id='todoTitle' name='title' value={value} onChange={onChange} placeholder={placeholder}
            //  ref={inputRef}
            >
                
             </input>
        </Fragment>
        
    )
}

InputWithLabel.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    children: PropTypes.array
}

export default InputWithLabel;