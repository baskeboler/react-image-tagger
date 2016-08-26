import React from 'react'

class RegionList extends React.Component {
  render() {
    var regions = this.props.regions;
    return (
      <ul className="regionList">
        {regions.map((r, i) => {
          return (
            <li key={i}>
              {r}
            </li>
          );
        })}
      </ul>
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
