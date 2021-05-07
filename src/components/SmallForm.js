import React, {useState} from 'react';

const SmallForm = (props) => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        reservation: "",
        email: "",
        confirmEmail: "",
        phone: ""
    });

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const nameValid = (str) => {
        return str.length >= 3;
    }

    const phoneValid = (str) => {
        return str.length === 7;
    }

    const allValid = (allInputs) => {
        return nameValid(allInputs.firstName) && nameValid(allInputs.lastName) && phoneValid(allInputs.phone);
    }

    return(
        <div>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6 mx-auto center mb-3">
                        <label for="firstName">First Name</label>
                        <input type="email" onChange={onChangeHandler} className="form-control" name="firstName"/>
                        {!nameValid(form.firstName) && form.firstName.length != 0 && <span className="alert-danger">must be at least 3 characters</span>}
                    </div>
                    <div className="form-group col-md-6 mx-auto center m-3">
                        <label for="lastName">Last Name</label>
                        <input type="text" onChange={onChangeHandler} className="form-control" name="lastName"/>
                        {!nameValid(form.lastName) && form.lastName.length != 0 && <span className="alert-danger">must be at least 3 characters</span>}
                    </div>
                </div>
                <div className="form-group col-md-6 mx-auto center m-3">
                    <label for="reservation">Reservation date and time</label>
                    <input type="datetime-local" onChange={onChangeHandler} className="form-control" name="reservation"/>
                </div>
                <div className="form-group col-md-6 mx-auto center m-3">
                    <label for="email">Email</label>
                    <input type="text" onChange={onChangeHandler} className="form-control" name="email"/>
                </div>
                <div className="form-group col-md-6 mx-auto center m-3">
                    <label for="confirmEmail">Confirm email</label>
                    <input type="text" onChange={onChangeHandler} className="form-control" name="confirmEmail"/>
                </div>
                <div className="form-group col-md-6 mx-auto center m-3">
                    <label for="phone">Phone number</label>
                    <input type="text" onChange={onChangeHandler} className="form-control" name="phone"/>
                    {!phoneValid(form.phone) && form.phone.length != 0 && <span className="alert-danger">7 digits!!!</span>}
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