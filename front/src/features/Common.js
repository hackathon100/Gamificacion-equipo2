// ----------------------------------- Actions ---------------------------------
// Action Types
const SHOW_SNACKBAR_MESSAGE = 'common/show_snackbar_message';
const OPEN_DIALOG = 'common/open_dialog';
const CLOSE_DIALOG = 'common/close_dialog';
const SET_RIGHT_PANEL_CONTENT = 'common/set_right_panel_content';
const OPEN_RIGHT_PANEL = 'common/open_right_panel';
const CLOSE_RIGHT_PANEL = 'common/close_right_panel';

// Action Creators
export const setRightPanelContent = (content) => ({
  type: SET_RIGHT_PANEL_CONTENT,
  payload: content,
});
export const openRightPanel = () => ({ type: OPEN_RIGHT_PANEL });
export const closeRightPanel = () => ({ type: CLOSE_RIGHT_PANEL });
export const showSnackbarMessage = (message) => ({ type: SHOW_SNACKBAR_MESSAGE, payload: message });
export const openDialog = (content) => ({ type: OPEN_DIALOG, payload: content });
export const closeDialog = () => ({ type: CLOSE_DIALOG });

// Init State
const INIT_STATE = {
  rightPanelIsOpen: false,
  rightPanelContent: null,
  snackbarMessage: '',
  dialogIsOpen: false,
  dialogContent: null,
};

// ----------------------------------- Reducer ---------------------------------
// Reducer
export default (state = INIT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case OPEN_RIGHT_PANEL: {
      return {
        ...state,
        rightPanelIsOpen: true,
      };
    }
    case CLOSE_RIGHT_PANEL: {
      return {
        ...state,
        rightPanelIsOpen: false,
      };
    }
    case SET_RIGHT_PANEL_CONTENT: {
      return {
        ...state,
        rightPanelContent: payload,
      };
    }
    case SHOW_SNACKBAR_MESSAGE: {
      return {
        ...state,
        snackbarMessage: payload,
      };
    }
    case OPEN_DIALOG: {
      return {
        ...state,
        dialogIsOpen: true,
        dialogContent: payload,
      };
    }
    case CLOSE_DIALOG: {
      return {
        ...state,
        dialogIsOpen: false,
      };
    }
    default:
      return state;
  }
};
