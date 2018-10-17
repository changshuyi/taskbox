import React from 'react';
import { storiesOf } from '@storybook/react';
import { task, actions } from '../Base/Base.func';
import hoteldemodatas from './demodatas/hoteldemodatas';

import DayList from './DayList';

let datas = hoteldemodatas;

storiesOf('DayList', module)
  .add('day_list', () => <DayList datas={datas} actions={actions} />);