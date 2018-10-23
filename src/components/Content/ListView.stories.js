import React from 'react';
import { storiesOf } from '@storybook/react';

import ListBlock from './ListBlock';
import poidemodatas from './demodatas/poidemodatas';
import placelistdemodatas from './demodatas/placelistdemodatas';
import { task, actions } from '../Base/Base.func';

storiesOf('ListBlock', module)
  .add('list_block', () => <ListBlock poidemodatas={poidemodatas} placelistdemodatas={placelistdemodatas} actions={actions} />);