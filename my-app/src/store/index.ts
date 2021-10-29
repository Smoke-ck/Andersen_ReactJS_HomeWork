import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import todosReducer from './reducers/todos';
import todosFilterReducer from './reducers/todosFilter';
// import logger from "redux-logger"; 
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    todos: todosReducer,
    todosFilter: todosFilterReducer,
});
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
    )
)

export type RootState = ReturnType<typeof store.getState>

export default store;