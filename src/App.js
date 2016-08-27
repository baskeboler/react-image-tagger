import React from 'react';
import LeafletComponentContainer from './containers/LeafletComponentContainer';
import RegionListContainer from './containers/RegionListContainer';
import ImageFormContainer from './containers/ImageFormContainer';
// import './App.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import imageTaggerApp from './reducers';
import {setImage} from './actions';
let store = createStore(imageTaggerApp);

store.dispatch(setImage('http://www.planwallpaper.com/static/images/i-should-buy-a-boat.jpg'));

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <LeafletComponentContainer
            id="map">

          </LeafletComponentContainer>
          <RegionListContainer />
          <ImageFormContainer />
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Provider>
    );
  }
}

export default App;
