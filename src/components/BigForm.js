import React, {useState} from 'react';

const BigForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [reservation, setReservation] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [reservationError, setReservationError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [confirmEmailError, setConfirmEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");

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
    }

    const onReservationChange = (event) => {
        setReservation(event.target.value);
    }

    const onEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const onConfirmEmailChange = (event) => {
        setConfirmEmail(event.target.value);
    }

    const onPhoneChange = (event) => {
        setPhone(event.target.value);
    }

    return(
        <div>
            <marquee><h1>Make a reservation at the Food Restaurant™</h1></marquee>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6 mx-auto center mb-3">
                        <label for="firstName">First Name</label>
                        <input type="email" onChange={onFirstNameChange} className="form-control" name="firstName"/>
                        <span className="alert-danger">{firstNameError}</span>
                    </div>
                    <div className="form-group col-md-6 mx-auto center m-3">
                        <label for="lastName">Last Name</label>
                        <input type="text" onChange={onLastNameChange} className="form-control" name="lastName"/>
                    </div>
                </div>
                <div className="form-group col-md-6 mx-auto center m-3">
                    <label for="reservation">Reservation date and time</label>
                    <input type="datetime-local" onChange={onReservationChange} className="form-control" name="reservation"/>
                </div>
                <div className="form-group col-md-6 mx-auto center m-3">
                    <label for="email">Email</label>
                    <input type="text" onChange={onEmailChange} className="form-control" name="email"/>
                </div>
                <div className="form-group col-md-6 mx-auto center m-3">
                    <label for="confirmEmail">Confirm email</label>
                    <input type="text" onChange={onConfirmEmailChange} className="form-control" name="confirmEmail"/>
                </div>
                <div className="form-group col-md-6 mx-auto center m-3">
                    <label for="phone">Phone number</label>
                    <input type="text" onChange={onPhoneChange} className="form-control" name="phone"/>
                </div>
                <button type="submit" className="btn btn-primary btn-lg m-3">Reserve a table</button>
            </form>
        </div>
    )
}

export default BigForm;