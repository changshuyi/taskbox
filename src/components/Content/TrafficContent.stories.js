import React from 'react';
import { storiesOf } from '@storybook/react';

import TrafficContent from './TrafficContent';
import trafficdemodatas from './trafficdemodatas'
import { task, actions } from '../Base/Base.func';

let datas = trafficdemodatas;

storiesOf('TrafficContent', module)
  .add('traffic_content', () => <TrafficContent datas={datas} action={actions} />);