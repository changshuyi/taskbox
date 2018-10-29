import React, { Component } from 'react';
import PropTypes from 'prop-types';

import  '../Content/styles/listBlock.css';

function SingleFlight(props) {
    return (
      <img className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      />
    );
}

//判斷航班跟行程用的css不一樣
function Title(props) {
    return (
        <div className="title">
            <i className="dayCircle"></i>{props.title}
        </div>
    );
}

function Info(props){
    return (
        <img className="Avatar"
          src={props.user.avatarUrl}
          alt={props.user.name}
        />
      );
}

class ScheduleList extends Component {
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

class Row extends Component {
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

class ListItem extends Component {
    constructor (props) {
        super(props);
        console.log(props);
        this.state = {};
    }

    renderTitle() {
        let placeContent = [];
        if(this.props.datas != null && this.props.datas.length > 0){
			for(let i = 0; i < this.props.datas.length; i++){
                placeContent.push(this.props.datas[i].cityName);
			}
        }
        return placeContent.join(" > ");
      }

    render(){
        return(
            <div className="listItem">
                <Title title={this.renderTitle()} />
            </div>
        )
    }
}

class ListBlock extends Component {
  constructor (props) {
    super(props);
    console.log(props);
    this.state = {};
  }
  
  render(){
    return(
        <div className="listView">
            <div className="listBlock">
                <ListItem datas={this.props.placelistdemodatas} />
            </div>
        </div>
    )
  }
}

ListBlock.defaultProps = {

};

ListBlock.propTypes = {

};

export default ListBlock;