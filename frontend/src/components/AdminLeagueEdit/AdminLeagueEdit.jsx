import React, { Component } from 'react';
import { CustomForm, CustomFormInput } from '../../common/components';

class AdminLeagueEdit extends Component {
  constructor(props) {
    super(props);

    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(model) {
    if (this.props.currentLeague) {
      this.props.updateLeague(this.props.currentLeague._id, model)
        .then(this.props.getLeagues());
    }
    else {
      this.props.saveLeague(model)
        .then(this.props.getLeagues());
    }
  }

  renderTitle() {
    return this.props.currentLeague && this.props.currentLeague._id ?
      <h5>Edit league</h5> : <h5>Add new league</h5>;
  }

  render() {
    return (
      <div className="ibox float-e-margins">
        <div className="ibox-title">
          {this.renderTitle()}
        </div>
        <div className="ibox-content">
          <CustomForm handleSubmit={this.submitForm}>
            <CustomFormInput name="title" value={this.props.currentLeague ? this.props.currentLeague.title : ''} required />
          </CustomForm>
        </div>
      </div>
    );
  }
}

export default AdminLeagueEdit;
