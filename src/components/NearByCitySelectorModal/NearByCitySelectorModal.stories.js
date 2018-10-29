import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import NearByCitySelectorModal from './NearByCitySelectorModal';

storiesOf('NearByCitySelectorModal', module)
  .add('near_by_city_selector_modal', () => <NearByCitySelectorModal />);