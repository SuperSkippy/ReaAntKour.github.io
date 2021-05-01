import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Container from 'react-bootstrap/Container';
import Title from './Title';
import ConferenceData from './data/ConferenceData';
import SectionToggle from './SectionToggle';
import ConferenceCard from './ConferenceCard';
import ConferenceForm from './ConferenceForm';

/**
 * Display the Conferences section.
 * When toggling to 'All', display a form rather than immediately displaying all of the Conferences.
 */
function Conferences(props) {
  const [display, setDisplay] = useState('selected');
  const conferenceData = new ConferenceData();

  const onClickSectionButton = (pushedButton) => {
    if (pushedButton === 'selected') {
      setDisplay('selected');
    } else
      if (pushedButton === 'all') {
        setDisplay('all');
      }
  };

  const renderSelected = () => {
    const keys = conferenceData.getSelectedKeys();
    return (
      <div>
        {_.map(keys, (key, idx) => <ConferenceCard key={idx} entry={conferenceData.getEntry(key)}/>)}
      </div>
    );
  };

  const renderAll = () => {
    const keys = conferenceData.getKeys();
    return (
      <div>
        {_.map(keys, (key, idx) => <ConferenceCard key={idx} entry={conferenceData.getEntry(key)}/>)}
      </div>
    );
  };

  return (
    <div style={props.sectionStyle} id="conferences">
      <Container>
        <Title title={'Conferences and Seminars'} selectColor="darkYellow"/>
        <SectionToggle onClick={onClickSectionButton} total={conferenceData.total()} selectColor="darkYellow"/>
        {display === 'selected' ? renderSelected() : <ConferenceForm/>}
      </Container>
    </div>
  );
}

Conferences.propTypes = {
  sectionStyle: PropTypes.object.isRequired,
};

export default Conferences;
