import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Container from 'react-bootstrap/Container';
import Title from './Title';
import TechReports from './TechReports';
import SectionToggle from './SectionToggle';
import PaperCard from './PaperCard';
//import PaperForm from './PaperForm';

/**
 * Display the Papers section.
 * When toggling to 'All', display all Papers.
 */
function Papers(props) {
  const [display, setDisplay] = useState('recent');
  const techreports = new TechReports();

  const onClickSectionButton = (pushedButton) => {
    if (pushedButton === 'recent') {
      setDisplay('recent');
    } else
      if (pushedButton === 'all') {
        setDisplay('all');
      }
  };

  const renderRecent = () => {
    const keys = techreports.getRecentKeys();
    return (
      <div>
        {_.map(keys, (key, idx) => <PaperCard key={idx} entry={techreports.getEntry(key)}/>)}
      </div>
    );
  };

  const renderAll = () => {
    const keys = techreports.getKeys();
    return (
      <div>
        {_.map(keys, (key, idx) => <PaperCard key={idx} entry={techreports.getEntry(key)}/>)}
      </div>
    );
  };

  return (
    <div style={props.sectionStyle} id="papers">
      <Container>
        <Title title={'Papers'} selectColor="lightBlue"/>
        <SectionToggle onClick={onClickSectionButton} total={techreports.total()}  selectColor="darkBlue"/>
        {display === 'recent' ? renderRecent() : renderAll()}
        <p>* joint first authors, †joint corresponding authors</p>
      </Container>
    </div>
  );
}

Papers.propTypes = {
  sectionStyle: PropTypes.object.isRequired,
};

export default Papers;
