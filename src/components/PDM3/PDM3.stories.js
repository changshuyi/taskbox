import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Login from './Login';
import PDM3 from './PDM3';
import { task, actions } from '../Base/Base.func';

storiesOf('PDM3', module)
  .add('login', () => <Login actions={actions} />)
  .add('pdm3', () => <PDM3 actions={actions} />);