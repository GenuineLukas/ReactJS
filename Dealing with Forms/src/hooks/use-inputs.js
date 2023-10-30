import React, {isValidElement, useState} from "react";

const useInputs = (validateValue, inputKind) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    };

    const inputBlurHandler = (event) => {
        setIsTouched(true);

        if(inputKind === "email"){
            if(event.target.value.length === 0){
                setErrorMessage("Email must not be empty.")
            } else {
                setErrorMessage("type your email in a correct form. (including @)")
            }
        }
    };

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    };

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        errorMessage,
        valueChangeHandler,
        inputBlurHandler,
        reset,
}
}

export default useInputs;