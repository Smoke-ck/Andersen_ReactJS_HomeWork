const API_URL = 'https://fakestoreapi.com/carts';
const API_URL_USER = 'https://fakestoreapi.com/carts/user';

export function getCarts() {
    return request(API_URL_USER, {}, 3);
}

export function addProductInCart(cartData) {
    return request(API_URL, {

        method: "POST",
        body: JSON.stringify({
            userId: 3,
            date: '2020-01-03',
            products: [{
                productId: cartData.id,
            }]
        }),
    })
}

export function updateProductInCart(cartData) {
    return request(API_URL_USER, {

        method: "PUT",
        body: JSON.stringify({
            userId: 3,
            date: '2020-01-03',
            products: [{
                productId: cartData.id,
                quantity: cartData.quantity,
            }]
        }, 3),
    })
}

export function deleteProductInCart(id) {
    return request(API_URL, {
        method: "DELETE",
    }, id)
}

export const request = async (API, config = {}, id = '') => {
    config = {
        method: 'GET',
        ...config,
        headers: { 'Content-Type': 'application/json', ...config.headers },
    };
    const response = await fetch(`${API}/${id}`, config);
    const result = await response.json();

    return result;
}