import {useState} from 'react';
import useInputs from "../hooks/use-inputs";
const SimpleInput = (props) => {
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangedHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    } = useInputs(value => value.trim() !== '', "name");

    const VALID_REGEXP = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        errorMessage: emailErrorMessage,
        valueChangeHandler: emailChangedHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInputs(value => value.match(VALID_REGEXP), "email");


    let formIsValid = false;
    formIsValid = enteredNameIsValid && enteredEmailIsValid;


    const formSubmissionHandler = event => {
        event.preventDefault();

        if(!enteredNameIsValid || !enteredEmailIsValid) {
            return;
        }

        resetNameInput();
        resetEmailInput();
        // nameInputRef.current.value = '';
        // -> NOT IDEAL, DON'T MANIPULATE THE DOM DIRECTLY.
    }


    const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control'
    const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameChangedHandler} onBlur={nameBlurHandler} value={enteredName}/>
          {nameInputHasError && <p className="error-text">
              Name must not be empty.
          </p>}
      </div>
        <div className={emailInputClasses}>
            <label htmlFor='email'>Your Email</label>
            <input type='text' id='email' onChange={emailChangedHandler} onBlur={emailBlurHandler} value={enteredEmail}/>
            {emailInputHasError && <p className="error-text">
                {emailErrorMessage}
            </p>}
        </div>
        <div className="form-actions">
            <button disabled={!formIsValid}>Submit</button>
        </div>
    </form>
  );
};

export default SimpleInput;
