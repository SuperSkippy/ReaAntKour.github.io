import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import {Card,Col} from 'react-bootstrap';
import Markdown from 'react-markdown';
import _ from 'lodash';
import TechReports from './TechReports';
import Title from './Title';
import getMemberData from './data/MemberData';
import getSponsorData from './data/SponsorData';
import { ColorCode } from './Constants';

/* Tech Report Info */
const techReports = new TechReports();
const journal = techReports.getKeysByKeyword('Journal-Article').length;
const chapter = techReports.getKeysByKeyword('Book-Chapter').length;

/* Member info */
const numMembers = getMemberData().length;

/* Sponsor info */
const dollar = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', notation: 'compact' });
const numSponsors = getSponsorData().length;
const sponsorFundingList = _.flatten(_.map(getSponsorData(), sponsor => sponsor.grants));
const total = dollar.format(_.reduce(sponsorFundingList, (sum, n) => sum + n, 0));

/* Markdown for Home section text. */
const homeText = `
*WRITE MORE HERE*
I work at the interface of plant science and mathematical modelling to understand how plants sense temperature to control their development.
*add email here*
`;
// Dr Rea L Antoniou-Kourounioti is a Post-Doc in the groups of [Prof Martin Howard](https://www.jic.ac.uk/people/martin-howard/) and [Prof Dame Caroline Dean](https://www.jic.ac.uk/people/caroline-dean/) at the [John Innes Centre](https://www.jic.ac.uk/).
//Rea has published ${journal} journal articles and ${chapter} book-chapter.

const renderDeck = (deckNum) => {
  const deckStyle = { marginBottom: '0em' };
  return (
    <CardDeck key={deckNum} style={deckStyle}>
      {[
        (<Col className="col-md-auto">
          <Card style={{ border: `1px solid ${ColorCode.background}`, marginRight: '0em', width: '230px' }}>
            <Card.Body>
              <img alt='Media' style={{ marginRight: '1px' }} className={'rounded float-right'} width='200px' src={'images/Rea_2020.jpg'}/>
            </Card.Body>
          </Card>
        </Col>
        ),
        (<Col className="container-fluid mt-4">
          <Card style={{ border: `1px solid ${ColorCode.background}`, marginLeft: '0em' }}>
            <Card.Body>
              <Title title={'Rea L. Antoniou-Kourounioti'} selectColor={'darkBlue'}/>
              <Markdown source={homeText}/>
              <a href='https://www.jic.ac.uk/people/dr-rea-l-antoniou-kourounioti/'> <img alt='Media' style={{ marginRight: '15px' }} className={'rounded float-left'} width='100px' src={'images/jic.png'}/> </a>
              <a href='https://twitter.com/ReaLAntKour'> <img alt='Media' style={{ marginRight: '15px' }} className={'rounded float-left'} width='50px' src={'images/Twitter.png'}/> </a>
              <a href='https://scholar.google.co.uk/citations?user=ZvaNmKcAAAAJ&hl=en'> <img alt='Media' style={{ marginRight: '15px' }} className={'rounded float-left'} width='50px' src={'images/google_scholar.png'}/> </a>
              <a href='https://www.linkedin.com/in/rea-laila-antoniou-kourounioti-8962047/'> <img alt='Media' style={{ marginRight: '15px' }} className={'rounded float-left'} width='50px' src={'images/linkedin.png'}/> </a>
              <a href='https://www.researchgate.net/profile/Rea_Antoniou_Kourounioti'> <img alt='Media' style={{ marginRight: '15px' }} className={'rounded float-left'} width='50px' src={'images/researchgate.png'}/> </a>
              <a href='https://publons.com/researcher/AAY-3284-2020/'> <img alt='Media' style={{ marginRight: '15px' }} className={'rounded float-left'} width='140px' src={'images/publons.jpg'}/> </a>
            </Card.Body>
          </Card>
        </Col>
        ),
      ]}
    </CardDeck>
  );
};

const renderDecks = () => {
  const decks = [];
  for (let i = 0; i < 1; i++) {
    decks.push(renderDeck(i));
  }
  return decks;
};


/**
 * The Home section introduces the organization and provides summary statistics.
 */
function Home(props) {
  const jumbotronStyle = {backgroundColor: 'white', padding: 0, marginBottom: 0 };
  return (
    // eslint-disable-next-line react/prop-types
    <div style={props.sectionStyle} id="home">
      <Jumbotron fluid style={jumbotronStyle}>
        <Container>
          {renderDecks()}
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Home;
