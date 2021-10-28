import { FC } from 'react';
import ListItem from '../listItem/ListItem';
import { connect } from 'react-redux';
import { deleteTodo, toggleTodoFavorite, toggleTodo, updateTodo } from '../../store/actions/todos';
import { IToDos } from '../../api';
import { IAllToDos } from '../../store/reducers/todos';
import { IFilterAllToDo } from '../../store/reducers/todosFilter';
import './List.scss'

type IToDoList = {
    todos: Array<IToDos>,
    onItemToggle: (id: number | string) => Promise<IToDos>,
    onItemFavorite: (id: number | string) => Promise<IToDos>,
    onItemDelete: (id: number | string) => void,
    onUpdate: (id: number | string, title: string) => Promise<IToDos>
}

const List: FC<IToDoList> = ({ todos, onItemToggle, onItemFavorite, onItemDelete, onUpdate }) => {

    return (
        <div className="list">
            {todos.map((item) => (
                <ListItem
                    key={item.id}
                    item={item}
                    onItemToggle={onItemToggle}
                    onItemFavorite={onItemFavorite}
                    onItemDelete={onItemDelete}
                    onUpdate={onUpdate}
                />
            ))}
        </div>
    );
}
function mapStateToProps({ todos, todosFilter }: { todos: IAllToDos, todosFilter: IFilterAllToDo }) {
    let items = todos.items;

    if (todosFilter.value !== 'all') {
        items = items.filter((item) => {
            return (
                (todosFilter.value === 'todo' && !item.completed) ||
                (todosFilter.value === 'done' && item.completed) ||
                (todosFilter.value === 'favorite' && item.favorite && !item.completed)
            );
        });
    }
    return {
        todos: items,
    };
}

const mapDispatchToProps = {
    onItemDelete: deleteTodo,
    onItemFavorite: toggleTodoFavorite,
    onItemToggle: toggleTodo,
    onUpdate: updateTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);