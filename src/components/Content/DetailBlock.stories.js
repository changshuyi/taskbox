import React from 'react';
import { storiesOf } from '@storybook/react';

import DetailBlock from './DetailBlock';
import detailblockdemodatas from './demodatas/detailblockdemodatas';
import { task, actions } from '../Base/Base.func';

//資料
let datas = detailblockdemodatas;

storiesOf('DetailBlock', module)
  .add('detail_block', () => <DetailBlock datas={datas} actions={actions} />);