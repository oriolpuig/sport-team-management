import React, { Component } from 'react';

class AdminSeasonList extends Component {
  componentWillMount() {
    this.props.getSeasons();
  }

  render() {
    const { seasons } = this.props;
    if(seasons.length > 0) {
      debugger;
    }
    return (
      <h1>Season list</h1>
    );
  }
}

export default AdminSeasonList;
