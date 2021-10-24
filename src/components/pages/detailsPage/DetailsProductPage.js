import React from 'react'
import { withRouter } from 'react-router';
import { useState, useEffect } from 'react';
import "./DetailsProductPage.css"
import Edit from '../editPage/Edit';

import { fetchProduct, updateFetchProduct } from "../../../store/actions/shopProducts"
import { fetchNewCart, fetchUpdateCart } from '../../../store/actions/cardProducts';
import { useDispatch, useSelector } from 'react-redux';

function DetailsProductPage({
    isAdmin,
    history,
    match: {
        params: { id }
    }
}) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProduct(id));
    }, [])

    const product = useSelector(store => store.product.product)

    const { image, title, description, price, rating } = product;
    const { count } = { ...rating };

    const [items, setItems] = useState(1)
    const [dataEdit, setDataEdit] = useState({ id: id, stateFromForm: null, showForm: true, })

    const callbackStateFromEdit = (dataFromForm) => {
        dataFromForm.id = id;
        setDataEdit(prevState => ({
            ...prevState,
            stateFromForm: dataFromForm,
            showForm: true,
        }));
        dispatch(updateFetchProduct(dataFromForm));
    }

    function onBackClick() {
        history.goBack();
    }

    function toggleClickHandler(product) {
        dispatch(fetchNewCart(product))
        product.quantity = items;
        dispatch(fetchUpdateCart(product))
        setItems(1);
    }

    const increment = () => {
        setItems(items - 1)
    }

    const decrement = () => {
        setItems(items + 1)
    }

    if (!dataEdit.showForm && isAdmin) {
        return (
            <>
                <Edit callbackStateFromEdit={callbackStateFromEdit} onBackClick={onBackClick} />
                <button
                    onClick={() => setDataEdit({ showForm: true })}
                    className="details__button details__button--back button">Back to details page</button>
            </>
        )
    }
    return (
        <div className="details">
            <h2 className="details__title">Product details</h2>

            {isAdmin
                ? <button
                    onClick={() => setDataEdit({ showForm: false })}
                    className="userDetails__button button">Edit</button>
                : ""}

            <div className="details__content">
                <img src={image} alt={title} className="details--img" />
                <div className="details__description--product">
                    <h3 className="details__description--product-title">Описание</h3>
                    {description}
                </div>
                <div className="details__description">
                    <p className="details__description--title">Название: {title || 'Anonymous'}</p>
                    <div className="details__description--control">
                        <button
                            disabled={items === 1 ? true : false}
                            onClick={() => increment()} > - </button >
                        <p className="details__description--count">{items}</p>
                        <button onClick={() => decrement()}> + </button >
                    </div>
                    <button
                        className="button details__button"
                        disabled={count === 0 ? true : false}
                        onClick={() => { toggleClickHandler(product) }}>
                        {count === 0
                            ? "Нет в наличии"
                            : " Добавить в корзину"}
                    </button>
                    <p>Цена: {price}</p>
                    <p>Количество в наличии: {count}</p>
                </div>
            </div>
            <button
                onClick={onBackClick}
                className="details__button button">Назад</button>
        </div>
    )
}

export default withRouter(DetailsProductPage)

