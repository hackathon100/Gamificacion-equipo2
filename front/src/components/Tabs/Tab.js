import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ selected, options, index, onClick, children }) => {
  const selectedClass = selected ? 'is-selected' : '';
  const disabledClass = options && options.disabled ? 'disabled' : '';

  return (
    <div
      className={`tab d-flex flex-column ${selectedClass} ${disabledClass}`}
      tabIndex={index}
      onClick={onClick}
      role="button"
    >
      <div className="p-3">{children}</div>
    </div>
  );
};

Tab.propTypes = {
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

Tab.defaultProps = {
  selected: false,
  disabled: false,
  children: null,
  onClick: () => {},
};

export default Tab;
