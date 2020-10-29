import React from 'react';
import { Card } from 'react-bootstrap';
import './About.css';
import About_me from '../../images/despre_mine.jpg';

export default function About() {
    return (
        <>
            <div className="alignment">
                <Card className="card-details">
                    <Card.Body>
                        <Card.Title className="alignment font-title">
                            DESPRE MINE
                        </Card.Title>
                        <br></br>
                        <br></br>
                        <Card.Text className="has-dropcap font-text">
                            Dorinta de cunoastere a altor culturi, societati,
                            meleaguri face parte din nazuinta fireasca a omului
                            de a descoperi si explora necunoscutul. Daca din
                            varii motive, nu toti reusim sa vizitam locurile la
                            care visam, atunci macar putem sa citim despre ele
                            pentru a le simti mult mai aproape de noi, iar „era”
                            Internetului nu face decat sa ne ajute in acest
                            sens.
                        </Card.Text>

                        <Card.Text className="font-text">
                            De ce acest blog? Raspunsul este relativ simplu, iar
                            punctul de plecare a fost faptul ca dupa cativa ani
                            de calatorii, am ajuns la concluzia ca momentele in
                            care am simtit ca traiesc cu adevarat au fost cele
                            in care am explorat noi destinatii, am cunoscut noi
                            culturi si am experimentat lucruri noi. In plus, de
                            fiecare data cand rememorez calatoriile facute,
                            citesc sau scriu ceva despre o destinatie turistica,
                            simt cum inima incepe sa bata mai cu putere, iar
                            pofta de viata atinge cotele cele mai inalte.
                        </Card.Text>

                        <Card.Img variant="top" src={About_me} />

                        <Card.Text className="font-text">
                            Gandindu-ma ca mai sunt si altii care asemeni mie,
                            gasesc o placere fie ea si de scurta durata in a
                            citi / a visa la o destinatie turistica, am decis sa
                            impartasesc si altora experientele mele turistice
                            sau poate doar nazuinta spre noi destinatii pe care
                            sper ca voi reusi sa le vizitez.
                        </Card.Text>

                        <Card.Text className="font-text">
                            De asemenea, am speranta ca macar o parte dintre
                            informatiile oferite sa fie, candva, de folos
                            cititorilor!
                        </Card.Text>

                        <Card.Text className="font-text">
                            Asadar, dragi cititori ai acestui blog, lectura
                            placuta si nu va opriti sa visati la locurile pe
                            care doriti sa le vizitati!
                        </Card.Text>

                        <Card.Text className="font-text-italic">
                            "Placerea resimtita din calatorii este probabil în
                            functie de mentalitatea cu care calatorim decat
                            destinatia spre care calatorim."
                        </Card.Text>
                        <Card.Text className="font-text">
                            Alain de Botton
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <br></br>
            <br></br>

            <footer className="page-footer ">
                <div className="container-fluid text-center  footer-text">
                    Călătorind
                </div>
                <div className="footer-copyright text-center py-3">
                    © 2020 Copyright:
                    <a href="/"> Călătorind</a>
                </div>
            </footer>
        </>
    );
}
