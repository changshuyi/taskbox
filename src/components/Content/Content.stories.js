import React from 'react';
import { storiesOf } from '@storybook/react';

import POIContent from './POIContent';
import HotelContent from './HotelContent';
import TrafficContent from './TrafficContent';

import poidemodatas from './demodatas/poidemodatas';
import hoteldemodatas from './demodatas/hoteldemodatas'
import trafficdemodatas from './demodatas/trafficdemodatas'
import { task, actions } from '../Base/Base.func';

storiesOf('Content', module)
  .add('poi_content', () => <POIContent datas={poidemodatas} actions={actions} />)
  .add('hotel_content', () => <HotelContent datas={hoteldemodatas} actions={actions} />)
  .add('traffic_content', () => <TrafficContent datas={trafficdemodatas} actions={actions} />);