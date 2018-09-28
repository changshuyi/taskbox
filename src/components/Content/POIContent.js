import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css'; 

/**
 * 1.POIContent 最大區塊 (裝圖片區塊、資訊區塊)
 * 2.itemThumbnail 圖片區塊
 * 3.itemInfo 資訊區塊 (title、detailBtn、time、guideType)
 * 4.action (拉到Base.func)
 * 5.css
*/

class POIContent extends Component {
  constructor (props) {
    super(props);
    console.log(props);
    this.state = {
    };
  }
  
  render(){
    return(
        <div className=""></div>
    )
  }
}

POIContent.defaultProps = {

};

POIContent.propTypes = {

};

export default POIContent;