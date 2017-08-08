import React from 'react';
import PropTypes from 'prop-types';
// import { StaticRouter } from 'react-router';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';
import { HelloWorld } from '../containers';
// import { HelloWorld } from '../components';

const App = props => (
  <BrowserRouter
    location={props.location}
    action={props.action}
    onPush={props.onPush}
    onReplace={props.onReplace}
  >
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/roster">Roster</Link></li>
            <li><Link to="/schedule">Schedule</Link></li>
          </ul>
        </nav>
      </header>
      <div>
        <main>
          <Switch>
            <Route exact path="/" component={HelloWorld} />
            <Route path="/roster" component={() => <h1>Foo!</h1>} />
            <Route path="/schedule" component={() => <h1>Bar!</h1>} />
          </Switch>
        </main>
      </div>
    </div>
  </BrowserRouter>
);

App.propTypes = {
  location: PropTypes.object.isRequired,
  action: PropTypes.string.isRequired,
  onPush: PropTypes.func.isRequired,
  onReplace: PropTypes.func.isRequired,
};

export default App;
