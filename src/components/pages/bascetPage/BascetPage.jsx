import React from 'react';
import './BascetPage.css'

const BascetPage = ({ selectedItems, deleteItem, cardAction, remove, }) => {

  const deleteBascet = (id, count) => {
    remove(id, count)
    deleteItem(id)
  }

  return (
    <div className="bascet">
      <h2 className="bascet__titel">Корзина</h2>
      <div className="bascet__cards">
        {selectedItems.map((el) => (
          <div key={el.id} className="bascet__card">
            <div className="bascet__card--description">
              <img src={el.image} alt={el.name} className="bascet__card--img" />
              <p>{el.name}  </p>
            </div>
            <div className="bascet__card--control">
              <button onClick={() => cardAction(el.id, 'increment')}>+</button>
              <p className="bascet__card--count">{el.count}</p>
              <button
                disabled={el.count > 1 ? false : true}
                onClick={() => cardAction(el.id, 'decrement')}>-</button>
              <button onClick={() => deleteBascet(el.id, el.count)}
                className="bascet__card--control-clear">Del</button>
            </div>
            <p className>цена {el.price * el.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BascetPage;
