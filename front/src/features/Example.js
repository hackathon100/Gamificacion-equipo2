import http from 'config/Api';
import { normalize } from 'normalizr';
import Nprogress from 'nprogress';
import { measurerListSchema } from 'features/schemas';
import { getNewImmutableState } from 'util/getNewImmutableState';

// ----------------------------------- Actions ---------------------------------
// Action Types
const ADD_MEASURER = 'measurers/add_measurer';
const LOAD_MEASURERS = 'measurers/load_measurers';
const LOAD_MEASURERS_BY_ASSET_NAME = 'measurers/load_measurers_by_asset_name';

// Action Creators
export const addMeasurer = (measurer) => ({ type: ADD_MEASURER, payload: measurer });
export const loadMeasurers = (measurers) => ({ type: LOAD_MEASURERS, payload: measurers });
export const loadMeasurersByAssetName = (measurers, assetName) => ({
  type: LOAD_MEASURERS_BY_ASSET_NAME,
  meta: { assetName },
  payload: measurers,
});

// Init State
const INIT_STATE = {
  byId: {},
  byAssetName: {},
  allIds: [],
};

// ----------------------------------- Reducer ---------------------------------
// Reducer
export default (state = INIT_STATE, action) => {
  const { type, meta, payload } = action;
  switch (type) {
    case ADD_MEASURER: {
      return { ...state, byId: { ...state.byId, [payload.id]: payload } };
    }
    case LOAD_MEASURERS: {
      return getNewImmutableState(state, payload);
    }
    case LOAD_MEASURERS_BY_ASSET_NAME: {
      return {
        ...state,
        byAssetName: {
          ...state.byAssetName,
          [meta.assetName]: {
            ...state.byAssetName[meta.assetName],
            ...payload,
          },
        },
      };
    }
    default: {
      return state;
    }
  }
};

export const fetchMeasurers = () => async (dispatch) => {
  const apiMeasurers = 'remarcacion/medidores?page_size=9999';
  Nprogress.start();
  return http
    .get(apiMeasurers)
    .then((response) => {
      const normalizedData = normalize(response.data.results, measurerListSchema);
      const { measurers } = normalizedData.entities;
      if (measurers) dispatch(loadMeasurers(measurers));
      Nprogress.done();
      return response.data.results;
    })
    .catch((error) => {
      Nprogress.done();
      console.log(error);
      return error;
    });
};

export const fetchMeasurersByAssetName = (assetName) => async (dispatch) => {
  const apiMeasurers = `remarcacion/medidores/${assetName}?page_size=9999`;
  Nprogress.start();
  return http
    .get(apiMeasurers)
    .then((response) => {
      const normalizedData = normalize(response.data.results, measurerListSchema);
      const { measurers } = normalizedData.entities;
      if (measurers) dispatch(loadMeasurersByAssetName(measurers, assetName));
      Nprogress.done();
      return response.data.results;
    })
    .catch((error) => {
      Nprogress.done();
      console.log(error);
      return error;
    });
};
