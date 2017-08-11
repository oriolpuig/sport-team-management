import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AdminSeasonList extends Component {
  constructor(props) {
    super(props);

    this._handleDelete = this._handleDelete.bind(this);
    this._handleOnClick = this._handleOnClick.bind(this);
  }

  componentWillMount() {
    this.props.getSeasons();
  }

  _handleDelete(seasonId) {
    this.props.deleteSeason(seasonId)
      .then(this.props.getSeasons());
  }

  _handleOnClick(season) {
    debugger;
    if (this.props.currentSeason && this.props.currentSeason._id === season._id) {
      this.props.setCurrentSeason(null)
    }
    else {
      this.props.setCurrentSeason(season)
    }
  }

  renderRows() {
    return this.props.seasons.map((season, index) => {
      const itemKey = `season-list-${index}`;
      return (
        <tr key={itemKey}
          className={this.props.currentSeason && this.props.currentSeason._id === season._id ? 'active' : ''}>
          <td onClick={() => this._handleOnClick(season)}>{index + 1}</td>
          <td onClick={() => this._handleOnClick(season)}>{season.title}</td>
          <td>
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
            <span onClick={() => this.props.setCurrentSeason(null)}
              className="btn btn-primary btn-xs">Add new season</span>
          </div>
        </div>
        <div className="ibox-content">
          <table className="table table-hover">
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
