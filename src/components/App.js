import React, { Component } from 'react';
/** routing */
import { Route } from 'react-router-dom';
import HomeComponent from './home/home-component';
import AboutComponent from './about/about-component';
import NavbarComponent from './navbar/navbar-component';
import ExampleComponent from './example/example-component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Electron + React + Webpack + Router</h1>
        <NavbarComponent/>
        <Route exact={true} path="/home" component={HomeComponent} />
        <Route exact={true} path="/about" component={AboutComponent} />
        <Route exact={true} path="/example" component={ExampleComponent} />
      </div>
    );
  }
}

export default App;