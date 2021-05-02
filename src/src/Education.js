import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import Title from './Title';
import EducationData from './data/EducationData';
import EducationCard from './EducationCard';

/**
 * Display the Education section.
 */
function Education(props) {
const educationData = new EducationData();
  const renderAll = () => {
    const keys = educationData.getKeys();
    const deckStyle = { marginBottom: '0em' };
  return (
    <CardDeck key={0} style={deckStyle}>
      {_.map(keys, (key, idx) => <EducationCard key={idx} entry={educationData.getEntry(key)}/>)}
    </CardDeck>
    );
  };

  return (
    <div style={props.sectionStyle} id="education">
      <Container>
        <Title title={'Education'} selectColor="darkYellow"/>
        {renderAll()}
      </Container>
    </div>
  );
}

Education.propTypes = {
  sectionStyle: PropTypes.object.isRequired,
};

export default Education;
