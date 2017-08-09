import React from 'react';
import { BrowserRouter, Link, NavLink, Redirect, Route } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <div>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/admin" component={Admin} />
      </div>
    </div>
  </BrowserRouter>
);

const Admin = () => (
  <div>
    <nav>
      <Link to="/">Go to Home</Link>
    </nav>
    <main>
      <Route exact path="/admin/dashboard" component={Dashboard} />
      <Route exact path="/admin/leagues" component={League} />
      <Redirect from="/admin" to="/admin/dashboard" />
    </main>
    <footer>
      <nav>
        <NavLink activeClassName="active" to="/admin/dashboard">Dashboard</NavLink>
        <NavLink activeClassName="active" to="/admin/leagues">League</NavLink>
      </nav>
    </footer>
  </div>
);

const Dashboard = () => (
  <h1>Dashboard</h1>
);

const League = () => (
  <h1>League</h1>
);

const Home = () => (
  <div>
    <nav>
      <Link to="/admin">Dashboard</Link>
    </nav>
    <main>
      <h1>Home</h1>
    </main>
  </div>
);

export default App;
