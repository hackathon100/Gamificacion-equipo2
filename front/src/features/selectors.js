// import { createSelector } from 'reselect';

// Common
export const getSnackbarMessage = (state) => state.common.snackbarMessage;
export const getRightPanelContent = (state) => state.common.rightPanelContent;
export const rightPanelIsOpen = (state) => state.common.rightPanelIsOpen;
export const dialogIsOpen = (state) => state.common.dialogIsOpen;
export const getDialogContent = (state) => state.common.dialogContent;

// Settings
export const getWidth = (state) => state.settings.width;
export const getPath = (state) => state.settings.path;

// Auth
export const getAuthUser = (state) => state.auth.authUser;
export const getInitUrl = (state) => state.auth.initURL;
export const getToken = (state) => state.auth.token;
export const isLogging = (state) => state.auth.logging;
export const isFetchingUser = (state) => state.auth.fetching;
export const resetRequestSent = (state) => state.auth.resetRequestSent;
export const tokenIsValid = (state) => state.auth.tokenIsValid;
export const passwordConfirmed = (state) => state.auth.passwordConfirmed;
