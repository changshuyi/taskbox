import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import FlightSelectorModal from './FlightSelectorModal';

storiesOf('FlightSelectorModal', module)
  .add('flight_selector_modal', () => <FlightSelectorModal />);