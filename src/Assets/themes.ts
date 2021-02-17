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
          light: '#5472d3',
          main: '#0d47a1',
          dark: '#002171',
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
