import React, { Component } from 'react';

import Map from '../src/index';

//import {GoogleApiWrapper} from '../src/index';
import GoogleApiWrapper from '../src/GoogleApiComponent';

import Marker from '../src/components/Marker';
//import InfoWindow from '../src/components/InfoWindow';

//elements是由components組合產生的，而components可以有自己的狀態，依照狀態來render HTML
//拿src的來用組成區塊畫面
//從GoogleApiComponent丟props
class WithMarkers extends Component{
  constructor (props) {
    super(props);
    this.state = {

    };
  }
  
  render() {
    if (!this.props.loaded) return <div>Loading...</div>;
    
    /*var bounds = new this.props.google.maps.LatLngBounds();
    for (var i = 0; i < this.props.points.length; i++) {
      bounds.extend(this.props.points[i]);
    }*/

    return (
      <Map
        google={this.props.google}
        className="gmWrapper"
        style={{ height: '100%', position: 'relative', width: '100%' }}
        zoom={8}
        initialCenter={this.props.points[0]}>

        { this.props.points.map((item, i) => 
          <Marker
            key={'points_' + i}
            name=""
            position={item}
            title=""
          />)
        }

      </Map>
    );
  }
}

/*const WithMarkers = props => {
  if (!props.loaded) return <div>Loading...</div>;
  
  return (
    <Map
      google={props.google}
      className="gmWrapper"
      style={{ height: '100%', position: 'relative', width: '100%' }}
      zoom={13}>
      <Marker
          name="SOMA"
          position={{ lat: 37.778519, lng: -122.40564 }}
          title="The marker`s title will appear as a tooltip."
      />
    </Map>
  );
};*/

const Loading = () => <div>Fancy loading container</div>;

export default 
  GoogleApiWrapper({
    apiKey: 'AIzaSyCFWoAaZHwSx-1r9h3EjIwz1LN8e58KVgY',
    libraries: ['places', 'visualization'],
    LoadingContainer: Loading
  })(WithMarkers);

//export default WithMarkers;
