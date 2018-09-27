import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css'; 

/**
 * 1.TrafficContent 最大區塊 (交通小卡只需要顯示交通時間跟方式，目前就先不分區塊)
 * 2.action
 * 3.css ok
*/

class TrafficContent extends Component {
  constructor (props) {
    super(props);
    console.log(props);
    this.state = {
    };
  }
  
  render(){
    return(
        <div className="trafficItem"
            data-name={this.props.datas.trafficInfo.name}
            data-distance={this.props.datas.trafficInfo.distance}
            data-duration={this.props.datas.trafficInfo.duration}
            data-routes={this.props.datas.trafficInfo.routes}
            data-time={this.props.datas.trafficInfo.timeStr}
            data-method={this.props.datas.trafficInfo.method}
            data-routelist={this.props.datas.trafficInfo.routeList?JSON.stringify(this.props.datas.trafficInfo.routeList).replace(/'/g, ""):''}
            data-item-pid={this.props.datas.pid}
        >
        {this.props.datas.trafficInfo.distance + ' ' + this.props.datas.trafficInfo.timeStr}
        </div>
    )
  }
}

TrafficContent.defaultProps = {

};

TrafficContent.propTypes = {

};

export default TrafficContent;