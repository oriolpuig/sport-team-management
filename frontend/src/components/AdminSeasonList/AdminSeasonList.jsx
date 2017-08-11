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
    this.props.deleteSeason(seasonId)
      .then(this.props.getSeasons());
  }

  renderRows() {
    return this.props.seasons.map((season, index) => {
      const itemKey = `season-list-${index}`;
      return (
        <tr key={itemKey}>
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
            <Link to="/admin/seasons/add" className="btn btn-primary btn-xs">Create new season</Link>
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
