import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import { closeDialog } from 'features/Common';
import { dialogIsOpen, getDialogContent } from 'features/selectors';

const DialogContainer = ({ closeDialog, open, dialogContent }) => (
  <Dialog onClose={closeDialog} open={open} maxWidth={false}>
    {dialogContent}
  </Dialog>
);

DialogContainer.propTypes = {
  closeDialog: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  dialogContent: PropTypes.node,
};

DialogContainer.defaultProps = {
  dialogContent: null,
};

const mapStateToProps = (state) => ({
  open: dialogIsOpen(state),
  dialogContent: getDialogContent(state),
});

const mapDispatchToProps = (dispatch) => ({
  closeDialog: () => dispatch(closeDialog()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DialogContainer);
