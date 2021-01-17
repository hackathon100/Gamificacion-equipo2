import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import IntlMessages from 'util/IntlMessages';
import { userSignOut } from 'features/Auth';
import { getAuthUser } from 'features/selectors';
import Avatar from 'components/Avatar';

const UserInfo = ({ user, userSignOut }) => {
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
      <div className="user-info-header mb-5">
        {user.name ? <h4>{user.name}</h4> : <div className="title-placeholder" />}
        {user.level && user.grade ? (
          <span className="subtitle">{`Nivel ${user.level} - ${user.grade}`}</span>
        ) : (
          <div className="subtitle-placeholder" />
        )}
      </div>
      <Avatar id={user.avatar} height={140} />
    </div>
  );
};

UserInfo.propTypes = {
  userSignOut: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: getAuthUser(state),
});

export default connect(mapStateToProps, { userSignOut })(UserInfo);
