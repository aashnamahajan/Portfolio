import React from "react";
import Routes from "./Routes";
import theme from '../Assets/themes'
import { MuiThemeProvider } from "@material-ui/core";


function App() {
  return (
    <div className="container">
      <MuiThemeProvider theme={theme}>
        <Routes/>
      </MuiThemeProvider>
            
    </div>
  );
}

export default App;
