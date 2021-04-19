import { Component,state } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom'
import Header from "../Header/Header"
import { AiFillFacebook, AiFillTwitterCircle ,AiFillGithub ,AiFillYoutube} from "react-icons/all";

class Profile extends Component{
  
    state = {
        Title : '',
        Auther : '',
        Cost : '',
        Description:'',
        Image : '',
        id : this.props.match.params.id
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
                Title : response.data.Title,
                Auther : response.data.Auther,
                Cost : response.data.Cost,
                Description: response.data.Description,
                Image:response.data.Image
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
                    <a href="#" class="contact-btn">Contact Me</a>
                </div>
                <div class="profile-footer">
                    <div class="numbers">
                    <div class="item">
                        <span>120</span>
                        Posts
                    </div>
                    <div class="border"></div>
                    <div class="item">
                        <span>127</span>
                        Following
                    </div>
                    <div class="border"></div>
                    <div class="item">
                        <span>120K</span>
                        Followers
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