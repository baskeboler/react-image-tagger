import React from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet-draw/dist/leaflet.draw.css';
import 'leaflet-draw';
import sampleImage from './assets/image.jpg';

class LeafletComponent extends React.Component {
  constructor(props) {
    super(props);
    this.getRects = this.getRects.bind(this);
    this.updateState=this.updateState.bind(this);
    this.reloadMap=this.reloadMap.bind(this);
    this.setupMapWidget=this.setupMapWidget.bind(this);
  }

  getRects(){
    return this.drawnItems.getLayers()
      .map(i => {return {id: this.drawnItems.getLayerId(i), layer: i}});
      //.map(gj => {return `layer ${gj.id}: ${gj.layer.getBounds().toBBoxString()}`});//getBounds().toBBoxString());
  }
  componentDidMount() {
    this.setupMapWidget(this.props.imgSrc);
  }
  setupMapWidget(imgSrc) {
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
        marker: false,
        circle: false
      }
    });
    map.addControl(drawControl);
    // map.fitBounds(bounds);
    //.setView([51.505, -0.09], 13);
    console.log('Component mounted!');

    map.on('draw:created', e => {
      console.log(e);
      e.layer.on('click', e2 => {
        console.log('rect clicked!', e2);
        this.props.onTagSelected(e.layer._leaflet_id);
        // e2.target.setStyle({fillOpacity: .5});
      });
      map.on('imageTagger:tagSelectionChanged', e2 => {
        // this.props.onTagSelected(e2.target._leaflet_id);
        if (e2.selectedTag.selected && e2.selectedTag.id==e.layer._leaflet_id){
          console.log('tg selection changed!', e2);

          e.layer.setStyle({fillOpacity: .5});
        } else {
          e.layer.setStyle({fillOpacity: .2});

        }
      });
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
    map.on('click', e => {
      console.log('clear selection');
      this.props.onClearSelectedTag();
    });

    this.loadImage(imgSrc);
  }
  updateState() {
    // this.setState({selectedRegions: this.getRects()});
    //this.props.onChange();
    this.props.onSelectionsUpdate(this.getRects());
  }
  reloadMap(imgSrc) {
    this.map.remove();
    delete this.bounds;
    delete this.image;
    delete this.tmpImage;
    delete this.drawnItems;
    this.setupMapWidget(imgSrc);

  }
  loadImage(imgSrc) {
    var self = this;
    var tmpImage = this.tmpImage=  new Image();
    tmpImage.onload = function () {
      console.log(`image dimensions is ${this.width} + ${this.height}`);
      //bounds =
      self.props.onSetImageSize({w: this.width, h: this.height});
      var bounds = self.bounds = [[0,0], [this.height, this.width]];
      var image = self.image = L.imageOverlay(this.src, bounds).addTo(self.map);
      self.map.fitBounds(bounds);
      console.log(`Image loaded.`);
    };
    tmpImage.src = imgSrc;

  }

  render(){
    return (
      <div id={this.props.id} style={{height: this.props.height, width: this.props.width}}>
      </div>
    )
  }

  componentWillReceiveProps(newProps) {
    console.log('new props!');
    console.log('current props', this.props);
    console.log('new props' , newProps);
    if (this.props.imgSrc != newProps.imgSrc) {
      console.log('reloading map!');
      this.reloadMap(newProps.imgSrc);
    }
    if (newProps.selectedTag.id != this.props.selectedTag.id) {
        this.map.fireEvent('imageTagger:tagSelectionChanged', {selectedTag: newProps.selectedTag});
      }
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
