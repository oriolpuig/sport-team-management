import React, { Component } from 'react';
import Formsy from 'formsy-react';

class AdminSeasonUpdate extends Component {
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
    this.props.updateSeason(model);
  }

  render() {
    return (
      <Formsy.Form onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
        <MyOwnInput name="title" value="2" required />
        <button type="submit" disabled={!this.state.canSubmit}>Submit</button>
      </Formsy.Form>
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

export default AdminSeasonUpdate;
