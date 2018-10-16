import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css'; 

import { DetailList, DropdownSelect} from '../Base/Items.func';

/**
 * 1.POIContent 最大區塊 (裝圖片區塊、資訊區塊)
 * 2.itemThumbnail 圖片區塊
 * 3.itemInfo 資訊區塊 (title、detailBtn、time、guideType)
 * 4.action (拉到Base.func)
 * 5.css
*/

class TimeBlock extends Component {
  render(){
    return (
      <div className="time"> 
        <i className="lion clock"></i>
        <input className="durationPicker view-type ui-timepicker-input" name="duration" value={this.props.value} autocomplete="off" readonly="" />
      </div>
    );
  }
}

class TitleBlock extends Component {
  render(){
    return (
      <div className="itemInfo">
        <div className="title">{this.props.titlename}</div>
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

class POIContent extends Component {
  constructor (props) {
    super(props);
    console.log(props);
    this.state = {
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
  
  render(){
    return(
      <div className="singleItem">
        <div className="itemBlock">
          <ImageBlock img={this.props.datas.thumbnail} />
          <TitleBlock titlename={this.props.datas.name} />
          <div className="detailBtn" data-pid={this.props.datas.key}>
            <DetailList detailitem={this.state.detailitem} onItemClick={this.props.action.onRightBlockSwitch}/>
          </div>
          <TimeBlock value={this.props.action.durationToTime(this.props.datas.duration)} />
          <div className="guideType">
            <i className="lion bag"></i>
            {
              this.props.datas.guideList.length > 0 ? <DropdownSelect dropdownItem={this.props.datas.guideList} dropdownName="guideSelect" /> : '' /** disabled的判斷 等有api時再放*/
            }
          </div>
        </div>
      </div>
    )
  }
}

POIContent.defaultProps = {
  
};

POIContent.propTypes = {
  onTrafficClick: PropTypes.func,
  onRightBlockSwitch: PropTypes.func,
};

export default POIContent;