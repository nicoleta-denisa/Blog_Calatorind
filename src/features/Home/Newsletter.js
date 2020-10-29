import React, { useState } from 'react';
import './Home.css';
import newsletter from '../../images/newsletter.jpg';
import firebase from '../../components/firebase';

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const db = firebase.firestore().collection('newsletter');

    const handleSubmit = (e) => {
        e.preventDefault();
        db.add({
            email: email,
        })
            .then(() => {
                console.log('Abonare cu success');
            })
            .catch((error) => {
                alert(error.message);
            });

        setEmail('');
    };

    return (
        <div className="card newsletter">
            <img
                src={newsletter}
                alt="newsletter"
                className="cardImage3 card-img-top"
            />
            <div className="card-body">
                <p className="card-text font-text">
                    Obține cele mai sincere gânduri în materie de călătorii.
                </p>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button
                    onClick={handleSubmit}
                    className="btn btn-block newsletter-btn"
                >
                    ABONEAZĂ-TE!
                </button>
            </div>
        </div>
    );
}
