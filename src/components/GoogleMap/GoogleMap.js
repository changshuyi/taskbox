import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {
  Redirect,
  Switch,
  Link,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';

import Container from './Container';

import Simple from './components/basic';
import Marker from './components/withMarkers';
import ClickableMarkers from './components/clickableMarkers';
import GooglePlaces from './components/places';
import Autocomplete from './components/autocomplete';
import HeatMap from './components/withHeatMap';
import Polygon from './components/withPolygons';
import Polyline from './components/withPolylines';
import CustomEvents from './components/resizeEvent';

const routes = [
  {
    path: '/basic',
    name: 'Simple',
    component: Simple
  },
  {
    path: '/markers',
    name: 'Marker',
    component: Marker
  },
  {
    path: '/clickable_markers',
    name: 'Clickable markers',
    component: ClickableMarkers
  },
  {
    path: '/places',
    name: 'Google places',
    component: GooglePlaces
  },
  {
    path: '/autocomplete',
    name: 'Autocomplete',
    component: Autocomplete
  },
  {
    path: '/heatMap',
    name: 'Heat Map',
    component: HeatMap
  },
  {
    path: '/polygons',
    name: 'Polygon',
    component: Polygon
  },
  {
    path: '/polyline',
    name: 'Polyline',
    component: Polyline
  },
  {
    path: '/onResizeEvent',
    name: 'Custom events',
    component: CustomEvents
  }
];

const createElement = (Component, route) => {
  // const pathname = props.location.pathname.replace('/', '');
  // const routeDef = routes[pathname];
  console.log('createElement');
  const newProps = {
    key: route.name,
    route,
    routes,
    // pathname,
    routeDef: route
    // routeDef
  };

  return <Component {...newProps} />;
};

const Routing = (
  <Router>
    <Container routes={routes} />
  </Router>
);


class GoogleMap extends Component {
  constructor (props) {
    super(props);
    console.log(props);
    this.state = {
    };
  }
  
  render(){
    return(
        <div className="">
          {Routing}
        </div>
    )
  }
}

export default GoogleMap;
