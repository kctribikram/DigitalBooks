import { Component,state, changeHandler, submitLogin } from "react";
import axios from 'axios';
import Header from "../Header/Header"

class Login extends Component{
    state = {
        account_email : "",
        password : ""
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
            console.log(response);
            localStorage.setItem("token", response.data.token)
            this.setState({
                chkLogin: true
            })
        })        
        .catch((err)=>{
            console.log(err.response)
        })
    }
    render(){
        return(
            <div class='formcontainer'>
                <Header></Header>
                <form className="login-form">
                    <h1>Login</h1>
                <div class="txtb">
                    <input type="text" name="Username" value={this.state.Username} onChange={this.changeHandler} placeholder="Username"/>     
                </div>
                    <div class="txtb">
                        <input type="password" name="password" value={this.state.password} onChange={this.changeHandler} placeholder="Password"/>
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