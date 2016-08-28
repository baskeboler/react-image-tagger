import React from 'react'
import {Card} from 'elemental';

class RegionList extends React.Component {
  render() {
    var regions = this.props.regions;
    return (
      <Card>
        <h3>Regiones en formato (x1,y1,x2,y2)</h3>
        <span>SW = (x1,y1), NE = (x2, y2)</span>
        <ul className="regionList">
          {regions.map((r, i) => {
            return (
              <li key={i}>
                  {r}
              </li>
            );
          })}
        </ul>
      </Card>
    )
  }
}
RegionList.propTypes = {
  regions: React.PropTypes.array
};
RegionList.defaultProps = {
  regions: []
};
export default RegionList;
