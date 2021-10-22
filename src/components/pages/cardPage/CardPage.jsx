import { Link, useRouteMatch } from 'react-router-dom'
import './CardPage.css'

const CardPage = ({ addItem, toggleTodoItem, id, el, checkedRole }) => {

  const { url } = useRouteMatch();

  const clickAddBascet = (el, id) => {
    toggleTodoItem(id);
    addItem(el, id)
  }

  return (

    <div className="card">
      {checkedRole
        ? <Link to={`${url}/${id}`} className="card__tittle"> {el.name} </Link>
        : <p className="card__tittle--notActive"> {el.name} </p>
      }

      <img src={el.image} alt={el.name} className="card__image" />
      <p> Цена: {el.price} </p>

      {checkedRole
        ? <button
          className="card__button card_button--inCard"
          disabled={el.number === 0 ? true : false}
          onClick={checkedRole
            ? () => clickAddBascet(el, id)
            : null
          }> {el.number === 0 ? "Товара нет в наличии" : "Добавить в корзину"}  </button>
        : <p>"Нужно ввести логин"</p>
      }
    </div>
  );
};

export default CardPage


