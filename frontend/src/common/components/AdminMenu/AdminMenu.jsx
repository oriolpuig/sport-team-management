import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { smoothlyMenu } from '../../helpers';
import FontAwesome from 'react-fontawesome';

class AdminMenu extends Component {
  toggleNavigation(e) {
    e.preventDefault();
    $("body").toggleClass("mini-navbar");
    smoothlyMenu();
  }

  render() {
    return (
      <div className="row border-bottom">
        <nav className="navbar navbar-fixed-top white-bg" role="navigation" style={{ marginBottom: 0 }}>
          <div className="navbar-header">
            <a className="navbar-minimalize minimalize-styl-2 btn btn-primary " onClick={this.toggleNavigation} href="#"><i className="fa fa-bars"></i> </a>
          </div>
          <ul className="nav navbar-top-links navbar-right">
            <li>
              <Link to="/"><i className="fa fa-sign-out"></i> Go to home page</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default AdminMenu;
