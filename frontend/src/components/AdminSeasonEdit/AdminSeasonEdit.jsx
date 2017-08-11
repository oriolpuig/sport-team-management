import React, { Component } from 'react';
import { CustomForm, CustomFormInput } from '../../common/components';

class AdminSeasonEdit extends Component {
  constructor(props) {
    super(props);

    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(model) {
    if (this.props.currentSeason) {
      this.props.updateSeason(this.props.currentSeason._id, model)
        .then(this.props.getSeasons());
    }
    else {
      this.props.saveSeason(model)
        .then(this.props.getSeasons());
    }
  }

  renderTitle() {
    return this.props.currentSeason && this.props.currentSeason._id ?
      <h5>Edit season</h5> : <h5>Add new season</h5>;
  }

  render() {
    return (
      <div className="ibox float-e-margins">
        <div className="ibox-title">
          {this.renderTitle()}
        </div>
        <div className="ibox-content">
          <CustomForm handleSubmit={this.submitForm}>
            <CustomFormInput name="title" value={this.props.currentSeason ? this.props.currentSeason.title : ''} required />
          </CustomForm>
        </div>
      </div>
    );
  }
}

export default AdminSeasonEdit;
