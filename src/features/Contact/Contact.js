import React, { useState } from 'react';
import Map from './Map';
import firebase from '../../components/firebase';
import './Contact.css';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const [errors, setErrors] = useState({});
    const [alert, setAlert] = useState(null);

    const db = firebase.firestore().collection('contacts');

    function isFormValid() {
        let isValid = true;
        let newErrors = { ...errors };

        if (!name) {
            newErrors.name = 'Adaugă un nume!';
            isValid = false;
        }

        if (!email) {
            newErrors.email = 'Adaugă un email!';
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
        db.add({
            name: name,
            email: email,
            subject: subject,
            message: message,
        })
            .then(() => {
                console.log('Mesajul a fost trimis cu succes.');
                setAlert({
                    type: 'success',
                    message:
                        'Mesajul a fost trimis cu succes. Multumesc frumos!',
                });
            })
            .catch((error) => {
                console.warn(error);
                setAlert({ type: 'danger', message: error.message });
            });

        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    }

    return (
        <div className="container">
            <br></br>
            <br></br>
            <Map />
            <br></br>
            <br></br>

            <form className="form " onSubmit={handleSubmit}>
                {alert?.message && (
                    <div className={`alert alert-${alert.type}`} role="alert">
                        {alert.message}
                    </div>
                )}
                <div className="form-row">
                    <div className="form-group col-md-3 contact-form-text">
                        <input
                            type="text"
                            className={` form-control ${
                                errors.name && ' is-invalid'
                            } contact-text`}
                            id="name"
                            placeholder="Nume*"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <div className="invalid-feedback">{errors.name}</div>
                    </div>
                    <div className="form-group col-md-3 contact-form-text">
                        <input
                            type="email"
                            className={` form-control ${
                                errors.email && ' is-invalid'
                            } contact-text`}
                            id="email"
                            placeholder="Email*"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <div className="invalid-feedback">{errors.email}</div>
                    </div>
                    <div className="form-group col-md-3">
                        <input
                            type="text"
                            className="form-control contact-text"
                            id="subject"
                            placeholder="Subiect"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-9">
                        <textarea
                            className="form-control contact-text"
                            id="message"
                            placeholder="Mesaj"
                            rows="6"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>
                </div>
                <button
                    type="submit"
                    className="btn contact-form-btn"
                    data-toggle="button"
                    aria-pressed="false"
                >
                    TRIMITE
                </button>
                <br></br>
            </form>

            <footer className="page-footer ">
                <div className="container-fluid text-center  footer-text">
                    Călătorind
                </div>
                <div className="footer-copyright text-center py-3">
                    © 2020 Copyright:
                    <a href="/"> Călătorind</a>
                </div>
            </footer>
        </div>
    );
}
