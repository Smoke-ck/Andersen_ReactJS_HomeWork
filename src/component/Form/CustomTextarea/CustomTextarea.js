import "./textarea.css"
import React, { Component } from 'react'

export default class CustomTextarea extends Component {

    render() {
        const { name, onChange, state, label} = this.props 
        return <>
            <label className="labelForTextarea">
                {label}
                <textarea
                    className="textarea"
                    type="text"
                    value={state.newPersonData[name]}
                    onChange={onChange}
                    name={name}
                />
                <span
                    className={'textareaInfo' + (state.newPersonData[name].length < 600 ? '' : 'active')}>
                    {state.newPersonData[name].length < 600
                        ? `${'Осталось символов:'} ${ 600 - state.newPersonData[name].length} `
                        : 'Превышен лимит символов в поле'}
                </span>
            </label>
        </>
    }
}