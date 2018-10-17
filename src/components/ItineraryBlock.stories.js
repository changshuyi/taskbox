import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ItineraryBlock from './ItineraryBlock';
import { task, actions } from './Base/Base.func';

storiesOf('ItineraryBlock', module)
  .add('itinerary_block', () => <ItineraryBlock actions={actions} />);