import { IToDos } from './../../api';
export const ACTION_SET_TODOS_FILTER = 'ACTION_SET_TODOS_FILTER';
export function setTodosFilter(payload: any):{} {
    return { type: ACTION_SET_TODOS_FILTER, payload };
}