import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const DayPickerItem = (items) => (
    <li className={items.active} onClick={items.onclick.bind(this, items)}>{items.dataday}</li>
  );
  
  const DayPicker = (items) => (
    <ul className="nav">
      {
        items.detailitem.map((item, i) => <DayPickerItem key={i} dataday={item.dataday} onclick={items.onItemClick} />)
      }
    </ul>
  );

class DayPickerBar extends Component {
  constructor (props) {
    super(props);
    console.log(props);
    this.state = {
        detailitem:[
            {
                dataday:"1"
            },
            {
                dataday:"2"
            },
            {
                dataday:"3"
            },
        ]
    };
  }
  
  render(){
    return(
      <div className="dayPickerBar">
        <DayPicker detailitem={this.state.detailitem} onItemClick={this.props.actions.onLeftBlockSwitch}/>
      </div>
    )
  }
}

DayPickerBar.defaultProps = {

};

DayPickerBar.propTypes = {

};

export default DayPickerBar;