import React from 'react'
import { withRouter } from 'react-router';
import { useState } from 'react';
import useDetailsProductPage from "../../../hooks/useDetailsProductPage"
import "./DetailsProductPage.css"
import Edit from '../editPage/Edit';

function DetailsProductPage({

    addItem,
    toggleTodoItem,
    changeItem,
    role,
    history,
    match: {
        params: { id }
    }
}) {

    const [items, setItems] = useState(1)
    const [state, setState] = useState({ stateFromForm: null, showForm: true, })

    const callbackStateFromEdit = (dataFromForm) => {
        setState({
            ...state,
            stateFromForm: dataFromForm,
            showForm: true,
        });
        changeItem(details.id, dataFromForm)
    }

    const { details } = useDetailsProductPage(id);

    function onBackClick() {
        history.goBack();
    }

    function toggleClickHandler(details,) {
        toggleTodoItem(details.id, items)
        details.count = details.count * items;
        addItem(details);
        setItems(1);
    }

    const increment = () => {
        setItems(items - 1)
    }

    const decrement = () => {
        setItems(items + 1)
    }

    if (!state.showForm && role === "Admin") {
        return (
            <>
                <Edit callbackStateFromEdit={callbackStateFromEdit} onBackClick={onBackClick} />
                <button
                    onClick={() => setState({ showForm: true })}
                    className="userDetails__button button">Back to details page</button>
            </>
        )
    }
    return (
        <div className="details">
            <h2 className="details__title">Product details</h2>
            {role === "Admin" ? <button
                onClick={() => setState({ showForm: false })}
                className="userDetails__button button">Edit</button> : ""}
            <div className="details__content">
                <img src={details.image} alt={details.name} className="details--img" />
                <div className="details__description--product">
                    <h3>Описание</h3>
                    {details.description}
                </div>
                <div className="details__description">
                    <p className="details__description--title">Название: {details.name || 'Anonymous'}</p>
                    <div className="details__description--control">
                        <button
                            disabled={items === 1 ? true : false}
                            onClick={() => increment(details)} > - </button >
                        <p className="details__description--count">{items}</p>
                        <button onClick={() => decrement(details)}> + </button >
                    </div>
                    <button
                        className="button details__button"
                        disabled={details.number === 0 ? true : false}
                        onClick={() => { toggleClickHandler(details) }}>
                        {details.number === 0
                            ? "Нет в наличии"
                            : " Добавить в корзину"}
                    </button>
                    <p>Количество в наличии {details.number}</p>
                </div>
            </div>
            <button onClick={onBackClick}
                className="userDetails__button button">Назад</button>
        </div>
    )
}

export default withRouter(DetailsProductPage)