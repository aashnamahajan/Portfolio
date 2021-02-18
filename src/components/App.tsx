import { MuiThemeProvider } from "@material-ui/core";
import React from "react";
import Routes from "./Routes";
import theme from '../Assets/themes'


function App() {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Routes/>
      </MuiThemeProvider>
            
    </div>
  );
}

export default App;
