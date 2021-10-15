import './Input.css'
import React, { Component } from 'react'

export default class CustomInput extends Component {
    render() {
        const { type, name, onChange, state, label } = this.props
        return (
            <label className="inputLabel">
                {label}
                <input type={type}
                className="input"
                    value={state.newPersonData[name]}
                    onChange={onChange}
                    name={name}
                    max="2021-12-31"
                />
                <div className="errorMsg">{state.errors[name]}</div>
            </label>
        )
    }
}