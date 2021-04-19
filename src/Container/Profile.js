import { Component,state } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom'
import Header from "../Header/Header"
import { AiFillFacebook, AiFillTwitterCircle ,AiFillGithub ,AiFillYoutube} from "react-icons/all";

class Profile extends Component{
  
    state = {
        first_name : '',
        last_name : '',
        age : '',
        email:'',
        contact : '',
        location : '',
        id : localStorage.getItem('data')
    }
   changeHandler = (e)=>{
       this.setState({
        [e.target.name] : e.target.value
       })
        
   }
   
    componentDidMount(){
        axios.get("http://localhost:90/user/"+ this.state.id)
        .then((response)=>{
            this.setState({
                first_name : response.data.reader.first_name,
                last_name : response.data.reader.last_name,
                age : response.data.reader.age,
                email: response.data.reader.email,
                contact:response.data.reader.contact,
                location:response.data.reader.location
            })   
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }
    render(){
        return(
            <div className="app">
                 <Header></Header>
            {
                <div class="profile">
                <div class="profile-header">
                    <div class="pic">
                    <img src="pic.png" alt=""/>
                    </div>
                    <div class="name">John Doe</div>
                    <div class="desc">Developer & Designer</div>
                    <div class="sm">
                    <AiFillFacebook className="facebookp"/>
                    <AiFillTwitterCircle className="twitterp"/>
                    <AiFillGithub className="githubp"/>
                    <AiFillYoutube className="youtubep" />
                    </div>
                </div>
                <div class="profile-footer">
                    <div class="numbers">
                    <div class="items">
                        <h6>First Name: {this.state.first_name}</h6>
                        <h6>Last Name: {this.state.last_name}</h6>
                        <h6>Age: {this.state.age}</h6>
                        <h6>Email: {this.state.email}</h6>
                        <h6>Contact: {this.state.contact}</h6>
                        <h6>Location: {this.state.location}</h6>
                    </div>
                    </div>
                </div>
                </div>   
            }
          </div>
        )
    }
}
export default Profile;