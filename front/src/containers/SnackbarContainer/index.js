import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import { showSnackbarMessage } from 'features/Common';
import { getSnackbarMessage } from 'features/selectors';

const SnackbarContainer = ({ snackbarMessage, showSnackbarMessage }) => (
  <Snackbar
    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    open={!!snackbarMessage}
    onClose={() => {
      showSnackbarMessage(null);
    }}
    autoHideDuration={5000}
    message={snackbarMessage}
  />
);

SnackbarContainer.propTypes = {
  snackbarMessage: PropTypes.node,
  showSnackbarMessage: PropTypes.func.isRequired,
};

SnackbarContainer.defaultProps = {
  snackbarMessage: null,
};

const mapStateToProps = (state) => ({
  snackbarMessage: getSnackbarMessage(state),
});

const mapDispatchToProps = (dispatch) => ({
  showSnackbarMessage: (message) => dispatch(showSnackbarMessage(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SnackbarContainer);
