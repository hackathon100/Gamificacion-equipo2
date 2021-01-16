import React from 'react';
import PropTypes from 'prop-types';

const Step = ({ title, text, choices, image }) => {
  return (
    <div className="onboarding-step-container d-flex align-items-center">
      <div className="d-flex flex-column">
        <div className="step-title mb-4">
          <h1>{title}</h1>
        </div>
        <div className="step-text">
          <p>
            {text}
          </p>
        </div>
        <div className="d-flex flex-column">
          {choices}
        </div>
      </div>
      <div className="step-image">
        {image}
      </div>
    </div>
  );
};

export default Step;
