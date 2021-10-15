import './Form.css';
import CustomInput from './CustomInput/CustomInput';
import CustomTextarea from './CustomTextarea/CustomTextarea';
import { useState } from 'react'

function Form({ callbackStateFromForm }) {

    const [newForm, setnewForm] = useState({
        name: '',
        surname: '',
        phone: '',
        date: '',
        web: '',
        about: '',
        stack: '',
        project: '',
        errors: {},
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            callbackStateFromForm(newForm);
            resetForm();
        }
    };
    
    function validateForm() {
        let data = newForm;
        let errors = {};
        let formIsValid = true;
        let { name, surname, phone, date, web, about, stack, project } = {...data};

        name = name.trim();
        if (!name) {
            formIsValid = false;
            errors.name = "Поле пустое"
        } else if ((/[0-9]/).test(name)) {
            formIsValid = false;
            errors.name = "Имя: не может содержать цыфры"
        } else if (!(/[A-Z-А-Я-Ё]/).test(name) || name[0] !== name[0].toUpperCase()) {
            formIsValid = false;
            errors.name = "Имя должно начинаться с большой буквы"
        } 

        surname = surname.trim();
        if (!surname) {
            formIsValid = false;
            errors.surname = "Поле пустое"
        } else if ((/[0-9]/).test(surname)) {
            formIsValid = false;
            errors.surname = "Фамилия: не может содержать цыфры"
        } else if (!(/[A-Z-А-Я-Ё]/).test(surname) || surname[0] !== surname[0].toUpperCase()) {
            formIsValid = false;
            errors.surname = "Фамилия должна начинаться с большой буквы,"
        }

        phone = phone.trim()
        if (!phone) {
            formIsValid = false;
            errors.phone = "Поле пустое"
        } else if (!((/[0-9]{1}-[0-9]{4}-[0-9]{2}-[0-9]{2}/).test(phone)) || phone.length > 12) {
            formIsValid = false;
            errors.phone = "Не коректный номер,формат: X-XXXX-XX-XX"
        }

        if (!web) {
            formIsValid = false;
            errors.web = "Поле пустое "
        } else if (!web.trim().startsWith('https://')) {
            formIsValid = false;
            errors.web = "Имя сайта должно начинаться с 'https://'"
        }
        if (!date) {
            formIsValid = false;
            errors.date = "Поле пустое"
        }

        about = about.trim();
        if (!about) {
            formIsValid = false;
            errors.about = "Поле пустое"
        } else if (about.length > 600) { formIsValid = false; 
        } 

        if (!stack) {
            formIsValid = false;
            errors.stack = "Поле пустое"
        } else if (stack.length > 600) { formIsValid = false; }

        if (!project) {
            formIsValid = false;
            errors.project = "Поле пустое"
        } else if (project.length > 600) { formIsValid = false; }
        
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
            phone: '',
            date: '',
            web: '',
            about: '',
            stack: '',
            project: '',
            errors: {},
        });
    }
    return (<>
        <form className="container" onSubmit={handleSubmit}>
            <p className="formTittle">Создание анкеты</p>
            <CustomInput
                type="text"
                name='name'
                onChange={onChange}
                state={newForm}
                label="Имя:"
            />
            <CustomInput
                type="text"
                name='surname'
                onChange={onChange}
                state={newForm}
                label="Фамилия:"
            />
            <CustomInput
                type='tel'
                name='phone'
                onChange={onChange}
                state={newForm}
                label="Телефон:"
            />
            <CustomInput
                type="date"
                name='date'
                onChange={onChange}
                state={newForm}
                label="Дата рождения:"
            />
            <CustomInput
                type="text"
                name='web'
                onChange={onChange}
                state={newForm}
                label="Веб сайт:"
            />
            <CustomTextarea
                name='about'
                onChange={onChange}
                state={newForm}
                label="О себе:"
            />
            <CustomTextarea
                name='stack'
                onChange={onChange}
                state={newForm}
                label='Стек технологий:'
            />
            <CustomTextarea
                name='project'
                onChange={onChange}
                state={newForm}
                label="Описание последнего проекта:"
            />
            <div className="formButton">
                <input className="button button--ok" type="submit" value="Сохранить" />
                <input className="button button--cancel" type="reset" value="Отмена" onClick={resetForm} />
            </div>
        </form>
    </>
    );
}
export default Form;