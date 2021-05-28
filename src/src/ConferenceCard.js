import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
import { ColorCode } from './Constants';

/*
 * The following functions take an entry object and format it for a particular type of publication.
 * If your bibtex file has other types (booklet, manual, etc) then you'll have to add it here.
 */
const formatConference = entry => `${(entry.title) ? `**${entry.title}** (${entry.year})` : ''} ${entry.location}${(entry.dates) ? `, ${entry.dates}` : ''}`;

/* Make it easy to get the format function from the document type. */
const formatMap = {
  Upcoming: formatConference,
  Invited: formatConference,
  Oral: formatConference,
  Poster: formatConference,
  Participation: formatConference,
};
  
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
 * Display a Conference, formatting appropriately for its type.
 * Clicking or tapping it will display its abstract.
 */
function ConferenceCard(props) {
  const cardStyle = { backgroundColor: `${lightColour[props.selectColor]}`, border: `1px solid ${darkColour[props.selectColor]}`, marginBottom: '10px' };
  return (
    <Card style={cardStyle}>
      <Card.Body>
        <Markdown>
            {formatMap[props.entry.type](props.entry)}
        </Markdown>
      </Card.Body>
    </Card>
  );
}
//<p style={{ textAlign: 'center' }}> Abstract <span class="glyphicon glyphicon-chevron-down"></span></p>

ConferenceCard.propTypes = {
  entry: PropTypes.object.isRequired,
};

export default ConferenceCard;
