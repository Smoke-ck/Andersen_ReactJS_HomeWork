import { Link, useRouteMatch } from 'react-router-dom'
import './CardPage.css'
import { fetchNewCart } from '../../../store/actions/cardProducts';
import { useDispatch } from 'react-redux';


const CardPage = ({ id, el, checkedRole }) => {

  const { url } = useRouteMatch();
  const dispatch = useDispatch();

  const clickAddBascet = (el, id) => {
    dispatch(fetchNewCart(el));
  }

  return (
    <div className="card">
      {checkedRole
        ? <Link to={`${url}/${id}`} className="card__tittle"> {el.title} </Link>
        : <p className="card__tittle--notActive"> {el.title} </p>
      }
      <img src={el.image} alt={el.title} className="card__image" />
      <p> Цена: {el.price} </p>
      {checkedRole
        ? <button
          className="card__button card_button--inCard"
          disabled={el.number === 0 ? true : false}
          onClick={() => clickAddBascet(el, id)}> "Добавить в корзину" </button>
        : <p>"Нужно авторизоваться"</p>
      }
    </div>
  );
};

export default CardPage


