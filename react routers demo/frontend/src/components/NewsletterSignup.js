import {useState, useEffect} from "react";
import {useFetcher} from "react-router-dom";
import classes from './NewsletterSignup.module.css';

function NewsletterSignup() {
    const [inputText, setInputText] = useState("");
    const fetcher = useFetcher();
    const {data, state} = fetcher;

    useEffect(() => {
        if(state === 'idle' && data && data.message) {
            window.alert(data.message);
        }
    }, [data, state]);

    const buttonClickHandler = (event) => {
        if(inputText.includes('@')){
            setInputText("");
        }else if(inputText === ""){
            event.preventDefault();
        }
    }

    const inputChangeHandler = (event) => {
        setInputText(event.target.value);
    }

    return (
        <fetcher.Form method="post" action="/newsletter" className={classes.newsletter}>
            <input
                type="email"
                placeholder="Sign up for newsletter..."
                aria-label="Sign up for newsletter"
                value={inputText}
                onChange={inputChangeHandler}
            />
            <button onClick={buttonClickHandler}>Sign up</button>
        </fetcher.Form>
    );
}

export default NewsletterSignup;