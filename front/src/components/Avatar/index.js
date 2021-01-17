import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as SiluetSVG } from 'assets/images/siluet.svg';
import { ReactComponent as Pj1SVG } from 'assets/images/pj-1.svg';
import { ReactComponent as Pj2SVG } from 'assets/images/pj-2.svg';
import { ReactComponent as Pj3SVG } from 'assets/images/pj-3.svg';
import { ReactComponent as Pj4SVG } from 'assets/images/pj-4.svg';
import { ReactComponent as Pj5SVG } from 'assets/images/pj-5.svg';

const Avatar = ({ id, height }) => {
  const avatars = [
    <Pj1SVG height={height} />,
    <Pj2SVG height={height} />,
    <Pj3SVG height={height} />,
    <Pj4SVG height={height} />,
    <Pj5SVG height={height} />,
  ];

  return (
    <div className="d-flex align-items-center justify-content-center">
      {id !== undefined ? (
        avatars[id]
      ) : <SiluetSVG height={height} />}
    </div>
  );
};

export default Avatar;
