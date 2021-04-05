import React, { Component} from "react";
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import Header from "../Header/Header"

class Login extends Component{
    state = {
        Username : '', 
        Password : '',
        loginchk: false
    }
    changeHandler =(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        }  
        )
    }
    submitLogin = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:90/reader/login", this.state)
        .then((response)=>{
            console.log(response.data.token)

            localStorage.setItem('token', response.data.token)
               localStorage.setItem('userType', response.data.userType)
               this.setState({
                   chkLogin:true
               })
               this.props.history.push("/home")
               window.location.reload()
        })        
        .catch((err)=>{
            console.log(err.response)
            alert("Mr./Mrs. "+ this.state.Username+ " invalid login")
        })
    }
    render(){
        return(
            <div class='formcontainer'>
                <Header></Header>
                <form className="login-form">
                    <h1>Login</h1>
                <div class="txtb">
                    <input type="text" name="Username" value={this.state.Username} onChange={(event)=>{this.setState({Username:event.target.value})}} placeholder="Username"/>     
                </div>
                    <div class="txtb">
                        <input type="password" name="Password" value={this.state.Password} onChange={(event)=>{this.setState({Password:event.target.value})}} placeholder="Password"/>
                    </div>
                    <input type="submit" class="logbtn" onClick={this.submitLogin}></input>
                    <div class="bottom-text">
                         Don't have account? <a href="/register">Sign up</a>
                    </div>
                </form>
            </div>
        )
    }
}
export default Login;