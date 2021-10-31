import { ACTION_SET_TODOS_FILTER } from '../actions/todosFilter';

export type IFilterAllToDo = {
    value: string,
}

const initialState: IFilterAllToDo= {
    value: 'all',
};

export default function (state = initialState, { type, payload }: {type: string, payload: any }) {
    switch (type) {
        case ACTION_SET_TODOS_FILTER:
            return { value: payload };
        default:
            return state;
    }
}