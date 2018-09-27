import React from 'react';
import { storiesOf } from '@storybook/react';

import POIContent from './POIContent';
import { task, actions } from '../Base/Base.func';

let datas = {

};

storiesOf('POIContent', module)
  .add('poi_content', () => <POIContent datas={datas} action={actions} />);