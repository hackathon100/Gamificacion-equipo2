import React from 'react';
import PropTypes from 'prop-types';
import { BiX } from 'react-icons/bi';

const RightPanel = ({ content, open, onClose }) => {
  return (
    <div className={`right-panel-wrapper container p-4 ${open ? 'open' : 'close'}`}>
      <div className="close-panel-button" onClick={onClose}>
        <BiX />
      </div>
      {content}
    </div>
  );
};

RightPanel.propTypes = {
  content: PropTypes.node,
  open: PropTypes.bool.isRequired,
};

RightPanel.defaultProps = {
  content: null,
};

export default RightPanel;
