const API_URL = 'http://localhost:3000/products';

export function getProducts() {
    return request();
}

export function getProduct (id) {
    return request(
        {
            method: 'GET',
        },
        id
    );
}
export function deleteProduct(id) {
    return request(
        {
            method: 'DELETE',
        },
        id
    );
}

export function createProduct(todo) {
    request({
        method: 'POST',
        body: JSON.stringify(todo),
    });
}

export function updateProduct(todo) {
    request(
        {
            method: 'PUT',
            body: JSON.stringify(todo),
        },
        todo.id
    );
}

function request(config = {}, id = '') {
    config = {
        method: 'GET',
        ...config,
        headers: { 'Content-Type': 'application/json', ...config.headers },
    };

    return fetch(`${API_URL}/${id}`, config).then((resp) => resp.json());
}