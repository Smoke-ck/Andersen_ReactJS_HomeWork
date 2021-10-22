import { useEffect, useState } from "react"
import { getProducts, updateProduct } from "../api";


export default function useHomePageList() {

    const [itemsData, setItems] = useState([]);
    useEffect(() => {
        getProducts().then(setItems);
    }, []);

    function changeItem(id, item) {
        let newItem = itemsData.find((item) => item.id === id);

        newItem = {
            ...newItem,
            name: item.name,
            number: item.number,
            description: item.description,
        }
        const newItems = itemsData.map((item) => (item.id === id ? newItem : item));

        updateProduct(newItem);

        setItems(newItems);
    }

    function remove(id, count) {
        let newItem = itemsData.find((item) => item.id === id);

        newItem = {
            ...newItem,
            inStock: !newItem.inStock,
            number: newItem.number + count
        }
        const newItems = itemsData.map((item) => (item.id === id ? newItem : item));

        updateProduct(newItem);

        setItems(newItems);
    }


    function toggleTodoItem(id, count = 1) {
        let newItem = itemsData.find((item) => item.id === id);

        newItem = {
            ...newItem,
            inStock: true,
            number: newItem.number - count
        }
        const newItems = itemsData.map((item) => (item.id === id ? newItem : item));

        updateProduct(newItem);

        setItems(newItems);
    }

    return { itemsData, toggleTodoItem, remove, changeItem };
}