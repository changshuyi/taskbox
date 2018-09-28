import React from 'react';
import { storiesOf } from '@storybook/react';

import HotelContent from './HotelContent';
import hoteldemodatas from './hoteldemodatas';
import { task, actions } from '../Base/Base.func';

//資料
let datas = hoteldemodatas;

storiesOf('HotelContent', module)
  .add('hotel_content', () => <HotelContent datas={datas} action={actions} />);