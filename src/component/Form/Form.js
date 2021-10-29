import './Form.css';
import React, { Component } from 'react'
import CustomInput from './CustomInput/CustomInput';
import CustomTextarea from './CustomTextarea/CustomTextarea';

export default class Form extends Component {

    state = {
        newPersonData:
        {
            name: '',
            surname: '',
            phone: '',
            date: '',
            web: '',
            about: '',
            stack: '',
            project: '',
        },
        errors: {},
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.validateForm()) {
            this.props.callbackStateFromForm(this.state.newPersonData)
            this.resetForm();
            this.props.hideForm();
        }

    };

    validateForm() {
        let Data = this.state.newPersonData;
        let errors = {};
        let formIsValid = true;
        let { name, surname, phone, date, web, about, stack, project } = Data 
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
        this.setState({
            errors: errors
        });
        return formIsValid;
    }

    onChange = (e) => {
        this.setState({
            newPersonData: {
                ...this.state.newPersonData,
                [e.target.name]: e.target.value
            }
        });
    }

    resetForm = () => {
        this.setState({
            newPersonData: {
                name: '',
                surname: '',
                phone: '',
                date: '',
                web: '',
                about: '',
                stack: '',
                project: '',
            },
            errors: '',
        });
    }

    render() {
        return (<>

            <form className="container" onSubmit={this.handleSubmit}>
                <p className="formTittle">Создание анкеты</p>
                <CustomInput
                    type="text"
                    name='name'
                    onChange={this.onChange}
                    state={this.state}
                    label="Имя:"
                />
                <CustomInput
                    type="text"
                    name='surname'
                    onChange={this.onChange}
                    state={this.state}
                    label="Фамилия:"
                />
                <CustomInput
                    type='tel'
                    name='phone'
                    onChange={this.onChange}
                    state={this.state}
                    label="Телефон:"
                />
                <CustomInput
                    type="date"
                    name='date'
                    onChange={this.onChange}
                    state={this.state}
                    label="Дата рождения:"
                />
                <CustomInput
                    type="text"
                    name='web'
                    onChange={this.onChange}
                    state={this.state}
                    label="Веб сайт:"
                />
                <CustomTextarea
                    name='about'
                    onChange={this.onChange}
                    state={this.state}
                    label="  О себе:"
                />
                <div className="errorMsg">{this.state.errors.about}</div>
                <CustomTextarea
                    name='stack'
                    onChange={this.onChange}
                    state={this.state}
                    label='Стек технологий:'
                />
                <div className="errorMsg">{this.state.errors.stack}</div>
                <CustomTextarea
                    name='project'
                    onChange={this.onChange}
                    state={this.state}
                    label="Описание последнего проекта:"
                />
                <div className="errorMsg">{this.state.errors.project}</div>
                <div className="formButton">
                    <input className="button button--ok" type="submit" value="Сохранить" />
                    <input className="button button--cancel" type="reset" value="Отмена" onClick={this.resetForm} />
                </div>
            </form>
        </>
        );
    }
}
