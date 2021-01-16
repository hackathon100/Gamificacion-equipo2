import React from 'react';
import PropTypes from 'prop-types';

const LabelValue = ({ label, value, last, className }) => (
  <div
    className={`d-flex flex-row align-items-center justify-content-between ${
      last ? 'mb-0' : 'mb-3'
    } ${className}`}
  >
    <span className="subtitle">{label}</span>
    <span>
      <b>{value}</b>
    </span>
  </div>
);

LabelValue.propTypes = {
  label: PropTypes.node.isRequired,
  value: PropTypes.node.isRequired,
  last: PropTypes.bool,
  className: PropTypes.string,
};

LabelValue.defaultProps = {
  last: false,
  className: '',
};

export default LabelValue;
