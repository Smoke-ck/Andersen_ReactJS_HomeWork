const API_URL = 'https://fakestoreapi.com/products';

export function getProducts() {
    return request();
}

export function getProduct(id) {
    return request(
        {
            method: 'GET',
        },
        id
    );
}
// export function updateProduct(product) {       
//     request(
//         {
//             method: 'PUT',
//             body: JSON.stringify(product),
//         },
//         product.id,
//     );
// }   --I don't know why it doesn't work--

export const updateProduct = async (product) => {
    const options = {
        method: "PUT",
        body: JSON.stringify(product),
        headers: {
            "Content-Type": "application/json"
        }
    };

    const response = await fetch(`${API_URL}/${product.id}`, options);
    const result = await response.json();

    return result;
}

export const request = async (config = {}, id = '') => {
    config = {
        method: 'GET',
        ...config,
        headers: { 'Content-Type': 'application/json', ...config },
    };

    const response = await fetch(`${API_URL}/${id}`, config);
    const result = await response.json();

    return result;
}


