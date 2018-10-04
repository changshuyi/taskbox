import React, { Component } from 'react';

import Map from '../src/index';

import {GoogleApiWrapper} from '../src/index';

class Container extends Component {
  state = {
    showingInfoWindow: false
  };

  onMapReady = (mapProps, map) => {
    this.map = map;

    window.onresize = () => {
      const currCenter = map.getCenter();
      this.props.google.maps.event.trigger(map, 'resize');
      map.setCenter(currCenter);
    };
  };

  onMarkerClick = () => this.setState({ showingInfoWindow: true });

  onInfoWindowClose = () => this.setState({ showingInfoWindow: false });

  onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({ showingInfoWindow: false });
  };

  render() {
    if (!this.props.loaded) return <div>Loading...</div>;

    return (
      <Map
        centerAroundCurrentLocation
        className="gmWrapper"
        google={this.props.google}
        onClick={this.onMapClicked}
        onReady={this.onMapReady}
        style={{ height: '100%', position: 'relative', width: '100%' }}
        zoom={14}
      />
    );
  }
}

const Loading = () => <div>Fancy loading container</div>;

export default 
  GoogleApiWrapper({
    apiKey: 'AIzaSyCFWoAaZHwSx-1r9h3EjIwz1LN8e58KVgY',
    libraries: ['places', 'visualization'],
    LoadingContainer: Loading
  })(Container);

//export default Container;
