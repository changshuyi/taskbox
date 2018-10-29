import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FlightSelectorModal extends Component {
  constructor (props) {
      super(props);
      this.state = {
      };
  }

  componentDidMount () {
      console.log('componentDidMount');
  }

  componentDidUpdate() {
      console.log('componentDidUpdate');
  }

  componentWillMount() {
      this.handleServerItemsLoad('307');
      console.log('componentWillMount');
  }

  componentWillUnmount() {
      console.log('componentWillUnmount');
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
              console.log(itemList);
          }).catch((error) => {
              //console.error(error)
          });
      }
  }

  render(){
      return(
          <div className="">
             
          </div>
      )
  }
}

FlightSelectorModal.defaultProps = {

};

FlightSelectorModal.propTypes = {

};

export default FlightSelectorModal;