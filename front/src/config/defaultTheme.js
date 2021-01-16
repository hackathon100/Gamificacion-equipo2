import 'styles/app.scss';

// ------------------ From styles/global/_variables.scss ---------------
const grayDarkest = '#19191c';
// const primaryDarkest = '#1a264a';
// const primaryDarker = '#26396f';
const primaryDark = '#334c94';
const primary = '#405fb9';
const primaryLight = '#667fc7';
// const primaryLighter = '#8c9fd5';
// const primaryLightest = '#eceff8';
// const secondaryDarkest = '#16454d';
// const secondaryDarker = '#226873';
const secondaryDark = '#2d8a9a';
const secondary = '#38adc0';
const secondaryLight = '#60bdcd';
// const secondaryLighter = '#88ced9';
// const secondaryLightest = '#afdee6';
const borderColor = '#ECECEC';
const white = '#FFFFFF';
// const black = '#333333';

// ------------------------------------ Buttons --------------------------------
export default {
  props: {
    MuiButton: {
      disableElevation: true,
    },
  },
  typography: {
    fontFamily: '"Varela Round", sans-serif',
    fontSize: 14,
  },
  overrides: {
    MuiTablePagination: {
      root: {
        border: 'none',
      },
    },
    MuiCard: {
      root: {
        backgroundColor: grayDarkest,
        position: 'relative',
      },
    },
    MuiMenu: {
      paper: {
        maxHeight: '300px',
      },
    },
    MuiMenuItem: {
      root: {
        fontSize: '12px',
      },
    },
    MuiInputBase: {
      root: {
        paddingRight: '0px !important',
      },
      input: {
        fontSize: '12px',
        padding: '9px',
      },
    },
    MuiInputAdornment: {
      root: {
        '& button': {
          width: '18px',
          height: '18px',
          '& span svg': {
            width: '18px',
            height: '18px',
          },
        },
      },
    },
    MuiSelect: {
      root: {
        // backgroundColor: '#8d8d8d',
        fontSize: '12px',
      },
      outlined: {
        padding: '8px 16px',
      },
    },
    MuiAutocomplete: {
      root: {
        // backgroundColor: '#8d8d8d',
        fontSize: '12px',
      },
      input: {
        padding: '0px 32px 0px 4px !important',
      },
      option: {
        fontSize: '12px',
      },
    },
    MuiInputLabel: {
      root: {
        fontSize: '14px',
      },
    },
    MuiButton: {
      root: {
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        textTransform: 'none',
      },
      contained: {
        backgroundColor: white,
        '&:hover': {
          backgroundColor: borderColor,
        },
      },
    },
  },
  palette: {
    type: 'dark',
    primary: {
      light: primaryLight,
      main: primary,
      dark: primaryDark,
      contrastText: white,
    },
    secondary: {
      light: secondaryLight,
      main: secondary,
      dark: secondaryDark,
      contrastText: white,
    },
  },
  status: {
    danger: 'orange',
  },
};
