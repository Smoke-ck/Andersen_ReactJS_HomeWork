import { FC } from 'react';
import { connect } from 'react-redux';
import { setTodosFilter } from '../../store/actions/todosFilter';
import { IFilterAllToDo } from '../../store/reducers/todosFilter';
import './Filter.scss';
type IToDoFilter = {
    setTodosFilter: (value: string) => {}
    filter: string
}

const Filters: FC<IToDoFilter> = ({ setTodosFilter, filter }) => {
    return (
        <div className="filter">
            <button
                className={filter === 'done' ? 'filter__button filter__button--active' : 'filter__button'}
                onClick={() => setTodosFilter('done')}
            >
                Выполненные задачи
            </button>
            <button
                className={filter === 'todo' ? 'filter__button filter__button--active' : 'filter__button'}
                onClick={() => setTodosFilter('todo')}
            >
                Задачи в работе
            </button>
            <button
                className={filter === 'favorite' ? 'filter__button filter__button--active' : 'filter__button'}
                onClick={() => setTodosFilter('favorite')}
            >
                Избранные задачи
            </button>
            <button
                className={filter === 'all' ? 'filter__button filter__button--active' : 'filter__button'}
                onClick={() => setTodosFilter('all')}
            >
                Все задачи
            </button>
        </div>
    );
}

function mapStateToProps({ todosFilter }: { todosFilter: IFilterAllToDo }) {
    return { filter: todosFilter.value };
}

const mapDispatchToProps = {
    setTodosFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);