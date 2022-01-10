import React from "react";
import useForm from "./hooks/useForm";

import Field from "./components/Field";

function App() {
    const {formFields} = useForm({
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

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {formFields}
                <input type="submit"/>
            </form>
        </div>
    );
}

export default App;
