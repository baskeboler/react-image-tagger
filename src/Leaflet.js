import React from 'react';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import L from 'leaflet';
import 'leaflet-draw';
import sampleImage from './assets/image.jpg';

class LeafletComponent extends React.Component {
  componentDidMount() {
    var map = this.map = L.map(this.props.id, {
      crs: L.CRS.Simple
    });
    var bounds = this.bounds = [[0,0], [1000, 1000]];
    var image = this.image = L.imageOverlay(sampleImage, bounds).addTo(map);
    var drawnItems = this.drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);
    var drawControl = this.drawControl = new L.Control.Draw({
      edit: {
        featureGroup: drawnItems
      }
    });
    map.addControl(drawControl);
    map.fitBounds(bounds);
    //.setView([51.505, -0.09], 13);
    console.log('Component mounted!');

    map.on('draw:created', e => {
      console.log(e);
      drawnItems.addLayer(e.layer);
    });
  }

  render(){
    return (
      <div id={this.props.id} style={{height: '300px', width: '50%' }}>
      </div>
    )
  }
}

LeafletComponent.propTypes = {
  id: React.PropTypes.string
};

export default LeafletComponent;
