import './Input.css'

function CustomInput({ type, name, onChange, state, label }) {

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
            <div className="errorMsg">{state.errors[name]}</div>
        </label>
    )

}

export default CustomInput;