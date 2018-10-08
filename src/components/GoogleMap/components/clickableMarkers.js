import React, { Component } from 'react';

import Map from '../src/index';

//import {GoogleApiWrapper} from '../src/index';
import GoogleApiWrapper from '../src/GoogleApiComponent';

import InfoWindow from '../src/components/InfoWindow';
import Marker from '../src/components/Marker';

class WithMarkers extends Component {
  state = {
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false
  };

  onMarkerClick = (props, marker) =>
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true
    });

  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });

  onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false
      });
  };

  render() {
    if (!this.props.loaded) return <div>Loading...</div>;

    return (
      <Map
        className="gmWrapper"
        google={this.props.google}
        onClick={this.onMapClicked}
        style={{ height: '100%', position: 'relative', width: '100%' }}
        zoom={13}
        initialCenter={this.props.points[0]}>

        { this.props.points.map((item, i) => 
          <Marker
            key={'points_' + i}
            name={'points' + i}
            position={item}
            onClick={this.onMarkerClick}
            title=""
          />)
        }
        {/*position={}*/}
        <InfoWindow
          marker={this.state.activeMarker}
          onClose={this.onInfoWindowClose}
          visible={this.state.showingInfoWindow}>
          <div>
            <small>{this.state.selectedPlace.name}</small>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

const Loading = () => <div>Fancy loading container</div>;

export default 
  GoogleApiWrapper({
    apiKey: 'AIzaSyCFWoAaZHwSx-1r9h3EjIwz1LN8e58KVgY',
    libraries: ['places', 'visualization'],
    LoadingContainer: Loading
  })(WithMarkers);

//export default WithMarkers;
