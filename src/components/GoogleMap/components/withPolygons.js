import React from 'react';

import Map from '../src/index';

import Polygon from '../src/components/Polygon';

//import {GoogleApiWrapper} from '../src/index';
import GoogleApiWrapper from '../src/GoogleApiComponent';

const WithPolygons = props => {
  if (!props.loaded) return <div>Loading...</div>;

  const polygon = [
    { lat: 37.789411, lng: -122.422116 },
    { lat: 37.785757, lng: -122.421333 },
    { lat: 37.789352, lng: -122.415346 }
  ];

  return (
    <Map
      google={props.google}
      className="gmWrapper"
      style={{ height: '100%', position: 'relative', width: '100%' }}
      zoom={14}>
      <Polygon
        fillColor="#0000FF"
        fillOpacity={0.35}
        paths={[polygon]}
        strokeColor="#0000FF"
        strokeOpacity={0.8}
        strokeWeight={2}
      />
    </Map>
  );
};

const Loading = () => <div>Fancy loading container</div>;

export default 
  GoogleApiWrapper({
    apiKey: 'AIzaSyCFWoAaZHwSx-1r9h3EjIwz1LN8e58KVgY',
    libraries: ['places', 'visualization'],
    LoadingContainer: Loading
  })(WithPolygons);

//export default WithPolygons;
