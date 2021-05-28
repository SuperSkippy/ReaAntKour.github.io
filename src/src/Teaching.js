import React, { useState } from 'react';
//import Image from 'react-bootstrap/Image';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Title from './Title';
import { ColorCode } from './Constants';
//import { isPropertySignature } from 'typescript';

  
/* Make it easy to get the colour from caller function. */
const lightColour = {
    blue: ColorCode.vlightBlue,
    yellow: ColorCode.vlightYellow,
  };
  
  /* Make it easy to get the colour from caller function. */
  const darkColour = {
    blue: ColorCode.darkBlue,
    yellow: ColorCode.darkYellow,
  };
  

/**
 * Display the Research Interests section.
 */
function Teaching(props) {
    const deckStyle = { marginBottom: '0em' };
    const cardStyle = { backgroundColor: `${lightColour[props.themeColour]}`, border: `1px solid ${darkColour[props.themeColour]}`, marginBottom: '10px' };
  return (
    <div style={props.sectionStyle} id="teaching">
      <Container>
        <Title title={'Teaching and Supervision'} selectColor={props.titleColour}/>
        <CardDeck key={0} style={deckStyle}>
            <Card style={cardStyle}>
                <Card.Body>
                    <h2>Teaching</h2>
                    <p>•	Problem classes for teaching Mathematics at University of East Anglia (UEA) to first year Biology students involving preparation of the material, in 2018.<br/>
                    •	Assisted in two-hour introductory python workshops for the Summer School at JIC (13/7/2018 and 12/7/2019).<br/>
                    •	One-hour lecture entitled “ODEs and experiments, bringing the two together” in the postgraduate “Systems biology Level 2” course at JIC (22/2/2017).<br/>
                    •	Repeat of the “ODEs and experiments, bringing the two together” lecture and organisation, as part of a team, of a follow-up at the “Epigenetics meets Mathematics” Summer School (2-8/7/2017).<br/>
                    •	During PhD studies at the University of Nottingham:<br/>
                    -	Demonstrated in Statistics problem classes.<br/>
                    -	Tutored in Mathematics for Biology classes.<br/>
                    -	Invigilated in lab-based and computer-based examinations.</p>
                </Card.Body>
            </Card>
            <Card style={cardStyle}>
                <Card.Body>
                    <h2>Co-supervised</h2>
                    <p>•	Amelie Heckmann (experimental) – Master’s student 2016 in the Dean lab.<br/>
                    •	Alex Coates (theoretical) – Undergraduate visitor 2016 <br/>
                    •	Bryony Yates (experimental) – Undergraduate, Summer school student 2018<br/>
                    •	Terri Holmes (experimental and theoretical) – Master’s, Summer project 2019<br/>
                    •	Judit Talas (experimental) – Master’s student 2019-2020<br/>
                    •	Svenja Reeck (experimental and theoretical) – PhD student - current</p>
                </Card.Body>
            </Card>
        </CardDeck>
      </Container>
    </div>
  );
}
        
Teaching.propTypes = {
  sectionStyle: PropTypes.object.isRequired,
};

export default Teaching;
