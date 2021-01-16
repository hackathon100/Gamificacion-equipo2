import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { ReactComponent as ShapesSVG } from 'assets/images/sidebar-shapes.svg';
import UserInfo from 'components/UserInfo';
import { updateWindowWidth } from 'features/Settings';
import { userSignOut } from 'features/Auth';
import SidenavContent from './SidenavContent';

const SideNavContainer = ({ userSignOut, updateWindowWidth }) => {
  useEffect(() => {
    window.addEventListener('resize', () => {
      updateWindowWidth(window.innerWidth);
    });
  }, [updateWindowWidth]);

  return (
    <div className="app-sidebar">
      <div className="side-nav">
        <div className="logo">
          <Link className="app-logo" to="/">
            {/* <img
              className="logo-img"
              src={require('assets/images/logo.png')}
              alt="logo"
              title="logo"
            /> */}
          </Link>
        </div>
        <SidenavContent />
        <div className="logout">
          <UserInfo />
        </div>
        <ShapesSVG />
      </div>
    </div>
  );
};

SideNavContainer.propTypes = {
  updateWindowWidth: PropTypes.func.isRequired,
};

export default withRouter(connect(null, { updateWindowWidth, userSignOut })(SideNavContainer));
