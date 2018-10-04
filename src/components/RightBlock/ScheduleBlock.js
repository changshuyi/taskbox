import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

//imageStyleArray
import POINearbyLocation from'../img/poi_nearby_location.png'; //0
import IcPOILocation from'../img/ic_poi_location.png'; //1
import IcLocationAirport from'../img/ic_location_airport.png'; //2
import IcLocationMap2 from'../img/ic_location_map2.png'; //3

/**
 * 1.ScheduleBlock 最大區塊 (用來組織包含其他子元件 -> 這個元件的最上層的容器)
 * 2.ScheduleSelector 行程切換選擇區塊 (放到ScheduleBlock中)
 * 3.ScheduleSelectDay 行程天數select (放ScheduleSelector中)
 * 4.ScheduleSelectOption 行程天數select的選項 (放ScheduleSelectDay中)
 * 5.GoogleMapReact (之前的ScheduleMap) 地圖區塊 (放到ScheduleMap中)
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

/*
1.Component 出 地圖 (scheduleMap Component) 區塊 Loading Google
2.加入 props 到 地圖 (scheduleMap Component) 區塊 Component
3.加入 state 到 地圖 (scheduleMap Component) 區塊 Component
4.Using the Browser's Current Location 使用瀏覽器的當前位置
5.用addListener 加入 拖動 (Dragging) 動作
6.加入 Markers 到地圖中
7.Creating the MarkerComponent (Marker區塊)
8.Adding a Marker Info Window (標記信息窗口)
9.結論
*/

/*
1.Loading the Google API (加載Google API)
2.Handling access to the Google API within our components (處理組件中對Google API的訪問權限)
*/

//建立一個 GoogleApiComponent
//cache - 瀏覽器從自身的 cache 空間中取得要求的檔案內容、省下至 Server 端撈回檔案內容的這段傳輸成本，不用去 Server 下載、直接從瀏覽器 cache（一般來說會存放在本機的硬碟）會比較快

export class MapContainer extends Component {
  constructor (props) {
    super(props);
    console.log(props);
    this.state = {

    };
  }
  
  render() {
    //座標資料從 (從stories來)
    var points = [
      {lat:43.063569, lng:142.631352},
      {lat:43.06382, lng:142.632433},
      {lat:43.06376, lng:142.62587099999996},
      {lat:43.077074, lng:142.59889099999998},
      {lat:43.155365, lng:144.44478600000002},
      {lat:43.45146, lng:144.09776499999998},
      {lat:44.057985, lng:145.10742099999993},
      {lat:44.038149, lng:144.935476}
    ];

    //imageStyle (可能從stories來)
    var imageStyleArray = [POINearbyLocation, IcPOILocation, IcLocationAirport, IcLocationMap2];
    var markerImage, infowindow, markerLabel, marker, markerId;

    markerImage = {
      url: imageStyleArray[0],
      scaledSize: new this.props.google.maps.Size(30, 38),
      anchor: new this.props.google.maps.Point(0, 0),
      labelOrigin: new this.props.google.maps.Point(15, 15)
    };
 
    const style = {
      width: '100%',
      height: '100%'
    }

    var bounds = new this.props.google.maps.LatLngBounds();
    for (var i = 0; i < points.length; i++) {
      bounds.extend(points[i]);
    }

    return (
      <Map google={this.props.google} style={style}
        initialCenter={{lat: 24, lng: 121}}
        zoom={13}
        bounds={bounds}>
      
        { points.map((item, i) => 
          <Marker 
          key={'points_' + i}
          title={''}
          name={''}
          position={item}
          icon={markerImage} />)
        }
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>123</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: googleApiKey
})(MapContainer)

/*class ScheduleBlock extends Component {
  constructor (props) {
    super(props);
    console.log(props);
    this.state = {
    };
  }

  render() {
    return (
      //id="scheduleMap" className="gmWrapper"
      <div className="">
        <ScheduleSelector />
      </div>
    );
  }
}

ScheduleBlock.defaultProps = {

};

ScheduleBlock.propTypes = {

};

export default ScheduleBlock;*/