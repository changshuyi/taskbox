//最基礎的google map

import React from 'react';
import Map from '../src/index'; //引入Map的component
//import {GoogleApiWrapper} from '../src/index';
import GoogleApiWrapper from '../src/GoogleApiComponent';

const Container = props => {
  if (!props.loaded) return <div>Loading...</div>;

  return (
    <Map
      centerAroundCurrentLocation
      className="gmWrapper"
      google={props.google}
      style={{ height: '100%', position: 'relative', width: '100%' }}
      zoom={14}
    />
  );
};

const Loading = () => <div>Fancy loading container</div>;

export default 
  GoogleApiWrapper({
    apiKey: 'AIzaSyCFWoAaZHwSx-1r9h3EjIwz1LN8e58KVgY',
    libraries: ['places', 'visualization'],
    LoadingContainer: Loading
  })(Container);

//export default Container;
