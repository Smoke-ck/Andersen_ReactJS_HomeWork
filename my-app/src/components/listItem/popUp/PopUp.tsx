import React, { FC } from 'react'
import { IToDos } from '../../../api'

type IPopup = {
    handleFavoriteToDo: (e:React.MouseEvent) => void,
    handleDoneToDo: (e:React.MouseEvent) => void,
    handleClick: () => void,
    handleToggleModal: () => void, 
    item: IToDos,
}

const PopUp:FC<IPopup> = ({handleFavoriteToDo,handleDoneToDo,handleClick,handleToggleModal,item}) => {
    return (
        <div>
            <button
                className="listItem__menu--button"
                onClick={(e: React.MouseEvent) => handleFavoriteToDo(e)}>
                {item.favorite ? 'Убрать из избранного ' : 'В избранно'}
            </button>
            <button
                className="listItem__menu--button"
                onClick={(e: React.MouseEvent) => handleDoneToDo(e)}>
                {item.completed ? 'Вернуть в работу' : 'Выполнено'}
            </button>
            <button
                className="listItem__menu--button"
                onClick={handleClick}> Редактировать
            </button>
            <button
                className="listItem__menu--button"
                onClick={handleToggleModal}> Удалить
            </button>
        </div>
    )
}

export default PopUp
