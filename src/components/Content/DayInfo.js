import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DayInfo extends Component {
  constructor (props) {
    super(props);
    console.log(props);
    this.state = {
    };
  }
  
  render(){
    return(
      <div className="dayInfo">
        <div className="dayNum">D1</div>
        <div className="dayTitle">2018/07/03 (二)</div>
        <div className="summary">台北市 > 福岡市 、 北九州市 、 福岡市 、 下關市 、 別府市</div>
      </div>
    )
  }
}

DayInfo.defaultProps = {

};

DayInfo.propTypes = {

};

export default DayInfo;