import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import "./Navigation.css"
function Navigation({ checkedRole, setModalActive, logOut }) {
    const history = useHistory();

    function onBackLogin() {
        logOut()
        history.push("/home");
    }
    return (
        <>
            <div>
                <ul className="navigation">
                    <li className="navigation__item">
                        <NavLink to="/home" className="navigation__link" activeClassName="link--active"> Home </NavLink>
                    </li>
                    <li className="navigation__item">
                        <NavLink to="/about" className="navigation__link" activeClassName="link--active"> About </NavLink>
                    </li >
                    {checkedRole
                        ? <li className="navigation__item">
                            <NavLink to="/bascet" className="navigation__link" activeClassName="link--active"> BascetPage </NavLink>
                        </li>
                        : ""}
                </ul>
            </div>
            <div>
                <button className="card__button" onClick={!checkedRole
                    ? () => { setModalActive(true) }
                    : onBackLogin}>
                    {!checkedRole ? 'Login' : 'LogOut'}</button>
            </div>
        </>
    )
}

export default Navigation


