import React from "react";
import style from "./RegistartionForm.module.css";
import InputFile from "../InputFile/InputFile";
import { isValidEmail, isValidName, isValidTel } from "../../utilities";
import classNames from "classnames";

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formName: "",
      formEmail: "",
      formTel: "",
      formPosition: "",
      formFile: null,
      formErrors: { formName: "", formEmail: "", formTel: "" },
      isFormNameValid: true,
      isFormEmailValid: true,
      isFormTelValid: true,
      isFormFileValid: true,
      isFormPositionValid: true,
      isFormValid: false,
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
  }

  componentDidMount() {
    if (this.props.positions.length === 0) {
      this.props.loadPositions();
    }
    if (this.props.token.length === 0) {
      this.props.loadToken();
    }
  }

  onChangeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitHandler(e) {
    e.preventDefault();
    if (this.validate()) {
      var formData = new FormData();
      formData.append("position_id", Number(this.state.formPosition));
      formData.append("name", this.state.formName);
      formData.append("email", this.state.formEmail);
      formData.append("phone", this.state.formTel);
      formData.append("photo", this.state.formFile);

      this.props.sendInfo(formData, this.props.token);
      this.props.openModal();
      this.props.closeUsers();

      this.setState({
        formName: "",
        formEmail: "",
        formTel: "",
        formPosition: "",
        formFile: null,
        formErrors: { formName: "", formEmail: "", formTel: "" },
        isFormNameValid: true,
        isFormEmailValid: true,
        isFormTelValid: true,
        isFormFileValid: true,
        isFormPositionValid: true,
        isFormValid: false,
      });
    }
  }

  uploadFile(file) {
    this.setState((state) => ({
      ...state,
      formFile: file,
    }));
  }

  validate() {
    let results = {
      isFormNameValid: true,
      isFormEmailValid: true,
      isFormTelValid: true,
      isFormFileValid: true,
      isFormPositionValid: false,
    };
    results = { ...results, isFormNameValid: isValidName(this.state.formName) };
    results = {
      ...results,
      isFormEmailValid: isValidEmail(this.state.formEmail),
    };
    results = { ...results, isFormTelValid: isValidTel(this.state.formTel) };
    results = { ...results, isFormFileValid: this.state.formFile !== null };
    results = {
      ...results,
      isFormPositionValid: this.state.formPosition !== "",
    };
    this.setState((state) => ({
      ...state,
      ...results,
      isFormValid:
        results.isFormNameValid &&
        results.isFormEmailValid &&
        results.isFormTelValid &&
        results.isFormPositionValid,
    }));
    return (
      results.isFormNameValid &&
      results.isFormEmailValid &&
      results.isFormTelValid &&
      results.isFormPositionValid
    );
  }

  render() {
    return (
      <form className={style.signupForm}>
        <label className={style.inputLabel} htmlFor="formName">
          Name
        </label>
        <input
          className={classNames(
            style.inputField,
            !this.state.isFormNameValid && style.inputError
          )}
          type="text"
          placeholder="Your name"
          name="formName"
          id="formName"
          value={this.state.formName}
          onChange={this.onChangeHandler}
        />
        <label className={style.inputLabel} htmlFor="formEmail">
          Email
        </label>
        <input
          className={classNames(
            style.inputField,
            !this.state.isFormEmailValid && style.inputError
          )}
          type="email"
          placeholder="Your name"
          name="formEmail"
          id="formEmail"
          value={this.state.formEmail}
          onChange={this.onChangeHandler}
        />
        <label className={style.inputLabel} htmlFor="formTel">
          Phone number
        </label>
        <input
          className={classNames(
            style.inputField,
            !this.state.isFormTelValid && style.inputError
          )}
          type="tel"
          placeholder="+380XX XXX XX XX"
          name="formTel"
          id="formTel"
          value={this.state.formTel}
          onChange={this.onChangeHandler}
        />
        <span className={style.FormAdvice}>
          Enter your phone number in open format
        </span>
        <span className={style.inputRadioHeader}>Select your position</span>
        <div
          className={classNames(
            style.inputRadioContainer,
            !this.state.isFormPositionValid && style.inputRadioContainerError
          )}
        >
          {this.props.positions.length === 0
            ? null
            : Object.values(this.props.positions).map((item, index) => (
                <label key={item.id + item.name}>
                  <input
                    className={style.inputRadio}
                    type="radio"
                    name="formPosition"
                    onClick={this.onChangeHandler}
                    value={item.id}
                  />
                  <span className={style.inputRadioDescription}>
                    {item.name}
                  </span>
                </label>
              ))}
        </div>
        <label className={style.inputLabel} htmlFor="formFile">
          Photo
        </label>
        <InputFile
          className={style.inputFile}
          inputStyles={style.inputFileInput}
          buttonStyles={style.inputFileButton}
          error={!this.state.isFormFileValid && true}
          uploadFile={this.uploadFile}
        />
        <input
          className={style.inputSubmit}
          type="submit"
          onClick={this.submitHandler}
          value="Sing up now"
        />
      </form>
    );
  }
}

export default RegistrationForm;
