import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import { DetailList, DropdownSelect} from '../Base/Items.func';

/**
 * 1.HotelContent 最大區塊 (用來組織包含其他子元件 -> 這個元件的最上層的容器)
 * 2.ImageBlock 圖片區塊 (放到HotelContent中)
 * 3.TitleBlock 標題區塊 (放到HotelContent中)
 * 4.DetailList 放附近、位置、詳情區塊 (在Base/Items.func 中)
 * 5.DetailItem 附近、位置、詳情 小區塊按鈕 ((放到DetailList中 / 或許之後拉出來)
 * 6.DropdownSelect 下拉選單區塊 (在Base/Items.func 中)
 * 7.動作、共用action (拉到Base.func)
 * 8.css ok
 */

class TitleBlock extends Component {
  render(){
    return (
      <div className="title">
        {this.props.titlename}
      </div>
    );
  }
}

class ImageBlock extends Component {
  render(){
    return (
      <div className="itemThumbnail">
        <img width="100%" src={this.props.img} alt="Photo" />
      </div>
    );
  }
}

/*const DetailItem = (items) => (
  <li className={items.icon} onClick={items.onclick.bind(this, items.poiType)}>{items.title}</li>
);

const DetailList = (items) => (
  <ul>
    {
      items.detailitem.map((item, i) => <DetailItem key={i} title={item.title} icon={item.icon} poiType={item.poiType} onclick={items.onItemClick} />)
    }
  </ul>
);*/

/*const DropdownItem = (items) => (
  <option value={items.value} data-duration={items.dataduration}>{items.name}</option>
);

//判斷selected
//if(m_itemInfo.guideList[j].id == m_packdata.hotelInfo.guideId){selectStr = "selected";}else{selectStr = "";} 
const DropdownSelect = (items) => (
  <select name="mealSelect" disabled={items.disabled}>
    {
      items.dropdownItem.map((item, i) => <DropdownItem key={i} name={item.name} value={item.id} dataduration={item.duration} />)
    }
  </select>
);*/

//用來組織包含其他子元件 -> 這個元件的最上層的容器
//看資料組織情況在這裡面接api
class HotelContent extends Component {
  constructor (props) {
    super(props);
    console.log(props);
    this.state = {
      activeBlock: false, //展開、關閉
      detailitem: [
        {
          title:"附近",
          icon:"location",
          poiType: "poiMap"
        },
        {
          title:"位置",
          icon:"map",
          poiType: "poiMap"
        },
        {
          title:"詳情",
          icon:"detail",
          poiType: "poiDetail"
        }
      ]
    };
  }
  
  toggleHotel = () => {
    this.setState({
      activeBlock: !this.state.activeBlock
    });
  }

  handleServerItemsLoad = () => {
    /*fetch('', {
            method: 'GET'
        }).then((response) => {
            //ok 代表狀態碼在範圍 200-299
            if (!response.ok) throw new Error(response.statusText)
            return response.json();
    }).then((items) => {
      //setState
    }).catch((error) => {
        //console.error(error)
    });*/
  }

  render(){
    return(
        <div className={!this.state.activeBlock ? "hotelBlock" : "hotelBlock active"}>
          <div className="title" onClick={this.toggleHotel}>{this.props.datas.name}</div>
          <div className="content">
            <div className="itemInfo hotelInfo">
              <ImageBlock img={this.props.datas.img[0].img} />
              <TitleBlock titlename={this.props.datas.name} />
              <div className="detailBtn singleItem" data-pid={this.props.datas.key}>
                <DetailList detailitem={this.state.detailitem} onItemClick={this.props.actions.onRightBlockSwitch}/>
              </div>
              {
                this.props.datas.guideList.length > 0 ? <DropdownSelect dropdownItem={this.props.datas.guideList} dropdownName="mealSelect"/> : '' /** disabled的判斷 等有api時再放*/
              }
            </div>
          </div>
        </div>
    )
  }
}

HotelContent.defaultProps = {
  
};

HotelContent.propTypes = {
  onTrafficClick: PropTypes.func,
  onRightBlockSwitch: PropTypes.func,
};

export default HotelContent;