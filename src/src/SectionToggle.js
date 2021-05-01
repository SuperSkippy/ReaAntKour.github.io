import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';
import { ColorCode } from './Constants';

/**
 * Display the "toggle switch" that appears at the top of most sections.
 * Note that the parent component can optionally pass in the toggle state as a property.
 * This is needed by the Research and Papers components, not needed for Members or News.
 */
function SectionToggle(props) {
  const selectedLabel = props.selectedLabel || 'Selected';
  const buttonStyle = { borderColor: ColorCode[props.selectColor] };
  const selectedStyle = { ...buttonStyle, fontWeight: 'bold', backgroundColor: ColorCode[props.selectColor] };
  const deselectedStyle = {
    ...buttonStyle,
    fontWeight: 'normal',
    color: ColorCode[props.selectColor],
    backgroundColor: ColorCode.background,
  };
  const [recentStyle, setRecentStyle] =
    useState((props.toggleSetting === 'all') ? deselectedStyle : selectedStyle);
  const [allStyle, setAllStyle] =
    useState((props.toggleSetting === 'all') ? selectedStyle : deselectedStyle);

  const onClick = (buttonName) => {
    if (buttonName === 'selected') {
      setRecentStyle(selectedStyle);
      setAllStyle(deselectedStyle);
      props.onClick('selected');
    } else
      if (buttonName === 'all') {
        setRecentStyle(deselectedStyle);
        setAllStyle(selectedStyle);
        props.onClick('all');
      }
  };

  return (
    <Row style={{ marginBottom: '1em' }} className="justify-content-center">
      <ButtonGroup aria-label="Basic example">
        <Button onClick={() => onClick('selected')} style={recentStyle}>{selectedLabel}</Button>
        <Button onClick={() => onClick('all')} style={allStyle}>All ({props.total})</Button>
      </ButtonGroup>
    </Row>
  );
}

SectionToggle.propTypes = {
  onClick: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  selectedLabel: PropTypes.string,
  toggleSetting: PropTypes.string,
};

export default SectionToggle;
