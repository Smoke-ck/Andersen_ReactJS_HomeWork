import React from 'react';
import './Form.css';
import CustomInput from './CustomInput/CustomInput';

import { useState } from 'react'

function Form({ setActive, callbackStateFromForm }) {

    const [newForm, setnewForm] = useState({
        name: '',
        surname: '',
        errors: {},
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            callbackStateFromForm(newForm.name);
            resetForm();
            setActive(false)
        }
    };

    function validateForm() {
        let data = newForm;
        let errors = {};
        let formIsValid = true;
        let { name, surname, } = { ...data };

        name = name.trim();
        if (!name) {
            formIsValid = false;
            errors.name = "Поле пустое"
        } else if (!(/[A-Z-А-Я-Ё]/).test(name) || name[0] !== name[0].toUpperCase()) {
            formIsValid = false;
            errors.name = "Имя должно начинаться с большой буквы"
        } else if ((name === "Admin" && surname === '123') || (name === "Customer" && surname === '456')) {
            formIsValid = true
        } else {
            formIsValid = false
            errors.name = "Логин или пароль не верны"
            errors.surname = "Логин или пароль не верны"
        }
        surname = surname.trim();
        if (!surname) {
            formIsValid = false;
            errors.surname = "Поле пустое"
        }
        setnewForm({
            ...newForm,
            errors: errors,
        });
        return formIsValid;
    }

    const onChange = (e) => {
        setnewForm({
            ...newForm,
            [e.target.name]: e.target.value
        });
    }

    const resetForm = () => {
        setnewForm({
            name: '',
            surname: '',
            errors: '',
        });
    }
    return (<>
        <form className="containerForm" onSubmit={handleSubmit}>
            <p className="formTittle">Login</p>
            <div className="formButton">
                <input className="button button--ok" type="submit" value="Сохранить" />
                <input className="button button--cancel" type="reset" value="Отмена" onClick={resetForm} />
            </div>
            <CustomInput
                type="text"
                name='name'
                onChange={onChange}
                state={newForm}
                label="UserName:"
            />
            <div className="errorMsg">{newForm.errors.name}</div>
            <CustomInput
                type="text"
                name='surname'
                onChange={onChange}
                state={newForm}
                label="Pasword:"
            />
            <div className="errorMsg">{newForm.errors.surname}</div>
        </form>
    </>
    );
}
export default Form;