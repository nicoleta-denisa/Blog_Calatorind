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
                            Dorința de cunoaștere a altor culturi, societăți,
                            meleaguri face parte din năzuința firească a omului
                            de a descoperi și explora necunoscutul. Daca din
                            varii motive, nu toți reușim să vizitam locurile la
                            care visam, atunci măcar putem să citim despre ele
                            pentru a le simți mult mai aproape de noi, iar „era”
                            Internetului nu face decât să ne ajute în acest
                            sens.
                        </Card.Text>

                        <Card.Text className="font-text">
                            De ce acest blog? Răspunsul este relativ simplu, iar
                            punctul de plecare a fost faptul că după câțiva ani
                            de călătorii, am ajuns la concluzia că momentele în
                            care am simțit că trăiesc cu adevărat au fost cele
                            în care am explorat noi destinații, am cunoscut noi
                            culturi și am experimentat lucruri noi. În plus, de
                            fiecare dată când rememorez călătoriile făcute,
                            citesc sau scriu ceva despre o destinație turistică,
                            simt cum inima începe să bată mai cu putere, iar
                            pofta de viață atinge cotele cele mai înalte.
                        </Card.Text>

                        <Card.Img variant="top" src={About_me} />

                        <Card.Text className="font-text">
                            Gandindu-mă că mai sunt și alții care asemeni mie,
                            găsesc o plăcere fie ea și de scurtă durată în a
                            citi / a visa la o destinație turistică, am decis să
                            împărtășesc și altora experiențele mele turistice
                            sau poate doar năzuință spre noi destinații pe care
                            sper că voi reuși să le vizitez.
                        </Card.Text>

                        <Card.Text className="font-text">
                            De asemenea, am speranța că măcar o parte dintre
                            informațiile oferite să fie, cândva, de folos
                            cititorilor!
                        </Card.Text>

                        <Card.Text className="font-text">
                            Așadar, dragi cititori ai acestui blog, lectura
                            plăcută și nu vă opriți să visați la locurile pe
                            care doriți să le vizitați!
                        </Card.Text>

                        <Card.Text className="font-text-italic">
                            "Plăcerea resimțită din călătorii este probabil în
                            funcție de mentalitatea cu care călătorim decât
                            destinația spre care călătorim."
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
