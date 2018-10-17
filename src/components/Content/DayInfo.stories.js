import React from 'react';
import { storiesOf } from '@storybook/react';
import { task, actions } from '../Base/Base.func';

import DayInfo from './DayInfo';

let datas = {};

storiesOf('DayInfo', module)
  .add('day_info', () => <DayInfo datas={datas} actions={actions} />);