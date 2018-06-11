import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Map extends Component {
  componentDidMount() {
    const { lat, lng } = this.props;
    new window.google.maps.Map(this.map, {
      center: { lat, lng },
      zoom: 8,
    });
  }

  render() {
    return (
      <div ref={node => this.map = node}>

      </div>
    );
  }
}

Map.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
};

export default Map;
