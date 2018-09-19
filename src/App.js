import React, { Component } from 'react';
import SiderCustom from './components/Home/SiderCustom';
import HeaderCustom from './components/Home/HeaderCustom';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
          <HeaderCustom/>
          <SiderCustom />
      </div>
     
    );
  }
}


export default App;
