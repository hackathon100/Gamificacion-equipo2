import _ from 'lodash';

export const getNewImmutableState = (state, entity, keyName, omitAllIds, override) => {
  const newState = _.cloneDeep(state);
  const keyToLoad = keyName || 'byId';
  if (override) newState[keyToLoad] = {};
  _.forIn(entity, (value, key) => {
    newState[keyToLoad][key] = value;
  });
  if (!omitAllIds) newState.allIds = _.map(_.keys(newState[keyToLoad]), (value) => value);
  return newState;
};
