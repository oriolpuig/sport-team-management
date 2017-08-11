import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Formsy from 'formsy-react';

class CustomForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canSubmit: false,
    };

    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.submit = this.submit.bind(this);
    this.resetForm = this.resetForm.bind(this);
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
    this.props.handleSubmit(model);
    this.resetForm();
  }

  resetForm() {
    this.customForm.reset();
  }

  render() {
    return (
      <Formsy.Form
        ref={(c) => this.customForm = c}
        onValidSubmit={this.submit}
        onValid={this.enableButton}
        onInvalid={this.disableButton}>
        {this.props.children}
        <button type="submit" disabled={!this.state.canSubmit}>Save</button>
      </Formsy.Form>
    );
  }
}

CustomForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default CustomForm;
