import React, { useState, useEffect } from 'react';
import AppComponent from './components/AppComponent'
import BascetPage from './components/pages/bascetPage/BascetPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/common/Navigation';
import Modal from "./modal/Modal"
import Form from './components/Form/Form';
import './App.css'
import About from './components/pages/about/About';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './store/actions/shopProducts';
import { fetchLogin } from './store/actions/loginUser';

const App = () => {

  const dispatch = useDispatch();
  const ADMIN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
  useEffect(() => {
    dispatch(fetchProducts());

  }, []);
  const token = useSelector(store => store.login.token);


  const [modalActive, setModalActive] = useState(true);
  const [state, setState] = useState({ stateFromForm: '' });

  const callbackStateFromForm = (dataFromForm) => {
    setState(prevState => ({
      ...prevState,
      stateFromForm: dataFromForm,
    }));
  };

  const role = state.stateFromForm;
  let isAdmin = (ADMIN === token);
  const checkedRole = (ADMIN === token || role === "Customer");

  const logOut = () => {
    dispatch(fetchLogin({ name: "Admin", password: "Admin" }))
    setState(prevState => ({
      ...prevState,
      stateFromForm: { name: "" },
    }))
  };

  return (
    <Router>
      <div className="menu">
        <Navigation
          checkedRole={checkedRole}
          setModalActive={setModalActive}
          logOut={logOut} />
      </div>
      <div className="container">
        <Switch>
          <Route path="/home" >
            <AppComponent
              checkedRole={checkedRole}
              isAdmin={isAdmin} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/bascet">
            <BascetPage />
          </Route>
        </Switch>
      </div>
      <Modal
        active={modalActive}
        setActive={setModalActive}>
        {<Form
          setActive={setModalActive}
          callbackStateFromForm={callbackStateFromForm}
        />}
      </Modal>
    </Router>
  );
};

export default App;

















