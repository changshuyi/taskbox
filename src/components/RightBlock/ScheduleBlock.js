import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import GoogleMapReact from 'google-map-react';

/**
 * 1.ScheduleBlock 最大區塊 (用來組織包含其他子元件 -> 這個元件的最上層的容器)
 * 2.ScheduleSelector 行程切換選擇區塊 (放到ScheduleBlock中)
 * 3.ScheduleSelectDay 行程天數select (放ScheduleSelector中)
 * 4.ScheduleSelectOption 行程天數select的選項 (放ScheduleSelectDay中)
 * 5.ScheduleMap 地圖區塊 (放到ScheduleMap中)
 * 6.css
 * 7.action (switchMapDay)
 * 8.react 載入地圖
 */
/**
 * <div class="scheduleBlock" style="display: block">
						<div class="scheduleSelector">
							<select name="scheduleSelectDay" onchange="switchMapDay(this);">
								<option value="">查看所有行程</option>
								<option value="1">查看 D1 行程</option>

							</select>
						</div>
						<div id="scheduleMap" class="gmWrapper">

						</div>
					</div>
 */

const googleApiKey = 'AIzaSyCFWoAaZHwSx-1r9h3EjIwz1LN8e58KVgY';

const ScheduleSelectOption = (items) => (
  <option value=""></option>
);

const ScheduleSelectDay = (items) => (
  <select name="scheduleSelectDay">
    {
      /*items.dropdownItem.map((item, i) => <ScheduleSelectOption />)*/
    }
  </select>
);

class ScheduleSelector extends Component {
  render(){
    return(
        <div className="scheduleSelector">
          <ScheduleSelectDay />
        </div>
    )
  }
}

const ScheduleMap = ({ text }) => (
  <div id="scheduleMap" className="gmWrapper">{text}</div>
);

class ScheduleBlock extends Component {
  constructor (props) {
    super(props);
    console.log(props);
    this.state = {
    };
  }
  /**scheduleBlock */
  render() {
    return (
      <div className="" style={{ height: '100vh', width: '100%' }}>
        <ScheduleSelector />
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleApiKey }}
          defaultCenter={{
            lat: 59.95,
            lng: 30.33
          }}
          defaultZoom={11}
        >
          <ScheduleMap
            lat={59.955413}
            lng={30.337844}
            text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

ScheduleBlock.defaultProps = {

};

ScheduleBlock.propTypes = {

};

export default ScheduleBlock;