import React from 'react';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import L from 'leaflet';
import 'leaflet-draw';
import sampleImage from './assets/image.jpg';

class LeafletComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSize: {},
      selectedRegions: []
    };
    this.getRects = this.getRects.bind(this);
    this.updateState=this.updateState.bind(this);
  }

  getRects(){
    return this.drawnItems.getLayers()
      .map(i => i.getBounds().toBBoxString());
  }

  componentDidMount() {
    var self = this;
    var map = this.map = L.map(this.props.id, {
      crs: L.CRS.Simple,
      minZoom: -5
    });
    // var bounds = this.bounds = [[0,0], [1000, 1000]];
    // var image = this.image = L.imageOverlay(sampleImage, bounds).addTo(map);
    var drawnItems = this.drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);

    var drawControl = this.drawControl = new L.Control.Draw({
      edit: {
        featureGroup: drawnItems
      },
      draw: {
        polyline: false,
        polygon: false,
        circle: false,
        marker: false
      }
    });
    map.addControl(drawControl);
    // map.fitBounds(bounds);
    //.setView([51.505, -0.09], 13);
    console.log('Component mounted!');

    map.on('draw:created', e => {
      console.log(e);
      drawnItems.addLayer(e.layer);
      this.updateState();
    });

    map.on('draw:edited', e => {
      console.log(`Editing completed. updating state.`);
      this.updateState();
      // self.setState({selectedRegions: self.getRects()});

    });
    map.on('draw:deleted', e => {
      console.log(`Selection deleted. updating state.`);
      // self.setState({selectedRegions: self.getRects()});
      this.updateState();
    });

    this.loadImage();
  }
  updateState() {
    // this.setState({selectedRegions: this.getRects()});
    //this.props.onChange();
    this.props.onSelectionsUpdate(this.getRects());
  }
  loadImage() {
    var self = this;
    var tmpImage = this.tmpImage=  new Image();
    tmpImage.onload = function () {
      console.log(`image dimensions is ${this.width} + ${this.height}`);
      //bounds =
      var bounds = self.bounds = [[0,0], [this.height, this.width]];
      var image = self.image = L.imageOverlay(this.src, bounds).addTo(self.map);
      self.map.fitBounds(bounds);
      console.log(`Image loaded.`);
    };
    tmpImage.src = this.props.imgSrc;

  }

  render(){
    return (
      <div id={this.props.id} style={{height: this.props.height, width: this.props.width}}>
      </div>
    )
  }
}

LeafletComponent.propTypes = {
  id: React.PropTypes.string.isRequired,
  height: React.PropTypes.string,
  width: React.PropTypes.string,
  imgSrc: React.PropTypes.string,
  onSelectionsUpdate: React.PropTypes.func
};
LeafletComponent.defaultProps = {
  height: '300px',
  width: '100%',
  imgSrc: sampleImage
};
export default LeafletComponent;
