import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { BiExit } from 'react-icons/bi';
import IntlMessages from 'util/IntlMessages';
import { userSignOut } from 'features/Auth';

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
    <div className="user-info-container d-flex flex-column align-items-center justify-content-center">
      <div
        role="button"
        tabIndex={0}
        className="d-flex align-items-center user-detail"
        onClick={handleClick}
      >
        <div className="avatar-background mr-2">
          <Avatar alt="..." src="https://via.placeholder.com/150x150" className="user-avatar " />
        </div>
        <div className="d-flex flex-column">
          <span className="user-name mb-1">{`${firstName || 'User'} ${lastName || 'Info'}`}</span>
          <span className="user-email subtitle">{email || 'email@example.com'}</span>
        </div>
      </div>
      <Menu
        className="user-info"
        id="simple-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleRequestClose}
        PaperProps={{
          style: {
            minWidth: 120,
            paddingTop: 0,
            paddingBottom: 0,
          },
        }}
      >
        <MenuItem
          onClick={() => {
            handleRequestClose();
            userSignOut();
          }}
        >
          <BiExit className="mr-2" />
          <IntlMessages id="popup.logout" />
        </MenuItem>
      </Menu>
    </div>
  );
};

UserInfo.propTypes = {
  userSignOut: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { userSignOut })(UserInfo);
