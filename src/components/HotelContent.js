import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * 1.hotel content最大區塊 (用來組織包含其他子元件，即這個元件的最上層的容器)
 * 2.圖片區塊
 * 3.標題區塊
 * 4.其他詳情區塊
 * 5.其他詳情的小區塊
 * 6.下拉選單區塊
 */

 /**
  * FilterableProductTable (橘色) 用來組織包含其他子元件，即這個元件的最上層的容器。
  * SearchBar (藍色) 取得 使用者輸入的搜尋條件。
  * ProductTable (綠色) 根據 使用者輸入的搜尋條件 顯示過濾後的資料列表。
  * ProductCategoryRow (青色) 顯示 分類 標題。
  * ProductRow (紅色) 顯示每一個 產品。
  */

//用來組織包含其他子元件，即這個元件的最上層的容器。
class HotelContent extends Component {
  constructor (props) {
      super(props);
      console.log(props);
      this.state = { };
  }

  handleServerItemsLoad = (RouteName) => {
      if(RouteName !== '' && RouteName !== undefined){
          fetch('https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/Taipei/' + RouteName + '?$top=300&$format=JSON', {
                  method: 'GET'
              }).then((response) => {
                  //ok 代表狀態碼在範圍 200-299
                  if (!response.ok) throw new Error(response.statusText)
                  return response.json();
          }).then((itemList) => {
              this.setState({
                  RouteName: RouteName,
                  Schedule: itemList
              });
          }).catch((error) => {
              //console.error(error)
          });
      }
  }

  render(){
      return(
          <div className="search">
             {this.props.task.title}
          </div>
      )
  }
}

HotelContent.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func,
};

export default HotelContent;