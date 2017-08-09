import React from 'react';
import { Link } from 'react-router-dom';

const AdminMenu = () => (
  <nav className="navbar navbar-default">
    <div className="navbar-header">
      <button
        type="button"
        className="navbar-toggle collapsed"
        data-toggle="collapse"
        data-target="#bs-example-navbar-collapse-1"
        aria-expanded="false"
      >
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar" />
        <span className="icon-bar" />
        <span className="icon-bar" />
      </button>
      <a className="navbar-brand" href="#">Admin page</a>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li><Link to="/">← Go to home page</Link></li>
      </ul>
    </div>
  </nav>
);

export default AdminMenu;
