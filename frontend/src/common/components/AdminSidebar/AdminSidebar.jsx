import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminSidebar = props => (
  <sidebar>
    <nav>
      <NavLink activeClassName="active" to="/admin/dashboard">Dashboard</NavLink>
      <NavLink activeClassName="active" to="/admin/seasons">Seasons</NavLink>
    </nav>
  </sidebar>
);

export default AdminSidebar;
