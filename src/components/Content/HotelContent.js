import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css'; 

/**
 * 1.HotelContent 最大區塊 (用來組織包含其他子元件，即這個元件的最上層的容器)
 * 2.ImageBlock 圖片區塊
 * 3.TitleBlock 標題區塊
 * 4.DetailBlock 放附近、位置、詳情區塊
 * 5.附近、位置、詳情 小區塊按鈕
 * 6.DropdownBlock 下拉選單區塊
 * 7.動作 (action - contentControl & 共用action)
 * 8.css
 */

 /**
  * HotelContent 用來組織包含其他子元件，即這個元件的最上層的容器。
  * SearchBar (藍色) 取得 使用者輸入的搜尋條件。
  * ProductTable (綠色) 根據 使用者輸入的搜尋條件 顯示過濾後的資料列表。
  * ProductCategoryRow (青色) 顯示 分類 標題。
  * ProductRow (紅色) 顯示每一個 產品。
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

class DetailBlock extends Component {
  render(){
    return (
      <div></div>
    );
  }
}

class DropdownBlock extends Component {
  render(){
    return (
      <div>
        <div>{this.props.titlename}</div>
      </div>
    );
  }
}

//切換到右邊區塊的小區塊按鈕
//rightDetailBlock

class ContentControl extends Component {
  //toggleHotel
}

//用來組織包含其他子元件，即這個元件的最上層的容器
//在這裡面接api
class HotelContent extends Component {
  constructor (props) {
      super(props);
      console.log(props);
      this.state = {};
  }

  render(){
      return(
          <div className="hotelBlock active">
            <div className="content">
              <div className="itemInfo hotelInfo">
                <ImageBlock img={this.props.datas.thumbnail[0].img} />
                <TitleBlock titlename={this.props.datas.name} />
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