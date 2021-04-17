import React from 'react';
import PropTypes from 'prop-types';
import { ColorCode } from './Constants';

/**
 * Return the title of a section, formatted in a standard way.
 * Used by News, Research, Papers, etc.
 */
function Title(props) {
  const titleStyle = { fontWeight: 900, textAlign: 'center', color: ColorCode[props.selectColor] };
  return (
    <div>
      <h1 style={titleStyle}>{props.title}</h1>
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
