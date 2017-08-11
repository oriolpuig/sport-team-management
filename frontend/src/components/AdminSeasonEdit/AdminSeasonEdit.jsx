import React, { Component } from 'react';
import { CustomForm, CustomFormInput } from '../../common/components';

class AdminSeasonEdit extends Component {
  constructor(props) {
    super(props);

    this.submitForm = this.submitForm.bind(this);
    this.cancelForm = this.cancelForm.bind(this);
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

  cancelForm() {
    this.props.setCurrentSeason(null);
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
          <CustomForm
            handleSubmit={this.submitForm}
            formClassName="form-horizontal"
            submitClassName="btn btn-primary"
            cancelClassName="btn btn-default"
            handleCancel={this.cancelForm}
          >
            <div className="form-group">
              <label className="col-sm-2 control-label">Title</label>
              <div className="col-sm-10">
                <CustomFormInput
                  name="title"
                  value={this.props.currentSeason ? this.props.currentSeason.title : ''}
                  required />
              </div>
            </div>
            <div className="hr-line-dashed"></div>
          </CustomForm>
        </div>
      </div>
    );
  }
}

export default AdminSeasonEdit;
