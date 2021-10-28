import { IToDos } from './../../api';
import { getTodosApi, deleteTodoApi, createTodoApi, updateTodoApi } from '../../api'
import { Dispatch } from "redux";
import { RootState } from '../index';

export const ACTION_SET_ITEMS = 'ACTIONS_SET_ITEMS';
export const fetchTodos = () => (dispatch: Dispatch): void => {
    getTodosApi()
        .then((data) =>
            dispatch({
                type: ACTION_SET_ITEMS,
                payload: data,
            })
        );
};

export const ACTION_DELETE = 'ACTION_DELETE';
export const deleteTodo = (id: number | string) => (dispatch: Dispatch): Promise<any | IToDos> => {
    return deleteTodoApi(id)
        .then(() => dispatch({
            type: ACTION_DELETE,
            payload: id,
        }))
};

export const ACTION_SET_ITEM = 'ACTION_SET_ITEM';
export const toggleTodo = (id: number | string) => (dispatch: Dispatch, state: () => RootState): Promise<any | IToDos> => {
    const { todos } = state();
    const { items } = todos
    const item = items.find((item: IToDos) => item.id === id);
    const newItem = { ...item, title: item.title, completed: !item.completed, favorite: item.favorite };

    return updateTodoApi(id, newItem)
        .then(() =>
            dispatch({
                type: ACTION_SET_ITEM,
                payload: newItem,
            })
        );
};

export const updateTodo = (id: number | string, title: string) => (dispatch: Dispatch, state: () => RootState): Promise<any | IToDos> => {
    const { todos } = state();
    const { items } = todos
    const item = items.find((item: IToDos) => item.id === id);
    const newItem = { ...item, title: title, completed: item.completed, favorite: item.favorite };

    return updateTodoApi(id, newItem)
        .then(() =>
            dispatch({
                type: ACTION_SET_ITEM,
                payload: newItem,
            })
        );
};

export const toggleTodoFavorite = (id: number | string) => (dispatch: Dispatch, state: () => RootState): Promise<any | IToDos> => {
    const { todos } = state();
    const { items } = todos
    const item = items.find((item: IToDos) => item.id === id);
    const newItem = { ...item, title: item.title, completed: item.completed, favorite: !item.favorite };

    return updateTodoApi(id, newItem)
        .then(() =>
            dispatch({
                type: ACTION_SET_ITEM,
                payload: newItem,
            })
        );
};

export const ACTION_CREATE_ITEM = 'ACTION_CREATE_ITEM';
export const createTodo = (title: IToDos) => (dispatch: Dispatch): Promise<any | IToDos> => {

    return createTodoApi(title)
        .then((data) =>
            dispatch({
                type: ACTION_CREATE_ITEM,
                payload: data,
            })
        );
};
