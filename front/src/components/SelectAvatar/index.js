import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Avatar from 'components/Avatar';

const SelectAvatar = ({ name, onAvatarChange }) => {
  const [selectedAvatar, setSelectedAvatar] = useState(0);

  useEffect(() => {
    onAvatarChange(selectedAvatar);
  }, [onAvatarChange, selectedAvatar]);

  const handleClickLeft = () => {
    setSelectedAvatar(selectedAvatar !== 0 ? selectedAvatar - 1 : 4);
  };

  const handleClickRight = () => {
    setSelectedAvatar(selectedAvatar !== 4 ? selectedAvatar + 1 : 0)
  };

  return (
    <div className="select-avatar-container">
      <div className="select-avatar-header mb-5">
        <h2>{name}</h2>
        <h4 className="subtitle">Nivel 1 - Aprendíz</h4>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <IconButton onClick={() => handleClickLeft()} aria-label="prev">
          <ChevronLeftIcon />
        </IconButton>
        <Avatar id={selectedAvatar} height={250} />
        <IconButton onClick={() => handleClickRight()} aria-label="next">
          <ChevronRightIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default SelectAvatar;
