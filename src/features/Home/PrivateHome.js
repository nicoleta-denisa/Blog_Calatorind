import React from 'react';
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaPinterestP,
} from 'react-icons/fa';
import './Home.css';
import GetArticles from './GetArticles';
import aboutImg from '../../images/about.jpg';
import Newsletter from './Newsletter';

export default function Home() {
    return (
        <div className="container">
            <br></br>
            <br></br>
            <div className="row">
                <div className="col-lg-9 mb-9">
                    <GetArticles />
                </div>
                <div className="col-lg-3 mb-3">
                    <div className="card about">
                        <h6>
                            <b>DESPRE MINE</b>
                        </h6>

                        <img
                            src={aboutImg}
                            alt="about"
                            className="cardImage2 card-img-top"
                        />
                        <div className="card-body">
                            <p className="card-text font-text">
                                Bună și Bine ai venit pe blogul meu. Mă numesc
                                Denisa și sunt din orașul Brasov.
                            </p>
                            <p className="font-signature">Sisu Denisa</p>
                        </div>
                    </div>

                    <hr className="hr-dotted"></hr>

                    <div className="icons-sm">
                        <a href="https://www.facebook.com/">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.instagram.com/">
                            <FaInstagram />
                        </a>
                        <a href="https://twitter.com/">
                            <FaTwitter />
                        </a>
                        <a href="https://ro.pinterest.com/">
                            <FaPinterestP />
                        </a>
                    </div>
                    <Newsletter />
                </div>
            </div>

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
