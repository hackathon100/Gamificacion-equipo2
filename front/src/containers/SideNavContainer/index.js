import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import UserInfo from 'components/UserInfo';
import { updateWindowWidth } from 'features/Settings';
import { userSignOut } from 'features/Auth';
import SnowCornerL from 'assets/images/snow-corner-l.png';
import SnowCornerR from 'assets/images/snow-corner-r.png'
import SnowBottom from 'assets/images/snow-bottom.png';
import SnowRightBottom from 'assets/images/snow-right-bottom.png';
import SnowTop from 'assets/images/snow-top.png';
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
        <div className="app-decoration">
          <img className="snow-corner-r" src={SnowCornerR} alt="snow-corner-r" />
          <img className="snow-right-bottom" src={SnowRightBottom} alt="snow-right-bottom" />
        </div>
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
        <UserInfo />
        <div className="mt-4">
          <SidenavContent />
        </div>
      </div>
    </div>
  );
};

SideNavContainer.propTypes = {
  updateWindowWidth: PropTypes.func.isRequired,
};

export default withRouter(connect(null, { updateWindowWidth, userSignOut })(SideNavContainer));
