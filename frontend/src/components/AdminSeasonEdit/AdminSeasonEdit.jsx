import React, { Component } from 'react';
import Formsy from 'formsy-react';
import { CustomForm } from '../../common/components';

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
            <MyOwnInput name="title" value={this.props.currentSeason ? this.props.currentSeason.title : ''} required />
          </CustomForm>
        </div>
      </div>
    );
  }
}

const MyOwnInput = React.createClass({

  // Add the Formsy Mixin
  mixins: [Formsy.Mixin],

  // setValue() will set the value of the component, which in
  // turn will validate it and the rest of the form
  changeValue(event) {
    this.setValue(event.currentTarget.value);
  },

  render() {
    // Set a specific className based on the validation
    // state of this component. showRequired() is true
    // when the value is empty and the required prop is
    // passed to the input. showError() is true when the
    // value typed is invalid
    const className = this.showRequired() ? 'required' : this.showError() ? 'error' : null;

    // An error message is returned ONLY if the component is invalid
    // or the server has returned an error message
    const errorMessage = this.getErrorMessage();

    return (
      <div className={className}>
        <input type="text" onChange={this.changeValue} value={this.getValue()} />
        <span>{errorMessage}</span>
      </div>
    );
  }
});

export default AdminSeasonEdit;
