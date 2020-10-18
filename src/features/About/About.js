import React from 'react';
import { Card} from 'react-bootstrap';
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
                    Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea, când un tipograf anonim a luat o planşetă de litere şi le-a amestecat pentru a crea o carte demonstrativă pentru literele respective. Nu doar că a supravieţuit timp de cinci secole, dar şi a facut saltul în tipografia electronică practic neschimbată. A fost popularizată în anii '60 odată cu ieşirea colilor Letraset care conţineau pasaje Lorem Ipsum, iar mai recent, prin programele de publicare pentru calculator, ca Aldus PageMaker care includeau versiuni de Lorem Ipsum.
                </Card.Text>
                <Card.Img variant="top" src="/images/despre_mine.jpg" />
                {/* <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link> */}
            </Card.Body>
            </Card>
        </div>
    );
}