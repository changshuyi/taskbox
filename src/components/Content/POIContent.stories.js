import React from 'react';
import { storiesOf } from '@storybook/react';

import POIContent from './POIContent';
import poidemodatas from './demodatas/poidemodatas';
import { task, actions } from '../Base/Base.func';

let datas = poidemodatas;

storiesOf('POIContent', module)
  .add('poi_content', () => <POIContent datas={datas} action={actions} />);