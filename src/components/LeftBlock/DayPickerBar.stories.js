import React from 'react';
import { storiesOf } from '@storybook/react';
import { task, actions } from '../Base/Base.func';

import DayPickerBar from './DayPickerBar';

storiesOf('DayPickerBar', module)
  .add('day_picker_bar', () => <DayPickerBar actions={actions} />);