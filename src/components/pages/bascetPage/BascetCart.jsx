import React from 'react'

function BascetCart({ el, deleteBascet }) {
    return (
        <div key={el.productId} className="bascet__card">
            <div className="bascet__card--description">
                <p>Номер товара: {el.productId}</p>
            </div>
            <p className="bascet__card--count">Количество: {el.quantity}</p>
            <div className="bascet__card--control">

                <button onClick={() => deleteBascet(el.productId)}
                    className="bascet__card--control-clear button">Удалить товар</button>
                <p className="bascet__card--price">Цена:</p>
            </div>
        </div>
    )
}

export default BascetCart
