import React, { Component } from 'react';

import Map from '../src/index';

import {GoogleApiWrapper} from '../src/index';

const Listing = ({ places }) => (
  <ul>{places && places.map(p => <li key={p.id}>{p.name}</li>)}</ul>
);

class Container extends Component {
  state = {
    places: []
  };

  onMapReady = (mapProps, map) => this.searchNearby(map, map.center);

  searchNearby = (map, center) => {
    const { google } = this.props;

    const service = new google.maps.places.PlacesService(map);

    // Specify location, radius and place types for your Places API search.
    const request = {
      location: center,
      radius: '500',
      type: ['food']
    };

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK)
        this.setState({ places: results });
    });
  };

  render() {
    if (!this.props.loaded) return <div>Loading...</div>;

    return (
      <Map
        className="gmWrapper"
        google={this.props.google}
        onReady={this.onMapReady}
        visible={false}>
        <Listing places={this.state.places} />
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
  })(Container);

//export default Container;
