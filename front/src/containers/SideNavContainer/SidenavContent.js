import React from 'react';
import PropTypes from 'prop-types';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { NavLink, withRouter } from 'react-router-dom';
import IntlMessages from 'util/IntlMessages';

const SidenavContent = ({ history }) => {
  return (
    <ul className="nav-menu">
      <li className="menu no-arrow">
        <NavLink className="d-flex align-items-center nav-text" to="/app/misiones">
          <BsFillHouseDoorFill className="mr-3" />
          <IntlMessages id="pages.misiones" />
        </NavLink>
      </li>
    </ul>
  );
};

SidenavContent.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.object,
  }).isRequired,
};

export default withRouter(SidenavContent);
