import React from 'react';
import { action } from '@storybook/addon-actions';

const DetailItem = (items) => (
  <li className={items.icon} onClick={items.onclick.bind(this, items.poiType)}>{items.title}</li>
);

const DetailList = (items) => (
  <ul>
    {
      items.detailitem.map((item, i) => <DetailItem key={i} title={item.title} icon={item.icon} poiType={item.poiType} onclick={items.onItemClick} />)
    }
  </ul>
);

const DropdownItem = (items) => (
  <option value={items.value} data-duration={items.dataduration}>{items.name}</option>
);

//判斷selected
/* if(m_itemInfo.guideList[j].id == m_packdata.hotelInfo.guideId){selectStr = "selected";}else{selectStr = "";} */
const DropdownSelect = (items) => (
  <select name={items.dropdownName} disabled={items.disabled}>
    {
      items.dropdownItem.map((item, i) => <DropdownItem key={i} name={item.name} value={item.id} dataduration={item.duration} />)
    }
  </select>
);

export {DetailList, DropdownSelect};