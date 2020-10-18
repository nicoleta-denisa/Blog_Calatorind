import React from 'react';
import './Home.css';
import Iasi from './Iasi';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import brasovImg from '../../images/brasov.jpg';
import iasiImg from '../../images/iasi.jpg';
import clujImg from '../../images/cluj.jpg';
import aboutImg from '../../images/about.jpg';

export default function Home() {
    return(
        <section>
            <Router>
                <div className="row">
                    <div className="col-lg-8 mb-8">
                        <div className="card">
                            <img src={iasiImg} alt="Iasi" className="cardImage card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">Obiective turistice Iasi</h5>
                                <p className="card-text"> Dacă încă te gândești ce merită să vizitezi din obiectivele turistice din Iași, îți aducem cinci recomandări care să te ajute să alegi mai ușor dintre tot ceea ce este de văzut în capitala Moldovei. </p>
                                <Link exact to='/home/iasi' className="btn btn-outline-success btn-sm">Citeste mai multe</Link>
                                {/* <Switch><Route exact path="/home/iasi" component={ Iasi } /></Switch> */}
                            {/* <a href={Iasi} className="btn btn-outline-success btn-sm">Citeste mai multe</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1 mb-1"></div>
                    <div className="col-lg-3 mb-3">
                        <div className="card about">
                            <img src={aboutImg} alt="about" className="cardImage2 card-img-top" />
                            <div className="card-body">
                                <p className="card-text">Bună și Bine ai venit pe blogul meu. Mă numesc Denisa și sunt din orașul Brasov.</p>
                                <p className="font5">Sisu Denisa</p>
                            </div>
                        </div>
                    </div>
                </div>

                <br></br> <br></br>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mb-8">
                            <div className="card">
                                <img src={brasovImg} alt="Brasov" className="cardImage card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">Recomandari in Brasov</h5>
                                    <p className="card-text">In putinele randuri, pe care le scriu, o sa incerc sa mentionez cateva recomandari in Brasov, si pentru turistii care doresc sa fie informati. </p>
                                <a href="" className="btn btn-outline-success btn-sm">Citeste mai multe</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br> <br></br>
                
                    <div className="row">
                        <div className="col-lg-8 mb-8">
                            <div className="card">
                                <img src={clujImg} alt="Cluj" className="cardImage card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">5 obiective turistice in Cluj</h5>
                                    <p className="card-text"> Fie că ai ajuns în Cluj pentru un festival precum Electric Castle sau Untold, sau ești doar curios să descoperi un oraș fain cum ar spune clujenii, ai o întreagă serie de obiective turistice din Cluj de pus pe lista de văzut. </p>
                                <a href="" className="btn btn-outline-success btn-sm">Citeste mai multe</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        </section>


        
        
    
    )
}