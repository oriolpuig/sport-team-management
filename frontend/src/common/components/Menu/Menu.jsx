import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/admin">Go to admin page</Link></li>
      </ul>
    </nav>
  </header>
);

export default Menu;
