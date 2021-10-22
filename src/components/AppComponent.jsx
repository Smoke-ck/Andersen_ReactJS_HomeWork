import CardPage from './pages/cardPage/CardPage';
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import DetailsProductPage from './pages/detailsPage/DetailsProductPage';
import "./AppComponent.css"

const AppComponent = ({ data, addItem, toggleTodoItem, checkedRole, changeItem, role }) => {

  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}`} exact>
        <div className="cards">
          {data.map((el) => (
            <CardPage
              key={el.id}
              addItem={addItem}
              toggleTodoItem={toggleTodoItem}
              id={el.id}
              el={el}
              checkedRole={checkedRole}
            />
          ))}
        </div>
      </Route>
      <Route path={`${path}/:id`}>
        <DetailsProductPage
          addItem={addItem}
          toggleTodoItem={toggleTodoItem}
          changeItem={changeItem}
          role={role}
        />
      </Route>
    </Switch>
  );
};

export default AppComponent;
