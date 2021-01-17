import React from 'react';
import PropTypes from 'prop-types';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { NavLink, withRouter } from 'react-router-dom';
import IntlMessages from 'util/IntlMessages';
import { ReactComponent as MissionsSVG } from 'assets/images/missions-icon.svg';
import { ReactComponent as AnalisisSVG } from 'assets/images/analisis.svg';
import { ReactComponent as MedallaSVG } from 'assets/images/medalla.svg';

const SidenavContent = ({ history }) => {
  return (
    <ul className="nav-menu">
      <li className="menu no-arrow">
        <NavLink className="d-flex align-items-center nav-text" to="/app/misiones">
          <MissionsSVG className="mr-2" />
          <IntlMessages id="pages.misiones" />
        </NavLink>
        <NavLink className="d-flex align-items-center nav-text" to="/app/logros">
          <MedallaSVG className="mr-2" />
          <IntlMessages id="pages.logros" />
        </NavLink>
        <NavLink className="d-flex align-items-center nav-text" to="/app/analisis">
          <AnalisisSVG className="mr-2" />
          <IntlMessages id="pages.analisis" />
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
