import React from 'react';

const Field = (props) => {
    const {
        type,
        name,
        onChange,
        label,
        errorMessage,
        isValid,
        value
    } = props;

    return (
        <div>
            <label>{label}</label>
            <input type={type} name={name} onChange={onChange} value={value}/>
            {errorMessage && !isValid && (
                <span>{errorMessage}</span>
            )}
        </div>
    );
};

export default Field;