import React from 'react';
import './BascetPage.css'
import { useEffect } from 'react';
import { fetchCarts, fetchDeleteCart } from '../../../store/actions/cardProducts';
import { useDispatch, useSelector } from 'react-redux';
import BascetCart from './BascetCart';

const BascetPage = () => {

  const userCart = useSelector(store => store.carts.carts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCarts());
  }, []);

  const deleteBascet = (id) => {
    dispatch(fetchDeleteCart(id));
  }
  return (
    <div className="bascet">
      <h2 className="bascet__titel">Корзина</h2>
      <div className="bascet__cards">
        {userCart.length
          ? <div>{userCart.map((el) => (
            <BascetCart el={el} deleteBascet={deleteBascet} />
          ))}
          </div>
          : []}
      </div>
    </div>
  );
};

export default BascetPage;
