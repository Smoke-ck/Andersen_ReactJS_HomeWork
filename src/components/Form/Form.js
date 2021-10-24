import React from 'react';
import './Form.css';
import CustomInput from './CustomInput/CustomInput';
import { fetchLogin } from '../../store/actions/loginUser';
import { useState } from 'react'
import { useDispatch } from "react-redux"

function Form({ setActive, callbackStateFromForm }) {

    const ADMIN_NAME = 'mor_2314';
    const ADMIN_PASSWORD = '83r5^_';

    const dispatch = useDispatch();

    const [newForm, setnewForm] = useState({
        name: '',
        password: '',
        errors: {},
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            dispatch(fetchLogin(newForm))
            callbackStateFromForm(newForm.name);
            resetForm();
            setActive(false)
        }
    };

    function validateForm() {
        let data = newForm;
        let errors = {};
        let formIsValid = true;
        let { name, password, } = { ...data }

        name = name.trim();
        if (!name) {
            formIsValid = false;
            errors.name = "Поле пустое"
        } else if (name === ADMIN_NAME || name === "Customer") {
            formIsValid = true;
        }
        else if (name !== ADMIN_NAME || name !== "Customer") {
            formIsValid = false;
            errors.name = "Неверный ввод"
        }

        password = password.trim();
        if (!password) {
            formIsValid = false;
            errors.password = "Поле пустое"
        } else if (password === ADMIN_PASSWORD || password === "456") {
            formIsValid = true;
        }
        else if (password !== ADMIN_PASSWORD || password !== "456") {
            formIsValid = false;
            errors.password = "Неверный пароль"
        }
        setnewForm(prevState => ({
            ...prevState,
            errors: errors,
        }));
        return formIsValid;
    }

    const onChange = (e) => {
        setnewForm(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    const resetForm = () => {
        setnewForm({
            name: '',
            password: '',
            errors: '',
        });
    }
    return (<>
        <form className="containerForm" onSubmit={handleSubmit}>
            <p className="formTittle">Login</p>
            <div className="formButton">
                <input className="button button--ok button__login" type="submit" value="Сохранить" />
                <input className="button button--cancel button__login" type="reset" value="Отмена" onClick={resetForm} />
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
                name='password'
                onChange={onChange}
                state={newForm}
                label="Pasword:"
            />
            <div className="errorMsg">{newForm.errors.password}</div>
        </form>
    </>
    );
}
export default Form;