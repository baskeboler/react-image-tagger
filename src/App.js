import React from 'react';
import LeafletComponentContainer from './containers/LeafletComponentContainer';
import RegionListContainer from './containers/RegionListContainer';
import ImageFormContainer from './containers/ImageFormContainer';
// import './App.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import imageTaggerApp from './reducers';
import {setImage} from './actions';
import {Card, Row, Col, Container} from 'elemental'
let store = createStore(imageTaggerApp);

store.dispatch(setImage('http://www.planwallpaper.com/static/images/i-should-buy-a-boat.jpg'));

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <Container>
          <h1>
            React image tagger
          </h1>
          <Row>
            <Col sm="1/3">
              <ImageFormContainer />
              <RegionListContainer />
            </Col>
            <Col sm="2/3">
              <Card>
                <LeafletComponentContainer
                  id="map">
                </LeafletComponentContainer>
              </Card>
            </Col>
          </Row>
          <Card>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </Card>
        </Container>
      </Provider>
    );
  }
}

export default App;
