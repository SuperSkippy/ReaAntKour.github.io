import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Markdown from 'react-markdown';
import _ from 'lodash';
import TechReports from './TechReports';
import Title from './Title';
import getMemberData from './data/MemberData';
import getSponsorData from './data/SponsorData';

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
Dr Rea L Antoniou-Kourounioti works at the interface of plant science and mathematical modelling to understand how plants sense temperature to control their development. She is a Post-Doc in the groups of [Prof Martin Howard](https://www.jic.ac.uk/people/martin-howard/) and [Prof Dame Caroline Dean](https://www.jic.ac.uk/people/caroline-dean/) at the [John Innes Centre](https://www.jic.ac.uk/).

`;
//Rea has published ${journal} journal articles and ${chapter} book-chapter.

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
          <img alt='Media' style={{ marginRight: '15px' }} className={'rounded float-left'} width='200px' src={'images/Rea_2020.png'}/>
          <Title title={'Rea L. Antoniou-Kourounioti'} selectColor={'darkBlue'}/>
          <Markdown source={homeText}/>
          <a href='https://www.jic.ac.uk/people/dr-rea-l-antoniou-kourounioti/'> <img alt='Media' style={{ marginRight: '15px' }} className={'rounded float-left'} width='100px' src={'images/jic.png'}/> </a>
          <a href='https://twitter.com/ReaLAntKour'> <img alt='Media' style={{ marginRight: '15px' }} className={'rounded float-left'} width='50px' src={'images/Twitter.png'}/> </a>
          <a href='https://scholar.google.co.uk/citations?user=ZvaNmKcAAAAJ&hl=en'> <img alt='Media' style={{ marginRight: '15px' }} className={'rounded float-left'} width='50px' src={'images/google_scholar.png'}/> </a>
          <a href='https://www.linkedin.com/in/rea-laila-antoniou-kourounioti-8962047/'> <img alt='Media' style={{ marginRight: '15px' }} className={'rounded float-left'} width='50px' src={'images/linkedin.png'}/> </a>
          <a href='https://www.researchgate.net/profile/Rea_Antoniou_Kourounioti'> <img alt='Media' style={{ marginRight: '15px' }} className={'rounded float-left'} width='50px' src={'images/researchgate.png'}/> </a>
          <a href='https://publons.com/researcher/AAY-3284-2020/'> <img alt='Media' style={{ marginRight: '15px' }} className={'rounded float-left'} width='140px' src={'images/publons.jpg'}/> </a>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Home;
