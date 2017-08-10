import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { smoothlyMenu } from '../../helpers';
import FontAwesome from 'react-fontawesome';

class AdminFooter extends Component {
  render() {
    return (
      <div className="footer fixed">
        <div className="pull-right">
          10GB of <strong>250GB</strong> Free.
                </div>
        <div>
          <strong>Copyright</strong> Example Company &copy; 2015-2017
                </div>
      </div>
    )
  }
}

export default AdminFooter;
