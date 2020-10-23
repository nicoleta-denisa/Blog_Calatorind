import React from 'react';
import { Card } from 'react-bootstrap';
import '../../components/App.css';

export default function About() {
    return (
        <div className="alignment">
            <Card className="cardDetails">
                <Card.Body>
                    <Card.Title className="alignment">DESPRE MINE</Card.Title>
                    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                    <br></br>
                    <br></br>
                    <Card.Text className="has-dropcap">
                        <p>
                            Lorem Ipsum este pur şi simplu o machetă pentru text
                            a industriei tipografice. Lorem Ipsum a fost macheta
                            standard a industriei încă din secolul al XVI-lea,
                            când un tipograf anonim a luat o planşetă de litere
                            şi le-a amestecat pentru a crea o carte
                            demonstrativă pentru literele respective. Nu doar că
                            a supravieţuit timp de cinci secole, dar şi a facut
                            saltul în tipografia electronică practic
                            neschimbată. A fost popularizată în anii '60 odată
                            cu ieşirea colilor Letraset care conţineau pasaje
                            Lorem Ipsum, iar mai recent, prin programele de
                            publicare pentru calculator, ca Aldus PageMaker care
                            includeau versiuni de Lorem Ipsum.
                        </p>

                        <p>
                            Există o mulţime de variaţii disponibile ale
                            pasajelor Lorem Ipsum, dar majoritatea lor au
                            suferit alterări într-o oarecare măsură prin
                            infiltrare de elemente de umor, sau de cuvinte luate
                            aleator, care nu sunt câtuşi de puţin credibile.
                            Daca vreţi să folosiţi un pasaj de Lorem Ipsum,
                            trebuie să vă asiguraţi că nu conţine nimic
                            stânjenitor ascuns printre randuri. Toate
                            generatoarele de Lorem Ipsum de pe Internet tind să
                            repete bucăţi de text în funcţie de necesitate,
                            astfel făcându-l pe acesta primul generator adevarat
                            de pe Internet. El utilizează un dicţionar de peste
                            200 cuvinte din latina, combinate cu o cantitate
                            considerabilă de modele de structuri de propoziţii,
                            pentru a genera Lorem Ipsum care arată decent.
                            Astfel, Lorem Ipsum-ul generat nu conţine repetiţii,
                            infiltrări de elemente de umor sau de cuvinte
                            non-caracteristice, etc.
                        </p>
                    </Card.Text>
                    <Card.Img variant="top" src="/images/despre_mine.jpg" />
                    {/* <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
            </Card>
        </div>
    );
}
