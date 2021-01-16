import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SelectAvatar from 'components/SelectAvatar';

const Step = ({ title, text, dialog, choices, image, name, index, lastStep, setCurrentStep, onSendInput, onEnd }) => {
  const [inputValue, setInputValue] = useState(name);
  return (
    <div className="onboarding-step-container d-flex align-items-center">
      {lastStep ? (
        <div className="mr-4">
          <SelectAvatar name={name} />
        </div>
      ) : null}
      <div className="d-flex flex-column">
        {title ? (
          <div className="step-title mb-4">
            <h1>{title}</h1>
          </div>
        ) : null}
        {text ? (
          <div className="step-text">
            <p>
              {text.replaceAll('{name}', name)}
            </p>
          </div>
        ) : null}
        {dialog ? (
          <div className="step-dialog">
            <h3>
              {dialog.replaceAll('{name}', name)}
            </h3>
          </div>
        ) : null}
        {choices ? (
          <div className="mt-3 step-choices d-flex flex-column">
            {_.map(choices, (choice) => {
              if (choice.input) {
                return (
                  <>
                    <TextField id="name" label="Mi nombre es..." onChange={(event) => setInputValue(event.target.value)} value={inputValue} />
                    <Button
                      className="mt-2"
                      variant="contained"
                      color="primary"
                      disabled={!inputValue}
                      onClick={() => {
                        setCurrentStep(choice.next ? choice.next : index + 1);
                        onSendInput(inputValue);
                      }}
                    >
                      Responder
                    </Button>
                  </>
                )
              }
              return (
                <Button
                  className="mt-2"
                  onClick={() => {
                    if (lastStep) {
                      onEnd();
                    } else {
                      setCurrentStep(choice.next ? choice.next : index + 1);
                    }
                  }}
                  variant="contained"
                  color="primary"
                >
                  {choice.text}
                </Button>
              )
            })}
          </div>
        ) : null}
      </div>
      <div className="step-image">
        {image}
      </div>
    </div>
  );
};

export default Step;
