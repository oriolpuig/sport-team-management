import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { smoothlyMenu } from '../../helpers';

import FontAwesome from 'react-fontawesome';

// const AdminMenu = () => (
//   <nav className="navbar navbar-default">
//     <div className="navbar-header">
//       <button
//         type="button"
//         className="navbar-toggle collapsed"
//         data-toggle="collapse"
//         data-target="#bs-example-navbar-collapse-1"
//         aria-expanded="false"
//       >
//         <span className="sr-only">Toggle navigation</span>
//         <span className="icon-bar" />
//         <span className="icon-bar" />
//         <span className="icon-bar" />
//       </button>
//       <a className="navbar-brand" href="#">Admin page</a>
//     </div>

//     <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
//       <ul className="nav navbar-nav">
//         <li><Link to="/">← Go to home page</Link></li>
//       </ul>
//     </div>
//   </nav>
// );

class AdminMenu extends Component {

  toggleNavigation(e) {
    e.preventDefault();
    $("body").toggleClass("mini-navbar");
    smoothlyMenu();
  }

  render() {
    return (
      <div className="row border-bottom">
        <nav className="navbar navbar-static-top white-bg" role="navigation" style={{ marginBottom: 0 }}>
          <div className="navbar-header">
            <a className="navbar-minimalize minimalize-styl-2 btn btn-primary " onClick={this.toggleNavigation} href="#"><FontAwesome name='rocket'></FontAwesome> </a>
          </div>
          <ul className="nav navbar-top-links navbar-right">
            <li>
              <a href="#">
                <FontAwesome name='rocket'></FontAwesome>
                {/* <i className="fa fa-sign-out"></i> Log out */}
                            </a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default AdminMenu;
