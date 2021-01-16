import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Pj1SVG } from 'assets/images/pj-1.svg';
import { ReactComponent as Pj2SVG } from 'assets/images/pj-2.svg';
import { ReactComponent as Pj3SVG } from 'assets/images/pj-3.svg';
import { ReactComponent as Pj4SVG } from 'assets/images/pj-4.svg';
import { ReactComponent as Pj5SVG } from 'assets/images/pj-5.svg';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const SelectAvatar = ({ name }) => {
  const [selectedPj, setSelectedPj] = useState(0);
  const pjs = [
    <Pj1SVG height={250} />,
    <Pj2SVG height={250} />,
    <Pj3SVG height={250} />,
    <Pj4SVG height={250} />,
    <Pj5SVG height={250} />,
  ];

  return (
    <div className="select-avatar-container">
      <div className="select-avatar-header mb-5">
        <h2>{name}</h2>
        <h4 className="subtitle">Nivel 1 - Aprendíz</h4>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <IconButton onClick={() => setSelectedPj(selectedPj !== 0 ? selectedPj - 1 : pjs.length - 1)} aria-label="prev">
          <ChevronLeftIcon />
        </IconButton>
        {pjs[selectedPj]}
        <IconButton onClick={() => setSelectedPj(selectedPj !== pjs.length - 1 ? selectedPj + 1 : 0)} aria-label="next">
          <ChevronRightIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default SelectAvatar;
