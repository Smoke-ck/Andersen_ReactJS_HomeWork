import "./textarea.css"
import React  from 'react';
function CustomTextarea({ name, onChange, state, label }) {

    return <>
        <label className="labelForTextarea">
            {label}
            <textarea
                className="textarea"
                type="text"
                value={state[name]}
                onChange={onChange}
                name={name}
            />
            <span
                className={'textareaInfo' + (state[name].length < 600 ? '' : 'active')}>
                {state[name].length < 600
                    ? `${'Осталось символов:'} ${600 - state[name].length} `
                    : 'Превышен лимит символов в поле'}
            </span>
        </label>
    </>
}

export default CustomTextarea;