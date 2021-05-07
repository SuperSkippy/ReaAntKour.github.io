import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Container from 'react-bootstrap/Container';
import Title from './Title';
import { ColorCode } from './Constants';
import { isPropertySignature } from 'typescript';

/**
 * Display the Research Interests section.
 */
function ResearchInterests(props) {
  return (
    <div style={props.sectionStyle} id="researchInterests">
      <Container>
        <Title title={'Research Interests'} selectColor={props.titleColour}/>
        <p>My research focuses on plants’ response to temperature. I am particularly interested in how plants react to cold temperatures, how they recognise the seasons and how this will be affected by climate change.<br/>
        <br/>
        I combine mathematical modelling and biological experiments to understand the molecular changes that happen in plants in response to temperature, and predict these in future climates. My research has shown that plants sense temperature through daily extremes, rather than just the average. Temperature fluctuations are likely to increase with climate change and so I am working with climate modellers to produce projected temperature profiles that are relevant to the plants.</p>
      </Container>
    </div>
  );
}
        
ResearchInterests.propTypes = {
  sectionStyle: PropTypes.object.isRequired,
};

export default ResearchInterests;
