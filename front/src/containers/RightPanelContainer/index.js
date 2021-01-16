import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRightPanelContent, rightPanelIsOpen } from 'features/selectors';
import { closeRightPanel } from 'features/Common';
import RightPanel from 'components/RightPanel';

const RightPanelContainer = ({ content, rightPanelIsOpen, closeRightPanel }) => (
  <RightPanel content={content} open={rightPanelIsOpen} onClose={closeRightPanel} />
);

RightPanelContainer.propTypes = {
  content: PropTypes.node,
  rightPanelIsOpen: PropTypes.bool.isRequired,
  closeRightPanel: PropTypes.func.isRequired,
};

RightPanelContainer.defaultProps = {
  content: null,
};

const mapStateToProps = (state) => ({
  content: getRightPanelContent(state),
  rightPanelIsOpen: rightPanelIsOpen(state),
});

const mapDispatchToProps = (dispatch) => ({
  closeRightPanel: () => dispatch(closeRightPanel()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RightPanelContainer);
