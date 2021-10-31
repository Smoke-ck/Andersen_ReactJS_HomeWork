import { FC, useState, } from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { IToDos } from '../../api';
import { createTodo } from '../../store/actions/todos';
import "./Form.scss";

type ITodoForm = {
    createTodo: (title:string) => Promise <IToDos>
}

const Form: FC<ITodoForm> = ({ createTodo }) => {

    const [title, setTitle] = useState('');

    function onValueChange(e: React.ChangeEvent<HTMLInputElement>) {
        setTitle(e.target.value)
    }

    function onFormSubmit(e: React.FormEvent) {
        e.preventDefault();
        createTodo(title.trim());
        setTitle('')
    }

    return (
        <form id="addTaskForm" onSubmit={onFormSubmit}>
            <div className="form">
                <input
                    className="form__input"
                    type="text"
                    id="taskNameInput"
                    value={title}
                    onChange={onValueChange}
                />
                <div className="two columns"> {title.length > 160
                    ? <span className="errorMsg">Превышен лимит текста задачи на {title.length - 160} символов</span>
                    : <input type="submit" className="form__button" value="Добавить" />}
                </div>
            </div>
        </form>
    );
}

const mapDispatchToProps = {
    createTodo
};

export default connect(null, mapDispatchToProps)(Form);