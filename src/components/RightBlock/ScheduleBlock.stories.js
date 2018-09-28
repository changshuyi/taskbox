import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ScheduleBlock from './ScheduleBlock';
import mapdemodatas from './mapdemodatas';

let datas = mapdemodatas;

storiesOf('ScheduleBlock', module)
  .add('schedule_block', () => <ScheduleBlock datas={datas} action={action} />);