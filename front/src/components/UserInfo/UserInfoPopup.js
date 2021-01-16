import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userSignOut } from 'features/Auth';
import IntlMessages from 'util/IntlMessages';

const UserInfoPopup = ({ userSignOut }) => (
  <div>
    <div className="user-profile">
      <img
        className="user-avatar border-0 size-40 rounded-circle"
        src="https://via.placeholder.com/150x150"
        alt="User"
      />
      <div className="user-detail ml-2">
        <h4 className="user-name mb-0">Chris Harris</h4>
        <small>Administrator</small>
      </div>
    </div>
    <span className="jr-link dropdown-item text-muted">
      <i className="zmdi zmdi-face zmdi-hc-fw mr-1" />
      <IntlMessages id="popup.profile" />
    </span>
    <span className="jr-link dropdown-item text-muted">
      <i className="zmdi zmdi-settings zmdi-hc-fw mr-1" />
      <IntlMessages id="popup.setting" />
    </span>
    <span
      className="jr-link dropdown-item text-muted"
      role="button"
      tabIndex={0}
      onClick={() => {
        userSignOut();
      }}
    >
      <i className="zmdi zmdi-sign-in zmdi-hc-fw mr-1" />
      <IntlMessages id="popup.logout" />
    </span>
  </div>
);

UserInfoPopup.propTypes = {
  userSignOut: PropTypes.func.isRequired,
};

export default connect(null, { userSignOut })(UserInfoPopup);
