import { IToDos } from './../../api';
import {
    ACTION_DELETE,
    ACTION_CREATE_ITEM,
    ACTION_SET_ITEMS,
    ACTION_SET_ITEM,
} from '../actions/todos';

export type IAllToDos = {
    items: Array<IToDos>
}

const initialState: IAllToDos = {
    items: [],
};

export default function (state = initialState, { type, payload }: { type: string, payload: any }) {
    switch (type) {
        case ACTION_DELETE:
            return {
                ...state,
                items: state.items.filter((item) => item.id !== payload),
            };
        case ACTION_CREATE_ITEM:
            return {
                ...state,
                items: [...state.items, payload],
            };
        case ACTION_SET_ITEMS: {
            return { items: payload };
        }
        case ACTION_SET_ITEM: {
            return {
                items: state.items.map((item) =>
                    item.id === payload.id ? payload : item
                ),
            };
        }
        default:
            return state;
    }
}