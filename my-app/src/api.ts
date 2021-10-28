export type IToDos = {
    title: string,
    completed: boolean,
    favorite: boolean,
    id: number,
}

const API_URL = 'http://localhost:3000/todos';

export const getTodosApi = async (): Promise<IToDos[]> => {
    const responce = await fetch(
        API_URL, {
        method: 'GET'
    }
    )
    return responce.json();
}

export const deleteTodoApi = async (id: number | string): Promise<IToDos> => {
    const responce = await fetch(
        `${API_URL}/${id}`, {
        method: 'DELETE'
    }
    )
    return responce.json()
}

export const createTodoApi = async (title: string): Promise<IToDos> => {
    const responce = await fetch(
        API_URL, {
        method: 'POST',
        body: JSON.stringify({ title: title, completed: false, favorite: false }),
        headers: { 'Content-Type': 'application/json', },
    }
    )
    return responce.json()
}

export const updateTodoApi = async (id: string | number, todo: IToDos): Promise<IToDos> => {
    const responce = await fetch(
        `${API_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title: todo.title, completed: todo.completed, favorite: todo.favorite }),
        headers: { 'Content-Type': 'application/json', },
    }
    )
    return responce.json()
}

