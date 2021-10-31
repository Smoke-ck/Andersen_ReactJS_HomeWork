import React, { FC } from "react";
import { IToDos } from "../../api";
import { useState } from "react";
import Modal from "./../modal/Modal";
import { FaStar } from 'react-icons/fa'
import './ListItem.scss'
import PopUp from "./popUp/PopUp";

type IToDoListItem = {
    item: IToDos,
    onItemToggle: (id: number | string) => Promise<IToDos>,
    onItemDelete: (id: number | string) => void,
    onItemFavorite: (id: number | string) => Promise<IToDos>,
    onUpdate: (id: number | string, title: string) => Promise<IToDos>
}

const ListItem: FC<IToDoListItem> = ({ item, onItemToggle, onItemDelete, onItemFavorite, onUpdate }) => {

    const [isEditing, setIsEditing] = useState(false);

    const [title, setTitle] = useState(item.title);

    const [isModalActive, setModalActive] = useState(false);

    const [isDetailsActive, setDetailsActive] = useState(false);
    const [erorr, setNewError] = useState('')

    const handleClick = () => {
        setIsEditing(true);
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter" && title.length < 160) {
            setIsEditing(false);
            onUpdate(item.id, title.trim())
        }
    }
    const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
        if (e.target.value.length > 160) {
            setNewError(`${e.target.value.length - 160}`)
        }
    }
    const handleDetailsActive = () => {
        setDetailsActive(!isDetailsActive);
    }

    const handleFavoriteToDo = (e: React.MouseEvent) => {
        handleDetailsActive();
        e.stopPropagation();
        onItemFavorite(item.id);
    }

    const handleDoneToDo = (e: React.MouseEvent) => {
        handleDetailsActive();
        e.stopPropagation();
        onItemToggle(item.id);
    }

    const handleTogleStar = (e: React.MouseEvent) => {
        e.stopPropagation();
        onItemFavorite(item.id)
    }

    const handleCloseModal = () => {
        setModalActive(false);
    }

    const handleToggleModal = () => {
        setModalActive(prevState => !prevState);
    }

    const handleDeleteToDo = (e: React.MouseEvent) => {
        e.stopPropagation();
        onItemDelete(item.id);
    }

    const handleCloseMenu = (e: React.MouseEvent) => {
        setDetailsActive(false);
        e.stopPropagation();
    }

    return (
        <>
            {isEditing
                ? <div><input
                    className="form__input"
                    value={title}
                    onChange={onValueChange}
                    autoFocus
                    onKeyPress={handleKeyPress}
                    type="text" />
                    {title.length > 160 ? <span className="errorMsg">Превышен лимит текста задачи на {erorr} символов</span> : ''}
                </div>
                :
                <div className="listItem__wrapper">
                    <span onClick={handleDetailsActive} className="listItem__menu--title">...</span>
                    <div
                        onClick={(e: React.MouseEvent) => handleCloseMenu(e)}
                        className={"listItem" + (item.completed ? 'done' : '')}>
                        <div>
                            <div>
                                <h2 className="listItem__title">{item.title} </h2>
                            </div>
                            <div className="listItem__menu">
                                {isDetailsActive
                                    ?
                                    <PopUp
                                        handleFavoriteToDo={handleFavoriteToDo}
                                        handleDoneToDo={handleDoneToDo}
                                        handleClick={handleClick}
                                        handleToggleModal={handleToggleModal}
                                        item={item} />
                                    : ''}
                            </div>
                        </div>
                        <div
                            className={!item.favorite ? "listItem___button--favorite" : 'listItem__button--notFavorite'}
                            onClick={(e: React.MouseEvent) => handleTogleStar(e)}> <FaStar/>
                        </div>
                        {isModalActive && (<Modal
                            active={isModalActive}
                            setActive={setModalActive}
                            handleToggleModal={handleToggleModal}>
                            <div className="deleteMenu">
                                <h3 className="deleteMenu__title">Вы действительно хотите удалить эту задачу?</h3>
                                <div className="deleteMenu__title--todo">{title}</div>
                                <div >
                                    <button className="deleteMenu__button deleteMenu__button--cancel"
                                        onClick={handleCloseModal}>Отмена
                                    </button>
                                    <button className="deleteMenu__button deleteMenu__button--ok"
                                        onClick={(e: React.MouseEvent) => { handleDeleteToDo(e) }}>Да, удалить
                                    </button>
                                </div>
                            </div>
                        </Modal>)}
                    </div>
                </div>
            }
        </>
    );
}

export default ListItem;