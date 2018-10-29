import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import MainBlock from './MainBlock';

storiesOf('MainBlock', module)
  .add('main_block', () => <MainBlock />);