import React from 'react'
import "./Edit.css"
import CustomInput from '../../Form/CustomInput/CustomInput'
import CustomTextarea from "../../Form/CustomTextarea/CustomTextarea"
import { useState } from 'react'
function Edit({ callbackStateFromEdit, onBackClick }) {

    const [newForm, setnewForm] = useState({
        title: '',
        price: '',
        description: '',
        errors: {},
    });

    const { title, price, description } = newForm;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            callbackStateFromEdit({ title, price, description });
            onBackClick();
            resetForm();
        }
    };

    function validateForm() {
        let data = newForm;
        let errors = {};
        let formIsValid = true;
        let { title, price, description } = { ...data };

        title = title.trim();
        if (!title) {
            formIsValid = false;
            errors.title = "Поле пустое"
        }
        price = price.trim()
        if (!price) {
            formIsValid = false;
            errors.price = "Поле пустое"
        } else if (price.length > 30) {
            formIsValid = false;
            errors.price = "Максимальное количество символов 30"
        } else if (!(/[0-9]/).test(price)) {
            formIsValid = false;
            errors.price = "Только числа"
        }

        description = description.trim();
        if (!description) {
            formIsValid = false;
            errors.description = "Поле пустое"
        } else if (description.length > 600) {
            formIsValid = false;
            errors.price = "Максимальное количество символов 600"
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
            title: '',
            price: '',
            description: '',
            errors: {},
        });
    }

    return (
        <>
            <form className="containerForm edit" onSubmit={handleSubmit}>
                <p className="formTittle">Login</p>
                <div className="formButton">
                    <input className="button button--ok" type="submit" value="Сохранить" />
                    <input className="button button--cancel" type="reset" value="Очистить" onClick={resetForm} />
                </div>
                <CustomInput
                    type="text"
                    name="title"
                    onChange={onChange}
                    state={newForm}
                    label="Название продукта:"
                />
                <div className="errorMsg">{newForm.errors.title}</div>
                <CustomInput
                    type="text"
                    name='price'
                    onChange={onChange}
                    state={newForm}
                    label="Сколько в наличии"
                />
                <div className="errorMsg">{newForm.errors.price}</div>
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
