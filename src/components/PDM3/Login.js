import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

//import {Redirect} from 'react-router-dom'; //轉跳頁面 (目前沒有用到)
import {PostData} from './services/PostData';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    login = () => {
        if(this.state.username && this.state.password){
            PostData('login', this.state).then((result) => {
                let responseJson = result;
                if(responseJson.userData){
                    sessionStorage.setItem('userData',JSON.stringify(responseJson));
                }
            });
        }
    }
    
    onChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    componentDidMount () {
        console.log('componentDidMount');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillMount() {
        this.handleServerLoad('A129352020', 'zp');
        console.log('componentWillMount');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleServerLoad = (userId, fr) => {
        if(userId !== '' && userId !== undefined){
            if(!fr)
                fr = 'zp';
                
            //fetch('http://ptx.transportdata.tw/MOTC/v2/Rail/Metro/Network?$top=30&$format=JSON' , {
            //fetch('http://172.19.104.43/login?userId='+ userId + '&from=' + fr , {
            fetch('http://localhost/pdm2/planner/getTourDetailInfo2?type=1&id=21098' , {
            //fetch('http://localhost/pdm3/resources/views/poidemodatas.json' , {
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: JSON.stringify({})
                }).then((response) => {
                    console.log(response);
                    //ok 代表狀態碼在範圍 200-299
                    if (!response.ok) throw new Error(response.statusText)
                        return response.json();
            }).then((items) => {
                console.log(items);
            }).catch((error) => {
                //console.error(error)
            });
        }
    }

    render(){
        return (
            <div className="row" id="Body">
                <div className="medium-5 columns left">
                    <h4>Login</h4>
                    <label>Username</label>
                    <input type="text" name="username" placeholder="Username" onChange={this.onChange}/>
                    <label>Password</label>
                    <input type="password" name="password"  placeholder="Password" onChange={this.onChange}/>
                    <input type="submit" className="button success" value="Login" onClick={this.login}/>
                </div>
            </div>
        );
    }
}

Login.defaultProps = {

};

Login.propTypes = {

};

export default Login;