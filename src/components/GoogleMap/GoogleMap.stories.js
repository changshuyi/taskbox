import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import GoogleMap from './GoogleMap';

import Simple from './components/basic';
import Marker from './components/withMarkers';
import ClickableMarkers from './components/clickableMarkers';
import GooglePlaces from './components/places';
import Autocomplete from './components/autocomplete';
import HeatMap from './components/withHeatMap';
import Polygon from './components/withPolygons';
import Polyline from './components/withPolylines';
import CustomEvents from './components/resizeEvent';

let datas = {};

storiesOf('GoogleMap', module)
  .add('google_map', () => <GoogleMap datas={datas} />)
  .add('simple', () => <Simple datas={datas} />)
  .add('marker', () => <Marker datas={datas} />)
  .add('clickable_markers', () => <ClickableMarkers datas={datas} />)
  .add('google_places', () => <GooglePlaces datas={datas} />)
  .add('autocomplete', () => <Autocomplete datas={datas} />)
  .add('heat_map', () => <HeatMap datas={datas} />)
  .add('polygon', () => <Polygon datas={datas} />)
  .add('polyline', () => <Polyline datas={datas} />)
  .add('custom_events', () => <CustomEvents datas={datas} />);