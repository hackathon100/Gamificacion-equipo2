import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { BiExit } from 'react-icons/bi';
import IntlMessages from 'util/IntlMessages';
import { userSignOut } from 'features/Auth';
import { ReactComponent as Pj1SVG } from 'assets/images/pj-1.svg';

const UserInfo = ({ userSignOut }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [firstName] = useState(localStorage.getItem('first_name'));
  const [lastName] = useState(localStorage.getItem('last_name'));
  const [email] = useState(localStorage.getItem('email'));

  const handleClick = (event) => {
    setOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleRequestClose = () => {
    setOpen(false);
  };

  return (
    <div className="user-info-container">
      <div className="user-info-header">
        <h3>Bastián</h3>
        <h4>Nivel 1 - Aprendíz</h4>
      </div>
      <div>
        <Pj1SVG />
      </div>
    </div>
  );
};

UserInfo.propTypes = {
  userSignOut: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { userSignOut })(UserInfo);
