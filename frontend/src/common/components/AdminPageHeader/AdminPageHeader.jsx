import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class AdminPageHeader extends Component {

  _splitLocation(location) {
    return location.pathname.split('/');
  }

  renderBreadcrumb() {
    const currentLocation = this.props.location.pathname;
    const splittedLocation = this._splitLocation(this.props.location);

    return splittedLocation.map((it, index) => {
      if (it === "") { return null; }
      const splitURlBySection = currentLocation.split(it);
      return (
        <li key={`breadcrumb-${index}`}>
          <NavLink activeClassName="active" className="capitalize"
          to={splitURlBySection[0] + it}>{it}</NavLink>
        </li>
      );
    });
  }

  renderPageTitle() {
    const titleFromURL = this._splitLocation(this.props.location);
    return (
      <h2 className="capitalize">{titleFromURL[titleFromURL.length - 1]}</h2>
    );
  }

  render() {
    return (
      <div className="row wrapper border-bottom white-bg page-heading">
        <div className="col-lg-10">
          {this.renderPageTitle()}
          <ol className="breadcrumb">
            {this.renderBreadcrumb()}
          </ol>
        </div >
        <div className="col-lg-2">

        </div>
      </div>
    )
  }
}

export default AdminPageHeader;
