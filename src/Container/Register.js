import { Component } from "react";
import axios from 'axios';
import Header from "../Header/Header"

class Register extends Component{
    state={
        first_name: "",
        last_name: "",
        age:"",
        contact:"",
        email:"",
        Username:"",
        Password:""
}

    reader=()=>{
        const data ={
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            age: this.state.age,
            contact: this.state.contact,
            email: this.state.email,
            Username: this.state.Username,
            Password: this.state.Password,
        }
        axios.post("http://localhost:90/reader/register", data)
        .then()
        .catch(err=>{console.log(err)})
    }
    render(){
        return(
            <div class='formcontainer'>
                <Header></Header>
                <form className="signup-form">
                        <h1>Register</h1>
                        <div class="txtr">
                            <input type="text" value={this.state.first_name} onChange={(event)=>{this.setState({first_name:event.target.value})}} placeholder="First Name"/>
                        </div>
                        <div class="txtr">
                            <input type="text" value={this.state.last_name} onChange={(event)=>{this.setState({last_name:event.target.value})}} placeholder="Last Name"/>
                        </div>
                        <div class="txtr">
                            <input type="number" value={this.state.age} onChange={(event)=>{this.setState({age:event.target.value})}} placeholder="Age"/>
                        </div>
                        <div class="txtr">
                            <input type="number" value={this.state.contact} onChange={(event)=>{this.setState({contact:event.target.value})}} placeholder="contact"/>
                        </div>
                        <div class="txtr">
                            <input type="email" value={this.state.email} onChange={(event)=>{this.setState({email:event.target.value})}} placeholder="Email"/>
                        </div>
                        <div class="txtr">
                            <input type="text" value={this.state.Username} onChange={(event)=>{this.setState({Username:event.target.value})}} placeholder="Username"/>
                        </div>
                        <div class="txtr">
                            <input type="password" value={this.state.Password} onChange={(event)=>{this.setState({Password:event.target.value})}} placeholder="Password"/>
                        </div>
                        <input type="submit" class="sigbtn" onClick={this.reader}></input>
                        <div class="bottom-stext">
                            Already have an account? <a href="/login">Login</a>
                        </div>
                    </form>
                </div>
        )
    }
}
export default Register;