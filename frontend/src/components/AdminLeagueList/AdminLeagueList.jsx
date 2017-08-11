import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AdminLeagueList extends Component {
  constructor(props) {
    super(props);

    this._handleDelete = this._handleDelete.bind(this);
    this._handleOnClick = this._handleOnClick.bind(this);
  }

  componentWillMount() {
    this.props.getLeagues();
  }

  _handleDelete(leagueId) {
    this.props.deleteLeague(leagueId)
      .then(this.props.getLeagues());
  }

  _handleOnClick(league) {
    if (this.props.currentLeague && this.props.currentLeague._id === league._id) {
      this.props.setCurrentLeague(null)
    }
    else {
      this.props.setCurrentLeague(league)
    }
  }

  renderRows() {
    return this.props.leagues.map((league, index) => {
      const itemKey = `league-list-${index}`;
      return (
        <tr key={itemKey}
          className={this.props.currentLeague && this.props.currentLeague._id === league._id ? 'active' : ''}>
          <td onClick={() => this._handleOnClick(league)}>{index + 1}</td>
          <td onClick={() => this._handleOnClick(league)}>{league.title}</td>
          <td>
            <span className="btn btn-danger" onClick={() => this._handleDelete(league._id)}>Delete</span>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="ibox float-e-margins">
        <div className="ibox-title">
          <h5>Leagues list</h5>
          <div className="ibox-tools">
            <span onClick={() => this.props.setCurrentLeague(null)}
              className="btn btn-primary btn-xs">Add new league</span>
          </div>
        </div>
        <div className="ibox-content">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>League Name</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.leagues.length > 0 ? this.renderRows() :
                  <tr>
                    <td colSpan="3" className="text-center">No data</td>
                  </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default AdminLeagueList;
