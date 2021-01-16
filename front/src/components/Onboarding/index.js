import React, { useState } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { ReactComponent as MagicWorldSVG } from 'assets/images/magic-world.svg';
import { ReactComponent as Wizard1SVG } from 'assets/images/wizard-1.svg';
import { ReactComponent as Wizard2SVG } from 'assets/images/wizard-2.svg';
import { ReactComponent as Wizard3SVG } from 'assets/images/wizard-3.svg';
import { ReactComponent as Wizard4SVG } from 'assets/images/wizard-4.svg';
import { ReactComponent as GlobalWarmingSVG } from 'assets/images/global-warming.svg';
import { ReactComponent as TwoWorldsSVG } from 'assets/images/two-worlds.svg';
import Step from './Step';
import stepsData from './stepsData.json';

const images = [
  <MagicWorldSVG height={300} />,
  <Wizard1SVG height={300} />,
  <Wizard2SVG height={300} />,
  <Wizard2SVG height={300} />,
  <Wizard2SVG height={300} />,
  <GlobalWarmingSVG height={300} />,
  <Wizard1SVG height={300} />,
  <TwoWorldsSVG height={300} />,
  <Wizard3SVG height={300} />,
  <Wizard4SVG height={300} />,
];

const Onboarding = (props) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [name, setName] = useState(undefined);

  const steps = _.map(stepsData.steps, (step, index) => {
    return <Step title={step.title} text={step.text} dialog={step.dialog} choices={step.choices} name={name} image={images[index]} index={index} onSendInput={setName} setCurrentStep={setCurrentStep} />;
  });

  return (
    <div className="onboarding-container">
      {steps[currentStep]}
    </div>
  );
};

export default Onboarding;
