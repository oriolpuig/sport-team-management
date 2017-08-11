import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Formsy from 'formsy-react';
import cx from 'classnames';

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
    if (this.props.handleCancel) {
      this.props.handleCancel();
    }
    this.customForm.reset();
  }

  render() {
    return (
      <Formsy.Form
        ref={(c) => this.customForm = c}
        onValidSubmit={this.submit}
        onValid={this.enableButton}
        onInvalid={this.disableButton}
        className={this.props.formClassName}>
        {this.props.children}
        <div className="form-group">
          <div className="col-sm-12 text-center">
            <button type="submit" className={cx(this.props.submitClassName, { 'hide': !this.props.handleSubmit })} disabled={!this.state.canSubmit}>Save</button>
            <span className={cx(this.props.cancelClassName, { 'hide': !this.props.handleCancel })} onClick={() => this.resetForm()}>Cancel</span>
          </div>
        </div>
      </Formsy.Form>
    );
  }
}

CustomForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func,
  formClassName: PropTypes.string,
  submitClassName: PropTypes.string,
  cancelClassName: PropTypes.string,
};

export default CustomForm;
