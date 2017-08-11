import React, { Component } from 'react';
import Formsy from 'formsy-react';

class AdminLeagueEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canSubmit: false,
    };

    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.submit = this.submit.bind(this);
  }

  disableButton() {
    this.setState({
      canSubmit: false
    });
  }

  enableButton() {
    this.setState({
      canSubmit: true
    });
  }

  submit(model) {
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
          <Formsy.Form onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
            <MyOwnInput name="title" value={this.props.currentLeague ? this.props.currentLeague.title : ''} required />
            <button type="submit" disabled={!this.state.canSubmit}>Save</button>
          </Formsy.Form>
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

export default AdminLeagueEdit;
