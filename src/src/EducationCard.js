import React from 'react';
//import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
import { ColorCode } from './Constants';

/*
 * The following functions take an entry object and format it for a particular type of publication.
 * If your bibtex file has other types (booklet, manual, etc) then you'll have to add it here.
 */

const formatTitlePHD = entry => `${entry.title}  
------`;

const formatTitleDegree = entry => `${entry.title}  
------`;

const formatTitle = {
  phd: formatTitlePHD,
  degree: formatTitleDegree
};

const formatPHD = entry => `**${entry.year}**  
    ${entry.location}`;
//Topic: ${entry.topic}`;

const formatDegree = entry => `**${entry.year}**  
    ${entry.location}`;

const formatPHDmore = entry => `${entry.result}  
${entry.vivaDate}  

Supervisors: ${entry.supervisors.join(', ')}`;

/*const formatPHDmore = entry => `**Title: ${entry.thesisTitle}**  
  
${entry.area}  
  
${entry.abstract}  
  
Supervisors: ${entry.supervisors.join(', ')}  
  
${entry.vivaDate}  
  
${entry.result}`;*/

const formatDegreeMore = entry => `${entry.result}  
  
${(entry.abstract) ? `${entry.abstract}` : ''}  
${(entry.supervisor) ? `Supervisor: ${entry.supervisor}` : ''}  
${(entry.awards) ? `${entry.awards.join(', ')}` : ''}`;

/* Make it easy to get the format function from the document type. */
const formatAboveMap = {
  phd: formatPHD,
  degree: formatDegree
};

/* Make it easy to get the format function from the document type. */
const formatBelowMap = {
    phd: formatPHDmore,
    degree: formatDegreeMore
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
 * Display a Education, formatting appropriately for its type.
 * Clicking or tapping it will display its abstract.
 */
function EducationCard(props) {
  const cardStyle = { backgroundColor: `${lightColour[props.selectColor]}`, border: `1px solid ${darkColour[props.selectColor]}`, marginBottom: '10px' };
  return (
      <Card style={cardStyle}>
        <Card.Body>
          <Markdown>
            {formatTitle[props.entry.type](props.entry)}
          </Markdown>
          <Markdown>
            {formatAboveMap[props.entry.type](props.entry)}
          </Markdown>
          <Markdown>
            {formatBelowMap[props.entry.type](props.entry)}
          </Markdown>
        </Card.Body>
        <a href={props.entry.link}> <img alt='Media' style={{ display: 'flex', flex: '1 1 auto', maxWidth: '100%', marginRight: '15px' }} className={'rounded float-left'} src={props.entry.logo}/> </a>
      </Card>
  );
}

/*function EducationCard(props) {
  const cardStyle = { backgroundColor: `${ColorCode.vlightYellow}`, border: `1px solid ${ColorCode.darkYellow}`, marginBottom: '10px' };
  return (
    <Accordion>
      <Card style={cardStyle}>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          <Markdown>
            {formatAboveMap[props.entry.type](props.entry)}
          </Markdown>
          More ˅
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
            <Card.Body>
                <Markdown>
                    {formatBelowMap[props.entry.type](props.entry)}
                </Markdown>
            </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}*/
//{`${props.entry.contributors.join(', ')} \n ${props.entry.abstract}`}
//<p style={{ textAlign: 'center' }}> More <span class="glyphicon glyphicon-chevron-down"></span></p>

EducationCard.propTypes = {
  entry: PropTypes.object.isRequired,
};

export default EducationCard;
