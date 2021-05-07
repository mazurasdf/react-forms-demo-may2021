import React, {useState} from 'react';

const SmallForm = (props) => {
    //rather than multiple states, we have one state that holds an object with all inputs
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        reservation: "",
        email: "",
        confirmEmail: "",
        phone: ""
    });

    //this approach allows us to use the same function for input onChange
    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    //validator functions can be reused for different components
    const lengthValidator = (str, length) => {
        return str.length >= length;
    }

    //or they can have more specific uses for single inputs
    const dateValid = (date) => {
        return new Date(date) >= new Date();
    }

    //regex is always useful for validations
    const emailValid = (str) => {
        return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/.test(str);
    }

    //returns true only when every input is valid
    const allValid = (allInputs) => {
        return lengthValidator(allInputs.firstName,3)
            && lengthValidator(allInputs.lastName,3)
            && lengthValidator(allInputs.phone,7)
            && dateValid(allInputs.reservation)
            && emailValid(allInputs.email)
    }

    //this function will print our inputs to the console
    const onSubmitHandler = (event) => {
        event.preventDefault();//we'll talk about this line soon!
        console.log("form submitted!");
        console.log(form);
    }

    return(
        <div>
            <marquee><h1>Make a reservation at the Food Restaurant™</h1></marquee>
            <form onSubmit={onSubmitHandler}>
                <div className="form-row">
                    <div className="form-group col-md-6 mx-auto center mb-3">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" onChange={onChangeHandler} className="form-control" name="firstName"/>
                        {!lengthValidator(form.firstName,3) && form.firstName.length !== 0 && <span className="alert-danger">must be at least 3 characters</span>}
                    </div>
                    <div className="form-group col-md-6 mx-auto center m-3">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" onChange={onChangeHandler} className="form-control" name="lastName"/>
                        {!lengthValidator(form.lastName,3) && form.lastName.length !== 0 && <span className="alert-danger">must be at least 3 characters</span>}
                    </div>
                </div>
                <div className="form-group col-md-6 mx-auto center m-3">
                    <label htmlFor="reservation">Reservation date and time</label>
                    <input type="datetime-local" onChange={onChangeHandler} className="form-control" name="reservation"/>
                    {!dateValid(form.reservation) && form.reservation.length !== 0 && <span className="alert-danger">no past dates</span>}
                </div>
                <div className="form-group col-md-6 mx-auto center m-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" onChange={onChangeHandler} className="form-control" name="email"/>
                    {!emailValid(form.email) && form.email.length !== 0 && <span className="alert-danger">must enter valid email</span>}
                </div>
                <div className="form-group col-md-6 mx-auto center m-3">
                    <label htmlFor="confirmEmail">Confirm email</label>
                    <input type="email" onChange={onChangeHandler} className="form-control" name="confirmEmail"/>
                </div>
                <div className="form-group col-md-6 mx-auto center m-3">
                    <label htmlFor="phone">Phone number</label>
                    <input type="text" onChange={onChangeHandler} className="form-control" name="phone"/>
                    {!lengthValidator(form.phone,7) && form.phone.length !== 0 && <span className="alert-danger">7 digits!!!</span>}
                </div>
                {
                    allValid(form) ?
                        <button type="submit" className="btn btn-primary btn-lg m-3">Reserve a table</button> :
                        <button type="submit" className="btn btn-primary btn-lg m-3" disabled>Reserve a table</button>
                }
                
            </form>
        </div>
    )
}

export default SmallForm;