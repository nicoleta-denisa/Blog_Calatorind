import React, { useState, useContext } from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import './LoginRegister.css';
import { AuthContext } from './AuthContext';

export default function LoginRegister() {
    const [values, setValues] = useState({
        email: '',
        password: '',
        retype_password: '',
    });
    const [errors, setErrors] = useState({
        email: '',
        password: '',
        retype_password: '',
    });

    const [alert, setAlert] = useState(null);
    const { pathname } = useLocation();
    const isRegister = pathname === '/register';

    function handleInputChange(e) {
        setErrors({ ...errors, [e.target.name]: '' });

        setValues({ ...values, [e.target.name]: e.target.value });
    }

    function isFormValid() {
        let isValid = true;
        const newErrors = { ...errors };

        if (!values.email) {
            newErrors.email = 'Adauga un email!';
            isValid = false;
        }

        if (!values.password) {
            newErrors.password = 'Adauga o parola!';
            isValid = false;
        }

        if (isRegister && values.password !== values.retype_password) {
            newErrors.retype_password = 'Parolele nu coincid!';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    }

    console.log(errors);

    function handleSubmit(e) {
        e.preventDefault();
        setAlert(null);

        if (!isFormValid()) {
            return;
        }

        if (!isRegister) {
            firebase
                .auth()
                .signInWithEmailAndPassword(values.email, values.password)
                .catch(function (error) {
                    console.warn(error);
                    setAlert({
                        type: 'danger',
                        message: 'Parola este incorecta!',
                    });
                });
        } else {
            firebase
                .auth()
                .createUserWithEmailAndPassword(values.email, values.password)
                .catch(function (error) {
                    console.warn(error);
                    setAlert({ type: 'danger', message: error.message });
                });
        }
    }

    const { user } = useContext(AuthContext);
    if (user) {
        return <Redirect to="/"></Redirect>;
    }

    return (
        <div className="login-form">
            <form onSubmit={handleSubmit}>
                {alert?.message && (
                    <div className={`alert alert-${alert.type}`} role="alert">
                        {alert.message}
                    </div>
                )}
                <div className="form-row justify-content-center">
                    <span className="login-form-title">
                        {!isRegister ? 'Autentificare' : 'Inregistreaza-te'}
                    </span>
                    <br></br>
                    <br></br>
                </div>
                <div className="form-row justify-content-center">
                    <div className="form-group col-md-7 login-input">
                        <input
                            type="email"
                            className={` form-control${
                                errors.email && ' is-invalid'
                            } login-text`}
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={values.email}
                            onChange={handleInputChange}
                        />
                        <span className="focus-input"></span>
                        <div className="invalid-feedback">{errors.email}</div>
                    </div>
                </div>
                <div className="form-row justify-content-center">
                    <div className="form-group col-md-7 login-input">
                        <input
                            type="password"
                            className={`form-control${
                                errors.password && ' is-invalid'
                            } login-text`}
                            id="password"
                            name="password"
                            placeholder="Parola"
                            value={values.password}
                            onChange={handleInputChange}
                        />
                        <span className="focus-input"></span>
                        <div className="invalid-feedback">
                            {errors.password}
                        </div>
                    </div>
                </div>

                {isRegister && (
                    <div className="form-row justify-content-center">
                        <div className="form-group col-md-7 login-input">
                            <input
                                type="password"
                                className={`form-control${
                                    errors.retype_password && ' is-invalid'
                                } login-text`}
                                id="retype_password"
                                name="retype_password"
                                placeholder="Rescrie Parola"
                                value={values.retype_password}
                                onChange={handleInputChange}
                            />
                            <span className="focus-input"></span>
                            <div className="invalid-feedback">
                                {errors.retype_password}
                            </div>
                        </div>
                    </div>
                )}
                <div className="form-row justify-content-center">
                    <div className="form-group col-md-7 container-login-form-btn">
                        <button className="btn login-form-btn">
                            {!isRegister ? 'Autentificare' : 'Inregistreaza-te'}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
