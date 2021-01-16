// ----------------------------------- Actions ---------------------------------
// Action Types
const WINDOW_WIDTH = 'settings/window_width';

// Action Creators
export const updateWindowWidth = (width) => ({ type: WINDOW_WIDTH, payload: width });

// ----------------------------------- Reducer ---------------------------------
// Init State
const INIT_STATE = {
  path: '',
  width: window.innerWidth,
};

// Reducer
export default (state = INIT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case '@@router/LOCATION_CHANGE': {
      return { ...state, path: action.payload.location.pathname };
    }
    case WINDOW_WIDTH: {
      return { ...state, width: payload };
    }
    default: {
      return state;
    }
  }
};
