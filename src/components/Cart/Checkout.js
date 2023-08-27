import { useRef, useState } from 'react';
import classes from './Checkout.module.css';


const isNotEmpty = value => value.trim() === '';
const isFiveCharacters = value => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const streetName = streetInputRef.current.value;
    const cityName = cityInputRef.current.value;
    const postalName = postalInputRef.current.value;

    const enterNameIsValid = !isNotEmpty(enteredName);
    const enteredStreetIsValid = !isNotEmpty(streetName);
    const enteredCityIsValid = !isNotEmpty(cityName);
    const enteredPostalCodeIsValid = isFiveCharacters(postalName);

    const formIsValid = enterNameIsValid && enteredCityIsValid && enteredStreetIsValid && enteredPostalCodeIsValid

    setFormInputValidity({
      name: enterNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid
    })

    if (formIsValid) {
      return;
    }
    props.onConfirm({
      name: enteredName,
      street: streetName,
      city: cityName,
      postalCode: postalName
    })
  };

  const nameInputClasses = `${classes.control} ${formInputValidity.name ? '' : classes.invalid}`
  const streetInputClasses = `${classes.control} ${formInputValidity.street ? '' : classes.invalid}`
  const cityInputClasses = `${classes.control} ${formInputValidity.city ? '' : classes.invalid}`
  const postalInputClasses = `${classes.control} ${formInputValidity.postalCode ? '' : classes.invalid}`

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} />
        {!formInputValidity.name && <p>Please Enter Valid Name</p>}
      </div>
      <div className={streetInputClasses}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef} />
        {!formInputValidity.street && <p>Please Enter Valid Street</p>}
      </div>
      <div className={postalInputClasses}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalInputRef}/>
        {!formInputValidity.postalCode && <p>Please Enter Valid Postal Code (5 Characters)</p>}
      </div>
      <div className={cityInputClasses}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef} />
        {!formInputValidity.city && <p>Please Enter Valid City</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
