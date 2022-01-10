import React from "react";

const useForm = (initialForm) => {
    const [state, setState] = React.useState({...initialForm});

    const handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        setState((prevState) =>
            ({...prevState, [name]: {...state[name], value}})
        );
    }

    const formFields = Object
        .entries(state)
        .map(([name, {Component, type, value}]) =>
            <Component
                key={name}
                type={type}
                value={value}
                name={name}
                onChange={handleChange}
            />
        );

    return {formFields}
}

export default useForm;