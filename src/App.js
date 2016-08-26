import React from 'react';
import LeafletComponent from './Leaflet';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <LeafletComponent id="map"></LeafletComponent>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
