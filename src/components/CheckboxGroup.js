import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            isChecked: this.props.checked,
      };
    }

    handleChange = () =>{
        this.setState({
            isChecked: !this.state.isChecked
        });
        this.props.handleChange(!this.state.isChecked, this.props.index);
        this.props.changeCSS('red');
    }
    
    render() {
        return (
            <label>
                <input name={this.props.title} type="checkbox" checked={this.state.isChecked} onChange={this.handleChange} value={this.props.index} /> {this.props.title}
            </label>
        )
    }
}

const inputcheck = [];

class CheckboxGroup extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            isChecked: this.props.check,
            checkedAll: false,
            checkedInvert: false
        };
    }

    //全選
    handleAllChange(){
        const { checkedAll} = this.state;

        data.map(function(item, index){
            return item.checked = !checkedAll;
        })

        this.setState({
            isChecked: true,
            checkedAll: !checkedAll,
            checkedInvert: false,
            
        });
    }

    //反選
    handleInvertChange(inputcheck){
        this.setState({
            isChecked: false
        });
    }

    toggleChange = (isChecked, index) => {
        this.setState({
            isChecked: !isChecked
        });

        if(inputcheck.indexOf(index) === -1)
            inputcheck.push(index);
        else
            inputcheck.splice(inputcheck.indexOf(index), 1);

        if(inputcheck.length > 3)
            this.handleInvertChange(inputcheck);

        this.showToggleDatas(index);
    }

    showToggleDatas = (index) => {
        console.log(index);
    }

    changecss = (value) => {
        console.log(value);
    }

    render() {
        return (
            <div>
            {
                this.props.tasks.map((val, i)=>{
                    return  <Checkbox key ={i + '_' + val.id} index={val.id} checked={this.state.isChecked} handleChange={this.toggleChange} changeCSS={this.changecss} title={val.title} /> 
                })
            }
            </div>
        );
    }
}

CheckboxGroup.defaultProps = {

};

CheckboxGroup.propTypes = {

};

export default CheckboxGroup;