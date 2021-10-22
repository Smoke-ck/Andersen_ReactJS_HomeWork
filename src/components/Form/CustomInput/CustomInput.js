import './Input.css'
import React  from 'react';
function CustomInput({ type, name, onChange, state, label,fore}) {

    return (
        <label className="inputLabel">
            {label}
            <input type={type}
                className="input"
                value={state[name]}
                onChange={onChange}
                name={name}
                max="2021-12-31"
            />
        </label>
    )

}

export default CustomInput;