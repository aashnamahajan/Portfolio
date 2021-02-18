import {
  createMuiTheme,
} from "@material-ui/core/styles";
const theme = createMuiTheme({
    palette: {
        primary: {
          light: '#484848',
          main: '#212121',
          dark: '#000000',
          contrastText: '#fff',
        },
        secondary: {
          light: '#c9f38b',
          main: '#97c05c',
          dark: '#67902e',
          contrastText: '#fff',
        },
      },
  typography: {
    subtitle1:{
      fontFamily: "Comic Sans"
    },
    body1: {
      fontFamily: "Comic Sans",
    }
  },
  overrides:{
  }
});

export default theme;
