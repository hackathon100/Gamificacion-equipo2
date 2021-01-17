import React, { useState } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import { onboardingIsEnded } from 'features/selectors';
import { loadUser } from 'features/Auth';
import { endOnboarding } from 'features/Common';
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
  <Wizard2SVG height={300} />,
  <GlobalWarmingSVG height={300} />,
  <Wizard1SVG height={300} />,
  <TwoWorldsSVG height={300} />,
  <Wizard3SVG height={300} />,
  <Wizard3SVG height={300} />,
  <Wizard4SVG height={300} />,
];

const OnboardingContainer = ({ onboardingEnded, endOnboarding, loadUser }) => {
  const [currentStep, setCurrentStep] = useState(11);
  const [name, setName] = useState('Bastián');
  const [avatar, setAvatar] = useState(undefined);

  const handleEnd = () => {
    loadUser({
      username: 'test',
      name,
      avatar,
      level: 1,
      grade: 'Aprendíz',
    });
    endOnboarding();
  };

  const steps = _.map(stepsData.steps, (step, index) => {
    return <Step title={step.title} text={step.text} dialog={step.dialog} choices={step.choices} name={name} image={images[index]} index={index} onSendInput={setName} setCurrentStep={setCurrentStep} lastStep={index === stepsData.steps.length - 1} onAvatarChange={setAvatar} onEnd={handleEnd} />;
  });

  return (
    <Dialog open={!onboardingEnded} maxWidth={false}>
      <div className="onboarding-container">
        {steps[currentStep]}
      </div>
    </Dialog>
  );
};

OnboardingContainer.propTypes = {};

OnboardingContainer.defaultProps = {};

const mapStateToProps = (state) => ({
  onboardingEnded: onboardingIsEnded(state),
});

const mapDispatchToProps = (dispatch) => ({
  endOnboarding: () => dispatch(endOnboarding()),
  loadUser: (user) => dispatch(loadUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingContainer);
