import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css'; 

/**
 * 1.HotelContent 最大區塊 (用來組織包含其他子元件 -> 這個元件的最上層的容器)
 * 2.ImageBlock 圖片區塊 (放到HotelContent中)
 * 3.TitleBlock 標題區塊 (放到HotelContent中)
 * 4.DetailList 放附近、位置、詳情區塊 (放到HotelContent中)
 * 5.DetailItem 附近、位置、詳情 小區塊按鈕 ((放到DetailList中 / 之後拉出來)
 * 6.DropdownSelect 下拉選單區塊 (放到HotelContent中 / 之後拉出來)
 * 7.動作、共用action (之後拉出來)
 * 8.css ok
 */

 /**
  *<div class="hotelBlock active">
								<div class="title" onclick="toggleHotel(this)"><i class="lion hotel"></i> 星野TOMAMU渡假村</div>
								<div class="content">
                  <div class="itemInfo hotelInfo">	
                  <div class="itemThumbnail">		<img src="https://photopdm.liontravel.com/194/星野渡假村.jpg">	</div>	
                  <div class="title">星野TOMAMU渡假村</div>	
                  <div class="detailBtn singleItem" data-pid="1_194">		
                  <ul>			<li onclick="rightBlockSwitch('poiMap', this)"><i class="lion location"></i>附近</li>			<li onclick="rightBlockSwitch('poiMap', this)"><i class="lion map"></i>位置</li>			<li onclick="rightBlockSwitch('poiDetail', this)"><i class="lion detail"></i>詳情</li>		</ul>	</div>	
                  <div class="mealType">		<select name="mealSelect" disabled="">     <option value="123" data-duration="480.0 selected">住宿-一泊二食</option>     <option value="2271" data-duration="60.0 ">付費體驗活動-雪上活動</option>     <option value="26949" data-duration="150.0 ">付費體驗活動-滑雪(教練教學)</option>		</select>	</div></div>

								</div>
							</div> 
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
  <select name="mealSelect" disabled={items.disabled}>
    {
      items.dropdownItem.map((item, i) => <DropdownItem key={i} name={item.name} value={item.id} dataduration={item.duration} />)
    }
  </select>
);

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

  //控制開關右邊顯示資料的block 待補齊action
  rightBlockSwitch = (type) => {
    console.log(type);
  }

  toggleHotel = () => {
    this.setState({
      activeBlock: !this.state.activeBlock
    });
  }

  render(){
    return(
        <div className={!this.state.activeBlock ? "hotelBlock" : "hotelBlock active"}>
          <div className="title" onClick={this.toggleHotel}>{this.props.datas.name}</div>
          <div className="content">
            <div className="itemInfo hotelInfo">
              <ImageBlock img={this.props.datas.thumbnail[0].img} />
              <TitleBlock titlename={this.props.datas.name} />
              <div className="detailBtn singleItem" data-pid={this.props.datas.key}>
                <DetailList detailitem={this.state.detailitem} onItemClick={this.rightBlockSwitch}/>
              </div>
              {
                this.props.datas.guideList.length > 0 ? <DropdownSelect dropdownItem={this.props.datas.guideList}/> : '' /** disabled的判斷 等有api時再放*/
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

};

export default HotelContent;