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
const formatProject = entry => `${entry.contributors.join(', ')},  **${entry.title}**. ${entry.year}  ${(entry.note) ? `, ([pdf](${entry.note}))` : ''}`;

/* Make it easy to get the format function from the document type. */
const formatMap = {
  postdoc: formatProject,
};

/**
 * Display a WorkExperience, formatting appropriately for its type.
 * Clicking or tapping it will display its abstract.
 */
function WorkExperienceCard(props) {
  const cardStyle = { backgroundColor: `${ColorCode.vlightBlue}`, border: `1px solid ${ColorCode.darkBlue}`, marginBottom: '10px' };
  return (
    <Accordion>
      <Card style={cardStyle}>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          <Markdown>
            {`${props.entry.title}`}
          </Markdown>
          More ˅
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
            <Card.Body>
                <p>Collaborators: {`${props.entry.contributors.join(', ')}`}</p>
                <p>{`${props.entry.abstract}`}</p>
            </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
//{`${props.entry.contributors.join(', ')} \n ${props.entry.abstract}`}
//<p style={{ textAlign: 'center' }}> More <span class="glyphicon glyphicon-chevron-down"></span></p>

WorkExperienceCard.propTypes = {
  entry: PropTypes.object.isRequired,
};

export default WorkExperienceCard;
