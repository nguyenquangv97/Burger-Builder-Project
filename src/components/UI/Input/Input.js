import React from 'react';
import classes from './Input.module.css'

const input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];
    let validationError = null;

    if(props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid)
        validationError = <p>Please enter a valid value!</p>
    }
    switch (props.elementType) {
        case('input'):
            inputElement = <input
                {...props.elementConfig}
                value={props.value}
                className={inputClasses.join(' ')}
                onChange={props.changed}
            />;
            break;
        case('textarea'):
            inputElement = <textarea
                {...props.elementConfig}
                value={props.value}
                className={inputClasses.join(' ')}
                onChange={props.changed}
            />;
            break;
        case('select'):
            inputElement = (
                <select
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                    className={inputClasses.join(' ')}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>{option.displayValue}</option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input
                {...props.elementConfig}
                value={props.value}
                className={inputClasses.join(' ')}
                onChange={props.changed}
            />;

    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
            {validationError}
        </div>
    );
};


export default input;