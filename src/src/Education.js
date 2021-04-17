import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Container from 'react-bootstrap/Container';
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
    return (
      <div>
        {_.map(keys, (key, idx) => <EducationCard key={idx} entry={educationData.getEntry(key)}/>)}
      </div>
    );
  };

  return (
    <div style={props.sectionStyle} id="papers">
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
