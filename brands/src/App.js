import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

//pages
import signup from "./pages/signup";
import login from './pages/login';
import Hmrs from './pages/home';
import searchNav from './component/searchNav'
import SearchResultPage from './pages/searchResultPage';
import block from './component/block';
import footer from './component/footer';
import RgsCom  from './pages/RgsCom';
import adv  from './component/adv';
import BlockBox from './component/BlockBox'

const theme = createMuiTheme({
  palette: {
    primary:{
      main: '#575fcf',
      light: '#9497E0',
      dark: '#676DB1'
    },
    secondary:{
      main: '#707070',
      light:'#fff'

    }
  } 
})

class App extends Component {
  render() {
    return(
      <MuiThemeProvider theme={theme}>
        
    <div className="App">
      <Router>
         <div className="container">
         <switch>
          <Route exact path="/" component={Hmrs} />
          <Route exact path="/signup" component={signup} />
          <Route exact path="/login" component={login} />
          <Route exact path="/searchResultPage" component={SearchResultPage} />
          <Route exact path="/searchNav" component={searchNav} />
          <Route exact path="/block" component={block} />
          <Route exact path="/footer" component={footer} />
          <Route exact path="/RgsCom" component={RgsCom} />
          <Route exact path="/adv" component={adv} />
          <Route exact path="/BlockBox" component={BlockBox} />
          
         

        </switch>
         </div>
      </Router>
    </div>
    </MuiThemeProvider>
  );
}
};
export default App;
