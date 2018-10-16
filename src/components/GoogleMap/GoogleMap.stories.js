import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

//import GoogleMap from './GoogleMap';
import mapdemodatas from './mapdemodatas.json';

import Simple from './components/basic';
import Marker from './components/withMarkers';
import ClickableMarkers from './components/clickableMarkers';
import GooglePlaces from './components/places';
import Autocomplete from './components/autocomplete';
import HeatMap from './components/withHeatMap';
import Polygon from './components/withPolygons';
import Polyline from './components/withPolylines';
import CustomEvents from './components/resizeEvent';

//imageStyleArray
import POINearbyLocation from'../img/poi_nearby_location.png'; //0
import IcPOILocation from'../img/ic_poi_location.png'; //1
import IcLocationAirport from'../img/ic_location_airport.png'; //2
import IcLocationMap2 from'../img/ic_location_map2.png'; //3

let datas = mapdemodatas;

let points = [
  {lat:43.063569, lng:142.631352},
  {lat:43.06382, lng:142.632433},
  {lat:43.06376, lng:142.62587099999996},
  {lat:43.077074, lng:142.59889099999998},
  {lat:43.155365, lng:144.44478600000002},
  {lat:43.45146, lng:144.09776499999998},
  {lat:44.057985, lng:145.10742099999993},
  {lat:44.038149, lng:144.935476}
];

//imageStyle
var imageStyleArray = [POINearbyLocation, IcPOILocation, IcLocationAirport, IcLocationMap2];
var markerImageUrl =  imageStyleArray[0];

storiesOf('GoogleMap', module)
  //.add('google_map', () => <GoogleMap datas={datas} />)
  .add('simple', () => <Simple datas={datas} />)
  .add('marker', () => <Marker datas={datas} points={points} markerImageUrl={markerImageUrl}/>)
  .add('clickable_markers', () => <ClickableMarkers datas={datas} points={points}/>)
  .add('google_places', () => <GooglePlaces datas={datas} points={points}/>)
  .add('autocomplete', () => <Autocomplete datas={datas} />)
  .add('heat_map', () => <HeatMap datas={datas} points={points}/>)
  .add('polygon', () => <Polygon datas={datas} points={points}/>)
  .add('polyline', () => <Polyline datas={datas} points={points}/>)
  .add('custom_events', () => <CustomEvents datas={datas} points={points}/>);