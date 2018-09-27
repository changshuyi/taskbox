import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import DayList from './DayList';

storiesOf('DayList', module)
  .add('day_list', () => <DayList />);