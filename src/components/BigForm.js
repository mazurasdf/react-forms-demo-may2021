import React, {useState} from 'react';

const BigForm = (props) => {
    //we can have different inputs for each input.
    //this avoids having to pull in all the old information every time we type a character
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [reservation, setReservation] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [phone, setPhone] = useState("");

    //setting a state for each validation allows us to simple display the value of the state
    //in our return. empty string is nothing, and a message will show invalid input
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [reservationError, setReservationError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [confirmEmailError, setConfirmEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");

    //each input will need to update state properly
    const onFirstNameChange = (event) => {
        setFirstName(event.target.value);
        if(event.target.value.length < 3){
            setFirstNameError("First Name must be at least 3 characters!");
        }
        else{
            setFirstNameError("");
        }
    }

    const onLastNameChange = (event) => {
        setLastName(event.target.value);
        if(event.target.value.length < 3){
            setLastNameError("Last Name must be at least 3 characters!");
        }
        else{
            setLastNameError("");
        }
    }

    const onReservationChange = (event) => {
        setReservation(event.target.value);
        if(event.target.value.length < 1){
            setReservationError("Date and time is required!");
        }
        else if(new Date(event.target.value) < new Date()){
            setReservationError("Date must be in the future!");
        }
        else{
            setReservationError("");
        }
    }

    const onEmailChange = (event) => {
        setEmail(event.target.value);
        if(!/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/.test(event.target.value)){
            setEmailError("Must be a valid email!!");
        }
        else{
            setEmailError("");
        }
    }

    const onConfirmEmailChange = (event) => {
        setConfirmEmail(event.target.value);
        //how might you go about writing this validation?
    }

    const onPhoneChange = (event) => {
        setPhone(event.target.value);
        //can we check that each character is a number?
        //can we verify that the user provides 7(or 10) numbers
    }

    //this function will print our inputs to the console
    const onSubmitHandler = (event) => {
        event.preventDefault();//we'll talk about this line soon!
        console.log("form submitted!!");
        console.log({
            firstName,
            lastName,
            reservation,
            email,
            confirmEmail,
            phone
        })
    }

    return(
        <div>
            <marquee><h1>Make a reservation at the Food Restaurant™</h1></marquee>
            <form onSubmit={onSubmitHandler}>
                <div className="form-row">
                    <div className="form-group col-md-6 mx-auto center mb-3">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" onChange={onFirstNameChange} className="form-control" name="firstName"/>
                        <span className="alert-danger">{firstNameError}</span>
                    </div>
                    <div className="form-group col-md-6 mx-auto center m-3">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" onChange={onLastNameChange} className="form-control" name="lastName"/>
                        <span className="alert-danger">{lastNameError}</span>
                    </div>
                </div>
                <div className="form-group col-md-6 mx-auto center m-3">
                    <label htmlFor="reservation">Reservation date and time</label>
                    <input type="datetime-local" onChange={onReservationChange} className="form-control" name="reservation"/>
                    <span className="alert-danger">{reservationError}</span>
                </div>
                <div className="form-group col-md-6 mx-auto center m-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" onChange={onEmailChange} className="form-control" name="email"/>
                    <span className="alert-danger">{emailError}</span>
                </div>
                <div className="form-group col-md-6 mx-auto center m-3">
                    <label htmlFor="confirmEmail">Confirm email</label>
                    <input type="email" onChange={onConfirmEmailChange} className="form-control" name="confirmEmail"/>
                    <span className="alert-danger">{confirmEmailError}</span>
                </div>
                <div className="form-group col-md-6 mx-auto center m-3">
                    <label htmlFor="phone">Phone number</label>
                    <input type="text" onChange={onPhoneChange} className="form-control" name="phone"/>
                    <span className="alert-danger">{phoneError}</span>
                </div>
                <button type="submit" className="btn btn-primary btn-lg m-3">Reserve a table</button>
            </form>
        </div>
    )
}

export default BigForm;