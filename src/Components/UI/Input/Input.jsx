import React from 'react';
import './Input.sass'

const Input = props => {
    return (
        <input
            name={props?.name}
            onFocus={props?.onFocus ? (e) => props.onFocus(e.target.name) : null}
            onChange={props?.onChange ? (e) => props.onChange(e,props.placeHolder) : null}
            onBlur={props?.onBlur ? (e) => props.onBlur(null) : null}
            className={props.className ? props.className : 'defaultInput'}
            type={props?.type}
            placeholder={props?.placeholder}
            autoComplete='off'
        />
    );
};

export default Input;