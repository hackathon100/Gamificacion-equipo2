import React from 'react';
import PropTypes from 'prop-types';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import IconButton from '@material-ui/core/IconButton';

const NavigationSection = ({ onBack, onForward }) => (
  <div className="navigation-section">
    <IconButton aria-label="back" onClick={() => onBack()}>
      <BiChevronLeft />
    </IconButton>
    <IconButton aria-label="forward" onClick={() => onForward()}>
      <BiChevronRight />
    </IconButton>
  </div>
);

NavigationSection.propTypes = {
  onBack: PropTypes.func.isRequired,
  onForward: PropTypes.func.isRequired,
};

export default NavigationSection;
