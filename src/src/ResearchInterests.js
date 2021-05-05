import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Container from 'react-bootstrap/Container';
import Title from './Title';
import { ColorCode } from './Constants';

/**
 * Display the Research Interests section.
 */
function ResearchInterests(props) {
  return (
    <div style={props.sectionStyle} id="researchInterests">
      <Container>
        <Title title={'Research Interests'} selectColor="darkBlue"/>
        <p>*WRITE MORE HERE*</p>
        <p>I work at the interface of plant science and mathematical modelling to understand how plants sense temperature to control their development.</p>
      </Container>
    </div>
  );
}
        
ResearchInterests.propTypes = {
  sectionStyle: PropTypes.object.isRequired,
};

export default ResearchInterests;
