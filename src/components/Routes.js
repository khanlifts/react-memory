import React from 'react';
import About from './About';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import MemoryApp from './MemoryApp';

const NotFoundPage = () => (
  <div>
    <p>404 - <Link to="/">Go Home</Link></p>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink activeClassName="is-active" to="/" exact>Memory</NavLink>
    <NavLink activeClassName="is-active" to="/about">Create Expense</NavLink>
  </header>
);

const Routes = () => (
  <div className="app__routes">
    <Header />
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={MemoryApp} exact={true}/>
          <Route path="/about" component={About}/>
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
);


export default Routes;
