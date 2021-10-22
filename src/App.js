import React, { useState } from 'react';
import AppComponent from './components/AppComponent'
import BascetPage from './components/pages/bascetPage/BascetPage';
import useHomePageList from "./hooks/useHomePageList"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/common/Navigation';
import Modal from "./modal/Modal"
import Form from './components/Form/Form';
import './App.css'
import About from './components/pages/about/About';

const App = () => {

  const { itemsData, toggleTodoItem, remove, changeItem } = useHomePageList()
  const [selectedItems, setSelectedItems] = useState([]);
  const [modalActive, setModalActive] = useState(true);
  const [state, setState] = useState({ stateFromForm: '' });

  const callbackStateFromForm = (dataFromForm) => {
    setState({
      ...state,
      stateFromForm: dataFromForm,

    });
  };
  const role = state.stateFromForm;
  const checkedRole = (role === 'Admin' || role === "Customer");
  
  const logOut = () => {
    setState({
      ...state,
      stateFromForm: { name: "" },
    })
  };

  const allPrice = () => {
    let price = 0;
    selectedItems.map(el => {
      return price = el.price * el.count + price;
    });
  };

  const addItem = (data) => {
    setSelectedItems(prevState => {
      const state = prevState.map(el => {
        const item = { ...el };
        return item;
      });
      let condition = false;
      state.map(el => {
        if (el.name === data.name) {
          condition = true;
        }
      });
      if (condition) {
        state.map(el => {
          if (el.name === data.name) {
            const item = { ...el };
            el.count = el.count + data.count;
            return item;
          }
        });
      } else {
        state.push(data);
      }
      return state;
    });

    allPrice();
  };

  const cardAction = (id, type) =>
    setSelectedItems(prevState => {
      const state = [...prevState];
      state.map((el) => {
        if (id === el.id && type === 'increment') {
          el.count = el.count + 1;
        }
        if (id === el.id && type === 'decrement') {
          el.count = el.count - 1;
        }
      });
      return [...state];
    });

  const deleteItem = id =>
    setSelectedItems(prevState => {
      const state = prevState.filter((el, i) => {
        return id !== el.id && el;
      });
      return [...state];
    });

  return (

    <Router>
      <div className="menu">
        <Navigation checkedRole={checkedRole} setModalActive={setModalActive} logOut={logOut} />
      </div>
      <div className="container">
        <Switch>
          <Route path="/home" >
            <AppComponent
              data={itemsData}
              addItem={addItem}
              toggleTodoItem={toggleTodoItem}
              checkedRole={checkedRole}
              changeItem={changeItem}
              role={role}
            />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/bascet">
            <BascetPage
              count={selectedItems.length}
              selectedItems={selectedItems}
              setPrice={allPrice}
              deleteItem={deleteItem}
              cardAction={cardAction}
              remove={remove}
            />
          </Route>
        </Switch>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        {<Form
          setActive={setModalActive}
          callbackStateFromForm={callbackStateFromForm}
        />}
      </Modal>
    </Router>
  );
};

export default App;

















