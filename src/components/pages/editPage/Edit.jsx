import React from 'react'
import "./Edit.css"
import CustomInput from '../../Form/CustomInput/CustomInput'
import CustomTextarea from "../../Form/CustomTextarea/CustomTextarea"
import { useState } from 'react'
function Edit({ callbackStateFromEdit, onBackClick }) {

    const [newForm, setnewForm] = useState({
        name: '',
        number: '',
        description: '',
        errors: {},
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            callbackStateFromEdit(newForm);
            onBackClick();
            resetForm();
        }
    };

    function validateForm() {
        let data = newForm;
        let errors = {};
        let formIsValid = true;
        let { name, number, description } = { ...data };

        name = name.trim();
        if (!name) {
            formIsValid = false;
            errors.name = "Поле пустое"
        }
        number = number.trim()
        if (!number) {
            formIsValid = false;
            errors.number = "Поле пустое"
        } else if (number.length > 30) {
            formIsValid = false;
            errors.number = "Максимальное количество символов 30"
        } else if (!(/[0-9]/).test(number)) {
            formIsValid = false;
            errors.number = "Только числа"
        }

        description = description.trim();
        if (!description) {
            formIsValid = false;
            errors.description = "Поле пустое"
        } else if (description.length > 600) {
            formIsValid = false;
            errors.number = "Максимальное количество символов 600"
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
            number: '',
            description: '',
            errors: {},
        });
    }

    return (<>
        <form className="containerForm edit" onSubmit={handleSubmit}>
            <p className="formTittle">Login</p>
            <div className="formButton">
                <input className="button button--ok" type="submit" value="Сохранить" />
                <input className="button button--cancel" type="reset" value="Отмена" onClick={resetForm} />
            </div>
            <CustomInput
                type="text"
                name="name"
                onChange={onChange}
                state={newForm}
                label="Название продукта:"
            />
            <div className="errorMsg">{newForm.errors.name}</div>
            <CustomInput
                type="text"
                name='number'
                onChange={onChange}
                state={newForm}
                label="Сколько в наличии"
            />
            <div className="errorMsg">{newForm.errors.number}</div>
            <CustomTextarea
                name='description'
                onChange={onChange}
                state={newForm}
                label="Описание товара:"
            />
            <div className="errorMsg">{newForm.errors.description}</div>
        </form>
    </>
    );
}

export default Edit
