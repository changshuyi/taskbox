import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import GoogleMap from './GoogleMap';

let datas = {};

storiesOf('GoogleMap', module)
  .add('google_map', () => <GoogleMap datas={datas} />);