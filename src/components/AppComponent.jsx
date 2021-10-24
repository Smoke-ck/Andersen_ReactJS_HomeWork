import CardPage from './pages/cardPage/CardPage';
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { useSelector } from "react-redux"
import DetailsProductPage from './pages/detailsPage/DetailsProductPage';
import "./AppComponent.css"

const AppComponent = ({ checkedRole, isAdmin }) => {

  const products = useSelector(store => store.products.products);
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}`} exact>
        <div className="cards">
          {products.map((el) => (
            <CardPage
              key={el.id}
              id={el.id}
              el={el}
              checkedRole={checkedRole} />))}
        </div>
      </Route>
      <Route path={`${path}/:id`}>
        <DetailsProductPage
          isAdmin={isAdmin} />
      </Route>
    </Switch>
  );
};

export default AppComponent;
