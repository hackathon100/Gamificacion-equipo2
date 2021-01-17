import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import IntlMessages from 'util/IntlMessages';
import { BiBell, BiSearch } from 'react-icons/bi';

const Header = ({ history }) => {
  const subPath = history.location.pathname.replace('/app/', '').replace('/', '.');
  return (
    <div className="header-container d-flex justify-content-start">
      <div className="d-flex flex-column align-items-start justify-content-center">
        <h1 className="header-title">
          <IntlMessages id={`pages.${subPath}`} />
        </h1>
        <span className="header-desc">
          <IntlMessages id={`pages.${subPath}.description`} />
        </span>
      </div>
      <div className="d-flex align-items-start">
        <div className="d-flex align-items-center">
          <IconButton className="mr-3" variant="outlined" size="medium" aria-label="notifications">
            <BiBell />
          </IconButton>
          <div className="d-flex align-items-center search">
            <BiSearch className="mr-2" />
            <span>Buscar en la página...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  history: PropTypes.shape({
    length: PropTypes.number.isRequired,
  }).isRequired,
};

export default Header;
