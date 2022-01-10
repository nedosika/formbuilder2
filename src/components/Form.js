import React from 'react';

const Form = (props) => {
    const {children} = props;

    return (
        <form {...props}>
            {children}
        </form>
    );
};

export default Form;