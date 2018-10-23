import React, { Component } from 'react';
import PropTypes from 'prop-types';

import POIContent from './POIContent';
import poidemodatas from './demodatas/poidemodatas';

import './styles.css';

class DayList extends Component {
  constructor (props) {
    super(props);
    console.log(props);
    this.state = {
    };
  }
  
  render(){
    return(
        <div className="dayList view">
          <POIContent datas={poidemodatas} actions={this.props.actions} />
        </div>
    )
  }
}

DayList.defaultProps = {

};

DayList.propTypes = {

};

export default DayList;