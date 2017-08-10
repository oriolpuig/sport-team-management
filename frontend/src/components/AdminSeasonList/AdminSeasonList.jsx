import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AdminSeasonList extends Component {
  constructor(props) {
    super(props);

    this._handleDelete = this._handleDelete.bind(this);
  }
  componentWillMount() {
    this.props.getSeasons();
  }

  _handleDelete(seasonId) {
    alert(seasonId);
  }

  renderRows() {
    return this.props.seasons.map((season, index) => {
      const itemKey = `season-list-${index}`;
      return (
        <tr>
          <td>{index + 1}</td>
          <td>{season.title}</td>
          <td>
            <Link to={`/admin/seasons/update/${season._id}`} className="btn btn-success">Update</Link>
            <span className="btn btn-danger" onClick={() => this._handleDelete(season._id)}>Delete</span>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="ibox float-e-margins">
        <div className="ibox-title">
          <h5>Seasons list</h5>
          <div className="ibox-tools">
            <a className="collapse-link">
              <i className="fa fa-chevron-up"></i>
            </a>
          </div>
        </div>
        <div className="ibox-content">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Season Name</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {this.props.seasons.length > 0 ? this.renderRows() :
                <tr>
                  <td colSpan="3">No data</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default AdminSeasonList;
