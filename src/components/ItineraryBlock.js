import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DayInfo from './Content/DayInfo';
import DayList from './Content/DayList';

class ItineraryBlock extends Component {
  constructor (props) {
    super(props);
    console.log(props);
    this.state = {
    };
  }
  
  render(){
    return(
      <div>
        <DayInfo />
        <DayList actions={this.props.actions} />
      </div>
    )
  }
}

ItineraryBlock.defaultProps = {

};

ItineraryBlock.propTypes = {

};

export default ItineraryBlock;