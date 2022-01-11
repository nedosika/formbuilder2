import React from "react";
import useForm from "./hooks/useForm";

import Field from "./components/Field";

function App() {
    const {formFields, handleSubmit} = useForm({
        firstName: {
            type: 'input',
            value: '',
            Component: Field
        },
        lastName: {
            type: 'input',
            value: '',
            Component: Field
        },
        age: {
            type: 'number',
            value: 18,
            Component: Field
        }
    });

    const onSubmit = (data) => console.log(data);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {formFields}
                <input type="submit"/>
            </form>
        </div>
    );
}

export default App;
