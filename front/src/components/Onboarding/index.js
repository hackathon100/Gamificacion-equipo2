import React, { useState } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import Step from './Step';
import stepsData from './stepsData.json';
import { ReactComponent as MagicWorldSVG } from 'assets/images/magic-world.svg';

const images = {
  step1: <MagicWorldSVG height={300} />,
};

const Onboarding = (props) => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = _.map(stepsData, (step, key) => {
    return <Step title={step.title} text={step.text} choices={step.choices} image={images[key]} />;
  });
  return (
    <div className="onboarding-container">
      {steps[currentStep]}
    </div>
  );
};

export default Onboarding;
